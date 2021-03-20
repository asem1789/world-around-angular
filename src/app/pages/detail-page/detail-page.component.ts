import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryInfo } from 'src/app/models';
import { StackHistoryService } from 'src/app/services';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  country!: CountryInfo;
  borders: string[] = [];
  loading: boolean = true;
  isSpam: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
    private stackHistory: StackHistoryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      let name = params.params.countryName;
      this.onGetCountryByName(name);
    });
  }

  onGetCountryByName(name: string): void{
    this.countriesService
    .getCountryByName(name)
    .subscribe((res: CountryInfo[]) => {
      this.loading = false;
      this.country = res[0];
      this.borders = res[0].borders;
      this.filterData(res[0]);
    });
  }

  filterData(country: CountryInfo) {
    if (country.name === 'Israel') {
      this.isSpam = true;
    } else {
      this.isSpam = false;
    }
  }

  onHandleBorderClick(code: string) {
    this.loading = true;
    this.countriesService.getCountryByCode(code).subscribe((res: any) => {
      this.stackHistory.goFront(res.name);
      this.router.navigate(['/countries', res.name, 'detail']);
    });
  }
}
