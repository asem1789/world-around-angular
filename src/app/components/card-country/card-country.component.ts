import { Component, OnInit, Input } from '@angular/core';
import { CountryInfo } from 'src/app/models';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {
  @Input() country!: CountryInfo;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.country);
  }

}
