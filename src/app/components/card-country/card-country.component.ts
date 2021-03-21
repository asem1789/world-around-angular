import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryInfo } from 'src/app/models';
import { StackHistoryService } from 'src/app/services';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css'],
})
export class CardCountryComponent implements OnInit {
  @Input() country!: CountryInfo;
  @Input() countryInput: string = '';
  isSpam: boolean = false;

  constructor(
    private router: Router,
    private stackHistory: StackHistoryService
  ) {}

  ngOnInit() {
    if (this.country.name === 'Israel') {
      this.isSpam = true;
    } else {
      this.isSpam = false;
    }
  }

  onClick(name: string) {
    this.stackHistory.goFront(name);
    this.router.navigate(['/countries', name, 'detail']);
  }
}
