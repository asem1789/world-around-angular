import { CountryInfo } from '../models';

export function filterData(arr: CountryInfo[]) {
  let result: CountryInfo[] = [];
  result = arr.map((el, i) => {
    let edited = checkCorrectInfo(el);
    return edited;
  });

  return result;
}

function checkCorrectInfo(country: any) {
  country.languages = convertToString(country.languages);
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
  } else if (country.name === 'Israel') {
    country.name = 'Israel';
    country.correctName = 'Zionist occupation';
    country.capital = 'No capital ';
    country.borders = [];
  }

  return country;
}

function convertToString(langs: string[]): string {
  let result = '';
  for (let i = 0; i < langs.length; i++) {
    let el: any = langs[i];
    if (i === langs.length - 1) {
      result += `${el.name}`;
    } else {
      result += `${el.name}, `;
    }
  }
  return result;

  /* 
    #question
    * when use below I've this error By testin 
    * Failed: langs.forEach is not a function
  TypeError: langs.forEach is not a function

  */

  // langs.forEach((el: any, i) => {
  //   if (i === langs.length - 1) {
  //     result += `${el.name}`;
  //   } else {
  //     result += `${el.name}, `;
  //   }
  // });
}
