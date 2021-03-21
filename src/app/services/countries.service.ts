import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
        catchError(this.handleError('getCountreis')),
        map((res: any) => {
          return filterData(res);
        })
      );
  }

  getCountriesByRegion(region: string) {
    return this.http
      .get(`https://restcountries.eu/rest/v2/region/${region}`)
      .pipe(
        map((res: any) => {
          return filterData(res);
        })
      );
  }

  getCountryByName(name: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`).pipe(
      map((res: any) => {
        return filterData(res);
      })
    );
  }

  getCountryByCode(code: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${code}`).pipe(
      map((res: any) => {
        return filterData([res]);
      })
    );
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      const message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : `server returned code ${error.status} with body "${error.error}"`;
      throw new Error(`${operation} failed: ${message}`);
    };
  }
}
