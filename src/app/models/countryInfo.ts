export class CountryInfo {
  name: string;
  population: number;
  region: string;
  capital: string;

  constructor(data: any) {
    this.name = data.name;
    this.population = data.population;
    this.region = data.region;
    this.capital = data.capital;
  }
}