import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  page: number = 1;
  totalCount: number = 0;
  pageSize: number = 10;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.productsService.cartProductsList$.subscribe((cartProducts: any) => {
        cartProducts.forEach((product: any) => {
          const isProductPresent = res.products.find((p: any)=> p?.code === product?.code);
          if(isProductPresent){
            isProductPresent.quantity = product.quantity;
            isProductPresent.addedToCart = product.addedToCart;
          }
        });
      })
      console.log("products:::", res);
      this.products = res.products;
    })
  }

  setCurrentPage(currentPage: any): void {
    this.page = currentPage;
  }

  setPageSize(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }
}
