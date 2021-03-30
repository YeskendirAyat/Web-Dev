import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  loading?: boolean;
  textField?:string='';
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumService,
              private routes:Router) {
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.getAlbum(id);
    });
  }

  getAlbum(id: number) {
    // console.log(this.album)

    this.loading = true;
    this.albumService.getAlbum(id).subscribe((album) => {
      this.album = album;
      this.loading = false;
    });
  }
  goToPhotos(){
    this.routes.navigate(['albums', this.album!.id, 'album-photos']);
  } 
  saveTitle(){
    if(this.textField?.trim()==''){
      alert("Please fill row");
      return;
    }
    this.album!.title=this.textField!;
    // this.album!.title!=document.getElementById("newName")?.nodeValue;
    this.albumService.updateAlbum(this.album!);
    this.textField='';
  }
  goBack() {
    this.location.back();
  }
}