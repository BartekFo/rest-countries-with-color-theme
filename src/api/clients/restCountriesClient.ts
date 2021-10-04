import axios from 'axios';
import CountriesResponseType from '@root/@types/CountriesResponseType';

class RestCountriesClient {
  api = axios.create({
    baseURL: 'https://restcountries.com/v2',
  });

  getAllCountries() {
    return this.api.get<CountriesResponseType>('/all').then((res) => res.data);
  }
}

const RestCountriesApi = new RestCountriesClient();

export default RestCountriesApi;
