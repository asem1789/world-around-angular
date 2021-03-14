import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Regions } from 'src/app/models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  regions: Regions[] = [
    {id: 1, value: 'africa', text: 'Africa'},
    {id: 2, value: 'americas', text: 'Americas'},
    {id: 3, value: 'asia', text: 'Asia'},
    {id: 4, value: 'europe', text: 'Europe'},
    {id: 5, value: 'oceania', text: 'Oceania'},
  ]
  isSelected: boolean = false;
  selectedRegion: string = "" ;
  @Output() region = new EventEmitter();


  constructor() { 
    this.selectedRegion = ""
  }

  ngOnInit(): void {
  }

  toggleClick(): void {
    this.isSelected = !this.isSelected;
  }

  onChooseValue(from: HTMLLIElement): void {
    const value = from.textContent || "";
    this.selectedRegion = value.trim();
    this.region.emit(this.selectedRegion);
  }

}
