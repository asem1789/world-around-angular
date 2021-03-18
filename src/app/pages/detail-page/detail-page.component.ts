import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryInfo } from 'src/app/models';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  country!: CountryInfo;
  borders: string[] = [];
  historyRoute: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      let name = params.params.countryName;
      this.countriesService
        .getCountryByName(name)
        .subscribe((res: CountryInfo[]) => {
          this.country = res[0];
          this.borders = res[0].borders;
        });
      this.historyRoute.push(name);
    });
  }

  onHandleBorderClick(code: string) {
    this.countriesService.getCountryByCode(code).subscribe((res: any) => {
      this.router.navigate(['/countries', res.name, 'detail']);
    });
  }
}
