import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: any;

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCartBtnClick = (product: any) => {
    console.log("Add to cart...", product.title);
  }

}
