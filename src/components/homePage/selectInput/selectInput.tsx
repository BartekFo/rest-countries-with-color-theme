import { ChangeEvent, FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const selectOptionsArr = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const SelectInput: FC<{ onChange: (region: string) => void }> = ({ onChange }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const toggleSelect = () => {
    setIsSelectOpen((prevState) => !prevState);
  };

  const selectOption = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.id);
    toggleSelect();
  };

  return (
    <div>
      <button
        type="button"
        className="flex w-72 flex-col relative mt-12 lg:mt-0"
        onClick={toggleSelect}
        onKeyDown={toggleSelect}
      >
        <div className={isSelectOpen ? 'option-container active' : 'option-container'}>
          {selectOptionsArr.map((option) => (
            <div className="option" key={option}>
              <input
                className="radio"
                type="radio"
                name="region"
                id={option}
                onChange={selectOption}
              />
              <label className="cursor-pointer block w-full h-full py-3 px-6" htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className="selected">
          Filter by Region
          <div className="absolute h-full right-0 top-0 w-12 p-4 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transform transition-transform duration-300 ${
                isSelectOpen && 'rotate-180'
              }`}
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default SelectInput;
