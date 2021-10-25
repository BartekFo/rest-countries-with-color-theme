import { ChangeEvent, FC, useState } from 'react';

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
        className="flex w-72 flex-col relative"
        onClick={toggleSelect}
        onKeyDown={toggleSelect}
      >
        <div className={isSelectOpen ? 'option-container active' : 'option-container'}>
          <div className="option">
            <input className="radio" type="radio" name="region" id="all" onChange={selectOption} />
            <label className="cursor-pointer block w-full h-full py-3 px-6" htmlFor="all">
              All
            </label>
          </div>
          <div className="option">
            <input
              className="radio"
              type="radio"
              name="region"
              id="africa"
              onChange={selectOption}
            />
            <label className="cursor-pointer block w-full h-full py-3 px-6" htmlFor="africa">
              Africa
            </label>
          </div>
          <div className="option">
            <input
              className="radio"
              type="radio"
              name="region"
              id="america"
              onChange={selectOption}
            />
            <label className="cursor-pointer block w-full h-full py-3 px-6" htmlFor="america">
              America
            </label>
          </div>
          <div className="option">
            <input className="radio" type="radio" name="region" id="asia" onChange={selectOption} />
            <label className="cursor-pointer block w-full h-full py-3 px-6" htmlFor="asia">
              Asia
            </label>
          </div>
          <div className="option">
            <input
              className="radio"
              type="radio"
              name="region"
              id="europe"
              onChange={selectOption}
            />
            <label className="cursor-pointer block w-full h-full py-3 px-6" htmlFor="europe">
              Europe
            </label>
          </div>
          <div className="option">
            <input
              className="radio"
              type="radio"
              name="region"
              id="oceania"
              onChange={selectOption}
            />
            <label className="cursor-pointer block w-full h-full py-3 px-6" htmlFor="oceania">
              Oceania
            </label>
          </div>
        </div>
        <div className="selected">Filter by Region</div>
      </button>
    </div>
  );
};

export default SelectInput;
