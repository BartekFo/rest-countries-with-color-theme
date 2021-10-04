import styled from 'styled-components';
import { getBoxShadow, getColor, getFontWeight, getMedias } from '@styles/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as solidFaMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import useDarkMode from 'use-dark-mode';

const Wrapper = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  background: ${getColor('elementsColor')};
  box-shadow: ${getBoxShadow('navbar')};

  h1 {
    font-size: 1rem;
    font-weight: ${getFontWeight('semiBold')};
  }

  @media (min-width: ${getMedias('tablet')}) {
    padding-inline: 5rem;

    h1 {
      font-size: 2rem;
    }
  }
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  height: 100%;
  color: ${getColor('text')};
  gap: 10px;
  font-weight: ${getFontWeight('regular')};
  font-size: 0.8rem;
  letter-spacing: 0.05rem;

  svg {
    height: 15%;
    transform: rotate(-20deg);
  }

  @media (min-width: ${getMedias('tablet')}) {
    font-size: 1rem;

    svg {
      height: 20%;
    }
  }
`;

const Navbar = () => {
  const darkMode = useDarkMode(false);

  return (
    <Wrapper>
      <h1>Where in the world?</h1>
      <Button type="button" onClick={darkMode.toggle}>
        {darkMode.value ? (
          <FontAwesomeIcon icon={solidFaMoon} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
        Dark Mode
      </Button>
    </Wrapper>
  );
};

export default Navbar;
