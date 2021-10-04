type CountriesResponseType = {
  name: string;
  topLevelDomain: [string];
  capital: string;
  subregion: string;
  region: string;
  population: number;
  borders: string[];
  flags: {
    svg: string;
    png: string;
  };
  currencies: { name: string }[];
  languages: { name: string }[];
}[];

export default CountriesResponseType;
