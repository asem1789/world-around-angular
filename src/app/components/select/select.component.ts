import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RegionsInfo } from 'src/app/models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  regions: RegionsInfo[] = [
    { id: 1, value: 'all', text:  'All' },
    { id: 2, value: 'africa', text:  'Africa' },
    { id: 3, value: 'americas', text: 'Americas' },
    { id: 4, value: 'asia', text: 'Asia' },
    { id: 5, value: 'europe', text: 'Europe' },
    { id: 6, value: 'oceania', text: 'Oceania' },
  ];
  isSelected: boolean = false;
  selectedRegion: string | null = null;
  @Output() region = new EventEmitter();
  @Input() searchRegion: string  = '';

  constructor() {}

  ngOnInit(): void {
    this.selectedRegion = this.searchRegion;
  }

  toggleClick(): void {
    this.isSelected = !this.isSelected;
  }

  onChooseValue(value: string | null ): void {
    this.selectedRegion = value && value.trim();
    this.region.emit(this.selectedRegion);
  }
}
