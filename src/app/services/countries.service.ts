import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getCountriesByRegion(region: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`)
  }
}
