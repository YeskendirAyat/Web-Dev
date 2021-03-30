import { Component, OnInit } from '@angular/core';
class Product{
  name: string;
  description:string;
  price:string;
  rating:number;
  image:string;
  link:string;
  constructor(name:string,description:string,price:string,rating:number,image:string,link:string){
    this.name=name;
    this.description=description;
    this.price=price;
    this.rating=rating;
    this.image=image;
    this.link=link;
  }
}
@Component({
  selector: 'app-app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css']
})
export class AppProductListComponent implements OnInit {
  products:Array<Product>=[new Product("iOS 14 Programming for Beginners","iOS 14 Programming for Beginners: Get started with building iOS apps with Swift 5.3 and Xcode 12, 5th Edition","28,79$",5,"https://images-na.ssl-images-amazon.com/images/I/41WHw0CYAmL._SX404_BO1,204,203,200_.jpg","https://www.amazon.com/iOS-14-Programming-Beginners-building/dp/1800209746/ref=sr_1_26?dchild=1&keywords=programming&qid=1614012727&sr=8-26"),
                          new Product("iOS","iOS 11 Programming Fundamentals with Swift: Swift, Xcode, and Cocoa Basics 1st Edition","49.5$",4,'https://images-na.ssl-images-amazon.com/images/I/519HevRSseL._SX379_BO1,204,203,200_.jpg','https://www.amazon.com/iOS-11-Programming-Fundamentals-Swift/dp/1491999314/ref=sr_1_1?dchild=1&keywords=ios&qid=1613994041&s=books&sr=1-1'),
                          new Product("Python","Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming","99.9$",5,"https://images-na.ssl-images-amazon.com/images/I/51Z6Vf5UwTL._SX376_BO1,204,203,200_.jpg","https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_2?dchild=1&keywords=programming&qid=1614012727&sr=8-2"),
                          new Product("The Self-Taught Programmer","The Self-Taught Programmer: The Definitive Guide to Programming Professionally","9.99$",3,"https://images-na.ssl-images-amazon.com/images/I/31YJmObNTnL._SX404_BO1,204,203,200_.jpg","https://www.amazon.com/Self-Taught-Programmer-Definitive-Programming-Professionally/dp/0999685902/ref=sr_1_5?dchild=1&keywords=programming&qid=1614012727&sr=8-5"),
                          new Product("Software Engineering at Google","Software Engineering at Google: Lessons Learned from Programming Over Time","34.64$",3,"https://images-na.ssl-images-amazon.com/images/I/41oiI3x67dL._SX379_BO1,204,203,200_.jpg","https://www.amazon.com/Software-Engineering-Google-Lessons-Programming/dp/1492082791/ref=sr_1_7?dchild=1&keywords=programming&qid=1614012727&sr=8-7"),
                          new Product("Learning C#","Learning C# by Developing Games with Unity 2020: An enjoyable and intuitive approach to getting started with C# programming and Unity, 5th Edition","20.99$",5,"https://images-na.ssl-images-amazon.com/images/I/41N28d7KECL._SX403_BO1,204,203,200_.jpg","https://www.amazon.com/Learning-Developing-Games-Unity-2020/dp/1800207808/ref=sr_1_6?dchild=1&keywords=programming&qid=1614012727&sr=8-6"),
                          new Product("Clean Code","Clean Code: A Handbook of Agile Software Craftsmanship","28.79$",4,"https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg","https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_12?dchild=1&keywords=programming&qid=1614012727&sr=8-12"),
                          new Product("Software Design for Flexibility","Software Design for Flexibility: How to Avoid Programming Yourself into a Corner","34,99$",2,"https://images-na.ssl-images-amazon.com/images/I/41DA6xrWp4L._SX336_BO1,204,203,200_.jpg","https://www.amazon.com/Software-Design-Flexibility-Programming-Yourself/dp/0262045494/ref=sr_1_15?dchild=1&keywords=programming&qid=1614012727&sr=8-15"),
                          new Product("Introduction to Java","Introduction to Java Programming and Data Structures, Comprehensive Version","85,27$",4,"https://images-na.ssl-images-amazon.com/images/I/51lkHc6Hl1L._SX396_BO1,204,203,200_.jpg","https://www.amazon.com/Introduction-Programming-Structures-Comprehensive-Version/dp/0136520235/ref=sr_1_17?dchild=1&keywords=programming&qid=1614012727&sr=8-17"),
                          new Product("I am the cloud","I Am The Cloud: Programming Coder Journal For Computer Coding Lovers, 120 Pages 6 x 9 inches Software Developer Lined Notebook","23.23$",3,'https://images-na.ssl-images-amazon.com/images/I/319Zo+b6GfL._SX331_BO1,204,203,200_.jpg','https://www.amazon.com/Am-Cloud-Programming-Computer-Developer/dp/B08WP82RLS/ref=sr_1_10?dchild=1&keywords=programming&qid=1613994120&s=books&sr=1-10'),
                          ];
  constructor() { }

  ngOnInit(): void {
    // this.products=[]
  }
  shareTelegagram(link:string): void{
    window.open("https://t.me/share/url?url={ayat}&text={"+link+"}");
  }
  shareWatsapp(link:string): void{
    window.open("https://wa.me/whatsappphonenumber/?text={"+link+"}");
  }
}

