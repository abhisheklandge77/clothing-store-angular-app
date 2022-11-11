import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products!: any[];
  page: number = 1;
  totalCount: number = 0;
  pageSize: number = 10;

  constructor() {}

  ngOnInit(): void {}

  setCurrentPage(currentPage: any): void{
    this.page = currentPage;
  }

  setPageSize(event: any): void{
    this.pageSize = event.target.value;
    this.page = 1;
  }
}
