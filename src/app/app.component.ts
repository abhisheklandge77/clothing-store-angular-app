import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any;  

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(): void {
    this.productsService.getProducts().subscribe((res) => {
      console.log("products:::", res);
      this.products = res.products;
    })
  }
}
