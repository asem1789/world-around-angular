import { Component, Input, OnInit } from '@angular/core';
import { CountryInfo } from 'src/app/models';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {
  @Input() country!: CountryInfo;
  @Input() countryInput: string = "";
  isSpam: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.country.name === 'Israel'){
      this.isSpam = true;
    }else {
      this.isSpam = false;
    }
    
  }

}
