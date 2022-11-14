import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {
  cartProducts: any;

  constructor(private productsService: ProductsService) {
  }
  
  ngOnInit(): void {
    this.productsService.cartProductsList$.subscribe((res) => {
      this.cartProducts = res;
      console.log("cartProducts:::", this.cartProducts);
    });
  }

}
