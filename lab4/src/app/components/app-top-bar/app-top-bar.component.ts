import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.css']
})
export class AppTopBarComponent implements OnInit {
  name_of_shop:string='Online shop';
  image:string='checkoutIcon.png';
  imageLogo:string='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png';
  constructor() {}
  ngOnInit():void {
    // this.name_of_shop=;
    // this.name='checkoutIcon.png';
  }

}
