import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../../../assets/interfaces/product';
import {products} from '../../../assets/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product!:Product;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void{ 
    this.tmp();
  }
  DeteleItem():void{
    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));
    // this.product=products.find(product => product.id == productIdFromRoute) || products[0];
    this.product.isRemoved=true;
    this.router.navigate(['/'+this.product.categoryId+'/products']);
  }
  isLicked():void{
    if (this.product.isLiked){
      this.product.likesCount-=1;
    }else{
      this.product.likesCount+=1;
    }
    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));
    products.find(product => product.id == productIdFromRoute)!.isLiked=!products.find(product => product.id == productIdFromRoute)!.isLiked;
  }
  tmp():void{
    // console.log(this.route.snapshot.paramMap.get('productId'));
    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute) || products[0];
  }
  shareTelegagram(link:string): void{
    window.open("https://t.me/share/url?url={ayat}&text={"+link+"}");
  }
  shareWatsapp(link:string): void{
    window.open("https://wa.me/whatsappphonenumber/?text={"+link+"}");
  }
}