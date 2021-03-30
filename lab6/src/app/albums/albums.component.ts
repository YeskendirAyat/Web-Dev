import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../models';
import {Location} from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums?: Album[];
  loading?: boolean;
  textField:string;
  constructor(private albumService: AlbumService,
    private location: Location
    ) {
    this.textField='';
  }
  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums() {
    this.loading = true;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loading = false;
    });
  }
  deleteAlbum(id: number) {
    this.albums = this.albums!.filter((x) => x.id !== id);
    this.albumService.deleteAlbum(id).subscribe();
  }
  addAlbum(){
    if(this.textField?.trim()==''){
      alert("Please fill row");
      return;
    }
    const album={userId:1,id:this.albums!.length+1, title:this.textField};
    this.albumService.addAlbum(album).subscribe((album)=>{this.albums!.push(album)});
    this.textField='';
  }

  goBack() {
    this.location.back();
  }
}
