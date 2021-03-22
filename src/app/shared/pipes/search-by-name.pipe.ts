import { Pipe, PipeTransform } from '@angular/core';
import { CountryInfo } from 'src/app/models';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {
  transform(
    countries: CountryInfo[],
    searchCountry: string
  ): CountryInfo[] | undefined {
    if (!countries) {
      return;
    }
    if (!searchCountry) {
      return countries;
    }

    return countries.filter(({ name, nativeName }) => {
      const resetSearch = searchCountry.toLowerCase();
      if (nativeName.includes(resetSearch)) {
        return true;
      }
      return name.toLowerCase().indexOf(resetSearch) !== -1;
    });
  }
}
