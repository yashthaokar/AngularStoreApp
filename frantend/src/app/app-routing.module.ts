import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {path:"", redirectTo:"products", pathMatch:"full"},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:"create", component:CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
