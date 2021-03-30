import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../models';
import {Location} from '@angular/common';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos?:Photo[];
  loading?: boolean;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService,
    private routes:Router) {}
  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos() {
    this.loading=true;

    this.albumService.getPhotos(+this.route.snapshot.paramMap.get('id')!).subscribe((photos)=>{this.photos=photos;this.loading=false;})
  }
  goBack() {
    this.location.back();
  }

}
