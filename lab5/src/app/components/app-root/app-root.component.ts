import { Component, OnInit } from '@angular/core';
import { Category } from 'src/assets/interfaces/category';
// import {}
@Component({
  selector: 'root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent implements OnInit {
  categories:Category[]=[
    {name:"Art",image:"https://dmdlnu87i51n1.cloudfront.net/v1/uk/cjt71gmed13yw01633y1ndqe4/0x0:1430x2000/960x960/302n10008_9t8wh_web.jpg",id: 0},
    {name:"Music",image:"https://img.discogs.com/-h-x3Ey8ayB7uADTI1ikZhbbvN8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3499327-1354692522-7695.jpeg.jpg",id:1},
    {name:"Books",image:"https://media.wnyc.org/i/800/0/l/85/2019/03/books.jpg",id: 2},
    {name:"Sports",image:"https://images.daznservices.com/di/library/sporting_news/21/fd/kobe-bryant-012620-getty-ftr_y3tstcxlz20513l61qsn78giw.jpg?t=-403910753&quality=100",id:3}
  ];
  constructor() { }
  ngOnInit(): void {
  }

}