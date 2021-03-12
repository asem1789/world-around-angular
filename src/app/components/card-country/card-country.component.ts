import { Component, OnInit } from '@angular/core';
import { CountryInfo } from 'src/app/models';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {
  // country!: CountryInfo ;

  constructor() { }

  ngOnInit(): void {
  }

}
