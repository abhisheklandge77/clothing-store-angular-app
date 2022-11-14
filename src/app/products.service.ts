import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartProductsList: any = [];
  private cartProducts$ = new BehaviorSubject<any>([]);
  cartProductsList$ = this.cartProducts$.asObservable();

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get('../assets/productsData.json');
  }

  setCartProduts(product: any): void {
    console.log("set product:::", product);
    const isProductPresent = this.cartProductsList.find((p: any) => p.code === product.code);
    if (!isProductPresent) {
      this.cartProductsList.push(product);
      this.cartProducts$.next(this.cartProductsList);
    }
  }

  removeCartProducts(product: any): void {
    const isProductPresent = this.cartProductsList.find((p: any) => p.code === product.code);
    if (isProductPresent) {
      this.cartProductsList = this.cartProductsList.filter((p: any) => p.code !== product.code);
      this.cartProducts$.next(this.cartProductsList);
    }
  }

  updateCartProducts(product: any): void {
    const index = this.cartProductsList.findIndex((p: any) => p.code === product.code);
    if (index !== -1) {
      this.cartProductsList[index] = product;
      console.log("updateCartProducts::::", this.cartProductsList);
      this.cartProducts$.next(this.cartProductsList);
    }
  }
}
