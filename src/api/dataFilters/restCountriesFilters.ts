import { join } from 'lodash';

import RestCountriesApi from '@api/clients/restCountriesClient';

export const filterAllCountries = async () => {
  const allCountries = await RestCountriesApi.getAllCountries();
  return allCountries.map((country) => {
    return {
      flagImage: country.flags.svg,
      name: country.name,
      population: country.population,
      region: country.region,
      capital: country.capital || 'none',
    };
  });
};

export const filterSpecificCountry = async (countryName: string | string[] | undefined) => {
  let fixedName = countryName;
  if (countryName === 'Åland Islands') {
    fixedName = 'Aland Islands';
  }
  const countryArr = await RestCountriesApi.getSpecificCountry(fixedName);
  const filteredArr = countryArr.filter((country) => country.name === countryName);

  return filteredArr.map((country) => {
    return {
      flagImage: country.flags.svg,
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital || 'none',
      topLevelDomain: country.topLevelDomain,
      currenciesArr: country.currencies,
      languagesArr: country.languages,
      bordersArr: country.borders || [],
    };
  });
};

export const filterBordersCountries = async (countriesArr: string[] | undefined) => {
  if (countriesArr?.length === 0) {
    return [];
  }
  const codes = join(countriesArr, ',');
  const countryArr = await RestCountriesApi.getBorderCountries(codes);
  return countryArr.map((country) => country.name);
};
