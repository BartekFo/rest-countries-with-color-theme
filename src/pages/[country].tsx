import React from 'react';
import Navbar from '@components/navbar/navbar';
import { GetStaticProps } from 'next';
import { filterSpecificCountry } from '@api/dataFilters/restCountriesFilters';

const Country = ({ country }) => {
  console.log(country);
  return (
    <>
      <Navbar />
      <h1>{}</h1>
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
  const country = await filterSpecificCountry(context.params!.country);
  return {
    props: {
      country,
    }, // will be passed to the page component as props
  };
};

export default Country;
