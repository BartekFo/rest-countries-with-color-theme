import { ChangeEvent, FC, useState } from 'react';
import { toLower } from 'lodash';

import CountriesList from '@components/homePage/cardList/countriesList';
import CardType from '@root/@types/CardType';
import SearchInput from '@components/homePage/searchInput/searchInput';
import SelectInput from '@components/homePage/selectInput/selectInput';

const HomePageMainSection: FC<{ data: CardType[] }> = ({ data }) => {
  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState(data);

  const selectRegion = (region: string) => {
    if (region === 'All') {
      setCountries(data);
    } else {
      const filteredCountriesByRegion = data.filter((country) => {
        const regionName = toLower(country.region);
        if (regionName.includes(toLower(region))) {
          return country;
        }
        return null;
      });
      setCountries(filteredCountriesByRegion);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) setSearchValue(e.target.value);

    if (e.target.value !== '') {
      const filteredCountries = data.filter((country) => country.name.includes(e.target.value));
      setCountries(filteredCountries);
    } else {
      setCountries(data);
    }
  };

  return (
    <section className="mt-12 flex justify-center md:mx-20">
      <div className="max-w-screen-2xl w-full px-3 md:px-0">
        <div className="flex justify-between items-center flex-wrap">
          <SearchInput value={searchValue} onChange={handleChange} />
          <SelectInput onChange={selectRegion} />
        </div>
        <CountriesList data={countries} />
      </div>
    </section>
  );
};

export default HomePageMainSection;
