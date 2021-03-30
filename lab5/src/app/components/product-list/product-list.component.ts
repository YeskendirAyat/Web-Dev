import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Product} from '../../../assets/interfaces/product';
import {products} from '../../../assets/products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  filteredProduct!:Product[];
  // name!:string;
  constructor(private route: ActivatedRoute) { 
  }
  ngOnInit(): void {
    this.tmp();
  }
  tmp():void{
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('categoryId'));
    // this.name=String(routeParams.get('name'));
    this.filteredProduct = products.filter(products=>products.categoryId === productIdFromRoute);
  }
  shareTelegagram(link:string): void{
    window.open("https://t.me/share/url?url={ayat}&text={"+link+"}");
  }
  shareWatsapp(link:string): void{
    window.open("https://wa.me/whatsappphonenumber/?text={"+link+"}");
  }
}
