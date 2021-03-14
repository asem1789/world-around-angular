import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() searchInput = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChangeInput(event: any): void {
    const { value } = event;
    this.searchInput.emit(value);
  }
}
