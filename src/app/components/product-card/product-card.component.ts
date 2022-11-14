import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  onAddToCartBtnClick = (cartProduct: any) => {
    cartProduct.quantity = 1;
    cartProduct.addedToCart = true;
    this.productsService.setCartProduts(cartProduct);
  }

  onRemoveFromCartBtnClick = (cartProduct: any) => {
    cartProduct.quantity = 0;
    cartProduct.addedToCart = false;
    this.productsService.removeCartProducts(cartProduct);
  }

  onIncreaseQuantityBtnCLick = (cartProduct: any) => {  
    cartProduct.quantity = cartProduct.quantity + 1;
    this.productsService.updateCartProducts(cartProduct);
  }

  onDecreaseQuantityBtnCLick = (cartProduct: any) => {
    cartProduct.quantity = cartProduct.quantity - 1;
    if(cartProduct.quantity === 0){
      cartProduct.addedToCart = false;
      this.productsService.removeCartProducts(cartProduct);
    }
    this.productsService.updateCartProducts(cartProduct);
  }
}
