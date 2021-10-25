import RestCountriesApi from '@api/clients/restCountriesClient';

export const filterAllCountries = async () => {
  const allCountries = await RestCountriesApi.getAllCountries();
  return allCountries.map((country) => {
    return {
      flagImage: country.flags.png,
      name: country.name,
      population: country.population,
      region: country.region,
      capital: country.capital || 'none',
    };
  });
};

export const filterSpecificCountry = async (countryName: string | string[] | undefined) => {
  const countryArr = await RestCountriesApi.getSpecificCountry(countryName);
  return countryArr.map((country) => {
    return {
      flagImage: country.flags.png,
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital || 'none',
      topLevelDomain: country.topLevelDomain,
      currenciesArr: country.currencies,
      languagesArr: country.languages,
      borderArr: country.borders,
    };
  });
};
