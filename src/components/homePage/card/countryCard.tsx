import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NumberFormat from 'react-number-format';

import CardType from '@root/@types/CardType';

const CountryCard: FunctionComponent<{
  data: CardType;
}> = ({ data }) => {
  const { capital, population, region, name, flagImage } = data;

  return (
    <Link href={`/${name}`} passHref>
      <div
        className="
      bg-lightElementColor shadow-md rounded-md w-9/12 max-w-xs
      dark:bg-darkElementColor
      "
      >
        <div className="relative h-auto pt-aspectRatio w-full">
          <Image className="object-cover rounded-t-md" src={flagImage} layout="fill" />
        </div>
        <h3 className="p-6 text-xl font-bold">{name}</h3>
        <div className="pb-12">
          <p className="card-paragraph">
            <span className="card-span">Population: </span>
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
          <p className="card-paragraph">
            <span className="card-span">Region: </span>
            {region}
          </p>
          <p className="card-paragraph">
            <span className="card-span">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
