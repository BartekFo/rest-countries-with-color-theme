import CardType from '@root/@types/CardType';
import CountryCard from '@components/homePage/card/countryCard';
import styled from 'styled-components';
import { getMedias } from '@styles/utils';

const List = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  @media (min-width: ${getMedias('tablet')}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-inline: 5rem;
    gap: 60px;
  }
`;

const CountriesList: ({ data }: { data: CardType[] }) => JSX.Element = ({ data }) => (
  <List>
    {data.map((item) => (
      <CountryCard key={item.name} data={item} />
    ))}
  </List>
);

export default CountriesList;
