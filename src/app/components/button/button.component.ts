import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonColor!: string;
  @Input() buttonText!: string;
  @Output() onBtnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleBtnClick = () => {
    this.onBtnClick.emit();
  }

}
