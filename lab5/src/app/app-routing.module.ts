import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
// import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AppRootComponent } from './components/app-root/app-root.component';
// const routes: Routes = [];
const routes:Routes=[
  {path:'', component: AppRootComponent},
  {path:':categoryId/products', component:ProductListComponent},
  {path:'products/:productId',component:ProductItemComponent}
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }