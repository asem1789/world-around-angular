import { Component, OnInit } from '@angular/core';
import { CountryInfo } from 'src/app/models';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  countries$: CountryInfo[] = [];
  copyCountries: CountryInfo[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((res: CountryInfo[]) => {
      this.countries$ = res;
      this.copyCountries = res;
      /*
       * try to collect Palestine and Israeli occupation in only array
       * in order handle them esaily
       * when search is able to seach about isreal word and other Zionist occupation ...
       */
    });
  }

  // using pipe for searching
  searchCountry(value: string) {
    const filterSearch: CountryInfo[] = [];
    this.countries$.forEach((country) => {
      const countrySmall = country.name.toLowerCase();
      const resetValue = value.toLowerCase().trim();
      if (countrySmall.indexOf(resetValue) === -1) {
        return;
      }

      filterSearch.push(country);
    });

    this.copyCountries = filterSearch;
  }

  filterByRegion(value: string) {
    this.countriesService
      .getCountriesByRegion(value)
      .subscribe((res: CountryInfo[]) => {
        this.countries$ = res;
        this.copyCountries = res;
      });
  }
}
