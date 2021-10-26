type CountryPageType = {
  flagImage: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: [string];
  currenciesArr: { name: string }[];
  languagesArr: { name: string }[];
  bordersArr: string[];
};

export default CountryPageType;
