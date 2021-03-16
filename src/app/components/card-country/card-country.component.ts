import { Component, Input } from '@angular/core';
import { CountryInfo } from 'src/app/models';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent {
  @Input() country!: CountryInfo;
  @Input() countryInput: string = "";

  constructor() { }

}
