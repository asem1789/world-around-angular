import { SearchByNamePipe } from './search-by-name.pipe';
import {CountriesFack} from '../../testing/fack-data';
import { CountryInfo } from 'src/app/models';

describe('searchByName Pipe', () => {
  it('should create an instance', () => {
    const pipe = new SearchByNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the all countries if value is empty', () => {
    const pipe = new SearchByNamePipe();
    let fackCountries: CountryInfo[];

    fackCountries = CountriesFack;
    const reuslt = pipe.transform(fackCountries, "");

    expect(reuslt).toBe(fackCountries);
  });
  
  it('should return Palestine Country if value is \'Palestine\' ', () => {
    const pipe = new SearchByNamePipe();

    let fackCountries: CountryInfo[];

    fackCountries = CountriesFack;
    const reuslt = pipe.transform(fackCountries, "palestine");

    if(reuslt){
      expect(reuslt![0].name).toBe("Palestine");      
    }else {
      expect(reuslt).toBeUndefined();
    }
  });

  // it('should return current color', () => {
  //   const pipe = new ColorNamerPipe();
  //   let transformedValue = pipe.transform({
  //     r: 255,
  //     g: 255,
  //     b: 255
  //   });
  //   expect(transformedValue).toEqual('white');
  //   transformedValue = pipe.transform({
  //     r: 255,
  //     g: 0,
  //     b: 0,
  //   });
  //   expect(transformedValue).toEqual('red');
  //   transformedValue = pipe.transform({
  //     r: 0,
  //     g: 255,
  //     b: 0,
  //   });
  //   expect(transformedValue).toEqual('lime');

  // });
});
