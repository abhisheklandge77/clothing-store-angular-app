import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartProductsComponent } from './components/cart-products/cart-products.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'cart-products',
    component: CartProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
