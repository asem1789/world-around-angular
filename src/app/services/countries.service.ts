import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { filterData } from '../helper/filter-data';
import { CountryInfo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<CountryInfo[]> {
    return this.http
      .get<CountryInfo[]>('https://restcountries.eu/rest/v2/all')
      .pipe(
        catchError(this.handleError('error, there something wrong, Try Later')),
        map((res: any) => {
          return filterData(res);
        })
      );
  }

  getCountriesByRegion(region: string) {
    return this.http
      .get(`https://restcountries.eu/rest/v2/region/${region}`)
      .pipe(
        catchError(this.handleError('error, there something wrong, Try Later')),
        map((res: any) => {
          return filterData(res);
        })
      );
  }

  getCountryByName(name: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`).pipe(
      catchError(this.handleError('error, there something wrong, Try Later')),
      map((res: any) => {
        return filterData(res);
      })
    );
  }

  getCountryByCode(code: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${code}`).pipe(
      catchError(this.handleError('error, there something wrong, Try Later')),
      map((res: any) => {
        return filterData([res]);
      })
    );
  }

  private handleError<T>(msg = 'something wrong') {
    return (): Observable<T> => {
      throw new Error(`${msg}`);
    };
  }
}
