import { SearchByNamePipe } from './search-by-name.pipe';
import { fackData } from '../../testing/fack-data';
import { CountryInfo } from 'src/app/models';

describe('searchByName Pipe', () => {
  it('should create an instance', () => {
    const pipe = new SearchByNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the all countries if value is empty', () => {
    const pipe = new SearchByNamePipe();
    let fackCountries: CountryInfo[] = fackData;
    const reuslt = pipe.transform(fackCountries, '');

    expect(reuslt).toBe(fackCountries);
  });

  it("should return Palestine Country if value is 'Palestine' ", () => {
    const pipe = new SearchByNamePipe();

    let fackCountries: CountryInfo[];

    fackCountries = fackData;
    const reuslt = pipe.transform(fackCountries, 'palestine');

    if (reuslt) {
      expect(reuslt![0].name).toBe('Palestine');
    } else {
      expect(reuslt).toBeUndefined();
    }
  });
});
