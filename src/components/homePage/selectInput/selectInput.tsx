import styled from 'styled-components';
import { getBoxShadow, getColor } from '@styles/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  background: ${getColor('elementsColor')};
  color: ${getColor('inputText')};
  border: none;
  padding: 20px 4rem 20px 30px;
  box-shadow: ${getBoxShadow('navbar')};
  border-radius: 5px;
  outline: none;

  & > option {
    border: 1px solid red;
  }
`;

const CustomArrow = styled.span`
  top: 0;
  right: 0;
  position: absolute;
  background: ${getColor('elementsColor')};
  height: 100%;
  width: 4rem;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 25%;
  }
`;

const SelectInput = () => (
  <Wrapper>
    <Select>
      <option value="" disabled selected hidden>
        Filter by Region
      </option>
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Select>
    <CustomArrow>
      <FontAwesomeIcon icon={faChevronDown} />
    </CustomArrow>
  </Wrapper>
);

export default SelectInput;
