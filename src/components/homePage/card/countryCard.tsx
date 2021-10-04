import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import NumberFormat from 'react-number-format';

import { getBoxShadow, getColor, getFontWeight } from '@styles/utils';
import CardType from '@root/@types/CardType';

const Wrapper = styled.div`
  background: ${getColor('elementsColor')};
  box-shadow: ${getBoxShadow('navbar')};
  border-radius: 5px;
  width: 70%;
  max-width: 40ch;

  h3,
  p {
    padding-inline: 1.5rem;
  }

  h3 {
    margin-block: 2rem 1rem;
  }
`;

const SmallTextWrapper = styled.div`
  margin-bottom: 3rem;

  p {
    margin-bottom: 0.2rem;
    color: ${getColor('inputText')};

    span {
      font-weight: ${getFontWeight('semiBold')};
      color: ${getColor('text')};
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: auto;
  padding-top: 56.25%;
  width: 100%;

  img {
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }
`;

const CountryCard: FunctionComponent<{
  data: CardType;
}> = ({ data }) => {
  const { capital, population, region, name, flagImage } = data;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={flagImage} layout="fill" />
      </ImageWrapper>
      <h3>{name}</h3>
      <SmallTextWrapper>
        <p>
          <span>Population: </span>
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
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </SmallTextWrapper>
    </Wrapper>
  );
};

export default CountryCard;
