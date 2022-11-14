import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CartProductsComponent } from './components/cart-products/cart-products.component';
import { BillingPanelComponent } from './components/billing-panel/billing-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductCardComponent,
    FooterComponent,
    ButtonComponent,
    PaginationComponent,
    CartProductsComponent,
    BillingPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
