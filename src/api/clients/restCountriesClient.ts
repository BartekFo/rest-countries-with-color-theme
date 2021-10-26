import axios from 'axios';
import CountriesResponseType from '@root/@types/CountriesResponseType';

class RestCountriesClient {
  api = axios.create({
    baseURL: 'https://restcountries.com/v2',
  });

  getAllCountries() {
    return this.api.get<CountriesResponseType>('/all').then((res) => res.data);
  }

  getSpecificCountry(countryName: string | string[] | undefined) {
    return this.api.get<CountriesResponseType>(`/name/${countryName}`).then((res) => res.data);
  }

  getBorderCountries(codesArray: string) {
    return this.api
      .get<CountriesResponseType>(`/alpha?codes=${codesArray}`)
      .then((res) => res.data);
  }
}

const RestCountriesApi = new RestCountriesClient();

export default RestCountriesApi;
