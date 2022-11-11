import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() handlePageChange = new EventEmitter();
  @Output() handlePageSizeChange = new EventEmitter();

  pageSizes: any = [10, 15, 20];

  constructor() { }

  ngOnInit(): void {
  }

  onPageCurrentChange(event: any): void{
    this.handlePageChange.emit(event);
  }

  onPageSizeChange(event: any): void{
    this.handlePageSizeChange.emit(event);
  }

}
