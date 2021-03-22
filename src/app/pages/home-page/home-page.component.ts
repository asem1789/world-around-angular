import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CountryInfo } from 'src/app/models';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  countries$: CountryInfo[] = [];
  searchText: string = '';
  searchRegion: string = '';
  loading: boolean = true;
  error: string | null = null;
  selected!: string;
  private countriesSubscription!: Subscription;

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countriesSubscription = this.route.queryParams.subscribe((params) => {
      if (this.isParamsEmpty(params)) {
        this.searchRegion = '';
        this.getAllCountries();
      } else {
        if (!!params.region && this.checkValidQuery(params.region)) {
          this.getCountriesByRegion(params.region);
          this.searchRegion = params.region;
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
    if (this.searchRegion === value) {
      return;
    }
    this.loading = true;
    this.router.navigate(['/countries'], { queryParams: { region: value } });
  }

  getAllCountries() {
    this.countriesService.getAllCountries().subscribe(
      (res: CountryInfo[]) => {
        this.countries$ = res;
        this.loading = false;
      },
      (err: Error) => {
        this.handleError(err.message);
        this.loading = false;
        this.error = err.message;
      }
    );
  }

  getCountriesByRegion(region: string) {
    this.countriesService.getCountriesByRegion(region).subscribe(
      (res: CountryInfo[]) => {
        this.searchRegion = region;
        this.countries$ = res;
        this.loading = false;
      },
      (err: Error) => {
        this.handleError(err.message);
        this.loading = false;
        this.error = err.message;
      }
    );
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

  handleError(msg: string) {
    this.loading = false;
    this.error = msg;
  }

  ngOnDestroy() {
    this.countriesSubscription.unsubscribe();
  }
}
