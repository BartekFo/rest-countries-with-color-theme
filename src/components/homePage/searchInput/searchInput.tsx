import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, FC } from 'react';

const SearchInput: FC<{ value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = ({
  value,
  onChange,
}) => (
  <div
    className="
    max-w-prose w-full md:w-11/12 bg-lightElementColor shadow-md py-5 px-7 flex items-center rounded-md
    dark:bg-darkElementColor
    "
  >
    <FontAwesomeIcon icon={faSearch} className="w-5 mr-6" />
    <input
      className="
      h-full text-lightInputText placeholder-lightInputText::placeholder bg-lightElementColor w-full focus:outline-none
      dark:text-darkInputText dark:placeholder-darkInputText::placeholder dark:bg-darkElementColor
      "
      type="text"
      placeholder="Search for a country..."
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchInput;
