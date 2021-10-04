import Navbar from '@components/navbar/navbar';
import filterAllCountries from '@api/dataFilters/restCountriesFilters';
import { NextPage } from 'next';
import CardType from '@root/@types/CardType';
import HomePageMainSection from '@components/homePage/homePageMainSection';

const homePage: NextPage<{ allCountries: CardType[] }> = ({ allCountries }) => (
  <>
    <Navbar />
    <HomePageMainSection data={allCountries} />
  </>
);

export async function getStaticProps() {
  const allCountries = await filterAllCountries();

  return {
    props: {
      allCountries,
    },
  };
}

export default homePage;
