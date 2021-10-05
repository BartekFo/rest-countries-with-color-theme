import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { getBoxShadow, getColor, getFontWeight } from '@styles/utils';
import { ChangeEvent, FC } from 'react';

const Wrapper = styled.div`
  max-width: 60ch;
  width: 90%;
  background: ${getColor('elementsColor')};
  box-shadow: ${getBoxShadow('navbar')};
  padding: 20px 30px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  svg {
    width: 1rem;
    margin-right: 1.5rem;
  }
`;

const Input = styled.input`
  background: inherit;
  border: none;
  outline: none;
  height: 100%;
  color: ${getColor('inputText')};
  font-weight: ${getFontWeight('regular')};

  &::placeholder {
    color: ${getColor('inputText')};
  }
`;

const SearchInput: FC<{ value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = ({
  value,
  onChange,
}) => (
  <Wrapper>
    <FontAwesomeIcon icon={faSearch} />
    <Input type="text" placeholder="Search for a country..." value={value} onChange={onChange} />
  </Wrapper>
);

export default SearchInput;
