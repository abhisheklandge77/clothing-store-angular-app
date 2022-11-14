import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;

  constructor(private productsService: ProductsService) {
  }
  
  ngOnInit(): void {
    this.productsService.cartProductsList$.subscribe((res) => {
      this.cartCount = res.length;
      console.log("cartProducts nav::::", res);
    });
  }
}
