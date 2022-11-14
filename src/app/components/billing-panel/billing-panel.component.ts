import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-billing-panel',
  templateUrl: './billing-panel.component.html',
  styleUrls: ['./billing-panel.component.css']
})
export class BillingPanelComponent implements OnInit {
  cartProducts: any;
  grandTotal: number = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.cartProductsList$.subscribe((res) => {
      this.cartProducts = res;
      console.log("billing cartProducts:::", this.cartProducts);
      this.getGrandToatal(res);
    });
  }

  getGrandToatal(products: any): void {
    this.grandTotal = 0;
    if(products.length){
      products.forEach((p: any) => {
        this.grandTotal +=  (p.quantity * p.price.value);
      })
      this.grandTotal =  Number(this.grandTotal.toFixed(2));
    }
  }

}
