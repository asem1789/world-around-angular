export class CountryInfo {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borders: string[];
  correctName?: string;

  constructor(data: any) {
    this.checkCorrectInfo(data);
    this.name = data.name;
    this.population = data.population;
    this.region = data.region;
    this.capital = data.capital;
    this.flag = data.flag;
    this.nativeName = data.nativeName;
    this.subregion = data.subregion;
    this.topLevelDomain = data.topLevelDomain[0];
    this.currencies = data.currencies[0].name;
    this.languages = this.convertToString(data.languages);
    this.borders = data.borders;
    this.correctName = data.name === 'Israel' && data.correctName
  }

  checkCorrectInfo(country: any) {
    if (country.name === 'Palestine, State of') {
      country.capital = 'AL-Quds';
      country.name = 'Palestine';
      country.borders = ['EGY', 'JOR', 'LBN', 'SYR'];
      country.population = 13700000;
      country.currencies = [
        {
          code: 'ILS',
          name: 'currency occupation sheqel',
          symbol: '₪',
        },
      ];
    } 
    else if (country.name === 'Israel') {
      country.name = 'Israel';
      country.correctName = 'Zionist occupation';
      country.capital = 'No capital ';
      country.borders = [];
    }
  }

  convertToString(langs: string[]): string {
    let result = '';
    langs.forEach((el: any, i) => {
      if (i === langs.length - 1) {
        result += `${el.name}`;
      } else {
        result += `${el.name}, `;
      }
    });
    return result;
  }
}
