import RestCountriesApi from '@api/clients/restCountriesClient';

const filterAllCountries = async () => {
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

export default filterAllCountries;
