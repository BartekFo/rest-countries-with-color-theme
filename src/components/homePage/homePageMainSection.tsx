import styled from 'styled-components';
import CountriesList from '@components/homePage/cardList/countriesList';
import { ChangeEvent, FC, useState } from 'react';
import CardType from '@root/@types/CardType';
import SearchInput from '@components/homePage/searchInput/searchInput';

const Wrapper = styled.section`
  margin-top: 50px;
`;

const HomePageMainSection: FC<{ data: CardType[] }> = ({ data }) => {
  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState(data);

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
    <Wrapper>
      <SearchInput value={searchValue} onChange={handleChange} />
      <CountriesList data={countries} />
    </Wrapper>
  );
};

export default HomePageMainSection;
