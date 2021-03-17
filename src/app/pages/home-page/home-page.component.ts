import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryInfo } from 'src/app/models';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  countries$: CountryInfo[] = [];
  searchText: string = '';
  searchRegion: string = '';

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (this.isParamsEmpty(params)) {
        this.getAllCountries();
      } else {
        if (!!params.region && this.checkValidQuery(params.region)) {
          this.getCountriesByRegion(params.region);
        } else {
          this.router.navigate(['/countries']);
        }
      }
    });
  }

  onSearchingCountry(value: string) {
    this.searchText = value;
  }

  onFilterByRegion(value: string) {
    this.router.navigate(['/countries'], { queryParams: { region: value } });
  }

  getAllCountries() {
    this.countriesService.getAllCountries().subscribe((res: CountryInfo[]) => {
      this.countries$ = res;
    });
  }

  getCountriesByRegion(region: string) {
    this.countriesService
      .getCountriesByRegion(region)
      .subscribe((res: CountryInfo[]) => {
        this.searchRegion = region;
        this.countries$ = res;
      });
  }

  isParamsEmpty(params: any): boolean {
    if (Object.keys(params).length === 0 && params.constructor === Object) {
      return true;
    } else {
      return false;
    }
  }

  checkValidQuery(region: string): boolean {
    if (
      region === 'Africa' ||
      region === 'Americas' ||
      region === 'Asia' ||
      region === 'Europe' ||
      region === 'Oceania'
    ) {
      return true;
    }
    return false;
  }
}
