import React from 'react';
import { GetStaticProps, NextPage } from 'next';

import Navbar from '@components/navbar/navbar';
import {
  filterBordersCountries,
  filterSpecificCountry,
} from '@api/dataFilters/restCountriesFilters';
import CountryPageType from '@root/@types/CountryPageType';
import CountryPageMain from '@components/countryPage/CountryPageMain';

const Country: NextPage<{ country: CountryPageType; borderCountriesNames: string[] }> = ({
  country,
  borderCountriesNames,
}) => {
  return (
    <>
      <Navbar />
      <CountryPageMain country={country} borderCountriesNames={borderCountriesNames} />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [
      {
        params: {
          country: 'Poland',
        },
      },
      {
        params: {
          country: 'Algeria',
        },
      },
    ],
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const countryName = context.params!.country;

  const countryArr = await filterSpecificCountry(countryName);
  const country = countryArr![0];
  const borderCountriesNames = await filterBordersCountries(country.bordersArr);

  return {
    props: {
      country,
      borderCountriesNames,
    },
  };
};

export default Country;
