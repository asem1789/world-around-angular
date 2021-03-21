import { HttpErrorResponse } from '@angular/common/http';
import { defer } from 'rxjs';
import { fackData } from '../testing/fack-data';
import { CountriesService } from './countries.service';

describe('Countries service sesting ', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let countriesServ: CountriesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    countriesServ = new CountriesService(httpClientSpy as any);
  });

  it('should return expected Countres (HttpClient called once)', () => {
    const expectedCountries = fackData;
    
    httpClientSpy.get.and.returnValue(asyncData(expectedCountries));
  
    countriesServ.getAllCountries().subscribe(
      countries => {
        expect(countries).toEqual(expectedCountries, 'expected countries')
      },
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    countriesServ.getAllCountries().subscribe(
      countries => fail('expected an error, not countries'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });


});

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}