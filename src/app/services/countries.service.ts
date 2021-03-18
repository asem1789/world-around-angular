import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CountryInfo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {

  constructor(private http: HttpClient) {}
  
  getAllCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(
      map((response: any) => {
        return response.map((country: any) => {
          return new CountryInfo(country);
        });
      })
    )
  }

  getCountriesByRegion(region: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`).pipe(
      map((res: any)=> {
        return res.map((country: any)=> {
          return new CountryInfo(country);
        })
      })
    )
  }

  getCountryByName(name: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`).pipe(
      map((res: any)=> {
        return res.map((country: any)=> {
          return new CountryInfo(country);
        })
      })
    )
  }

  getCountryByCode(code: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${code}`).pipe(
      map((res: any)=> {
        return new CountryInfo(res);
      })
    )
  }

}
