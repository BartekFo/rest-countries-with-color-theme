import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import NumberFormat from 'react-number-format';

import Button from '@components/utils/button/Button';
import CountryPageType from '@root/@types/CountryPageType';
import StandardParagraph from '@components/countryPage/standardParagraph/StandardParagraph';

const CountryPageMain: FC<{ country: CountryPageType; borderCountriesNames: string[] }> = ({
  country,
  borderCountriesNames,
}) => {
  const {
    name,
    flagImage,
    nativeName,
    population,
    region,
    currenciesArr,
    languagesArr,
    subregion,
    topLevelDomain,
    capital,
  } = country;

  const renderBorderCountries = () => {
    if (borderCountriesNames.length === 0) {
      return <p>None</p>;
    }
    return borderCountriesNames.map((border) => (
      <Button key={border} href={`/${border}`}>
        {border}
      </Button>
    ));
  };

  return (
    <main className="px-6 mt-10 flex justify-center md:mx-20 md:px-0">
      <div className="max-w-screen-2xl w-full">
        <Button href="/">
          <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-14">
          <div
            className="
            relative h-auto pt-aspectRatio w-full mt-14
            lg:w-1/2 lg:h-96 lg:pt-0 lg:mt-0 lg:mr-40"
          >
            <Image className="object-cover" src={flagImage} layout="fill" />
          </div>
          <div className="w-full lg:w-1/2 ">
            <h3
              className="
                text-xl font-bold mt-10
                lg:text-3xl
              "
            >
              {name}
            </h3>
            <div className="lg:flex lg:justify-between items-baseline">
              <div>
                <StandardParagraph name="Native Name" data={nativeName} topMargin="6" />
                <p className="mb-1 text-lightInputText dark:text-darkInputText mt-3">
                  <span className="font-semibold text-lightText dark:text-darkText">
                    Population:{' '}
                  </span>
                  <NumberFormat
                    thousandsGroupStyle="thousand"
                    value={population}
                    decimalSeparator="."
                    displayType="text"
                    type="text"
                    thousandSeparator
                    allowNegative
                  />
                </p>
                <StandardParagraph name="Region" data={region} topMargin="3" />
                <StandardParagraph name="Sub Region" data={subregion} topMargin="3" />
                <StandardParagraph name="Capital" data={capital} topMargin="3" />
              </div>
              <div>
                <StandardParagraph name="Top Level Domain" data={topLevelDomain} topMargin="12" />
                <StandardParagraph name="Currencies" data={currenciesArr} topMargin="3" isArray />
                <StandardParagraph name="Languages" data={languagesArr} topMargin="3" isArray />
              </div>
            </div>
            <div className="lg:flex lg:items-center lg:flex-wrap">
              <h5 className="mt-12 font-semibold text-lg lg:mt-6 lg:mr-4">Border Countries:</h5>
              <div className="flex mt-3 mb-12 flex-wrap gap-2.5 lg:mb-0 lg:mt-6">
                {renderBorderCountries()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryPageMain;
