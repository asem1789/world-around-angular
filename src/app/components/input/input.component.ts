import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() icon: string | null = null;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Output() searchInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChangeInput(event: any): void {
    const { value } = event;
    this.searchInput.emit(value);
  }
}
