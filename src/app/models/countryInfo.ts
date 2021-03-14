export class CountryInfo {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;

  constructor(data: any) {
    this.checkCorrectInfo(data);
    this.name = data.name;
    this.population = data.population;
    this.region = data.region;
    this.capital = data.capital;
    this.flag = data.flag;
  }

  checkCorrectInfo(country: any) {
    if (country.name === 'Palestine, State of') {
      country.capital = 'AL-Quds';
      country.name = 'Palestine';
      country.borders = ['EGY', 'JOR', 'LBN'];
    } else if (country.name === 'Israel'){
      // try to add some correct info withsome links
      country.name = 'Israel';
      country.capital = 'No capital ';
      // country.borders = ['EGY', 'JOR', 'LBN'];
    }
  }
}
