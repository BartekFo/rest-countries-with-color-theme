import React, { FC } from 'react';

const StandardParagraph: FC<{
  name: string;
  data: string | [string] | { name: string }[];
  topMargin: string;
  // eslint-disable-next-line react/require-default-props
  isArray?: boolean;
}> = ({ data, name, topMargin, isArray }) => {
  if (isArray && typeof data === 'object') {
    return (
      <p className="mb-1 text-lightInputText dark:text-darkInputText mt-3">
        <span className="font-semibold text-lightText dark:text-darkText">{name}: </span>
        {data.map((item) => {
          if (typeof item === 'object') {
            if (data.length === 1) {
              return item.name;
            }
            return `${item.name}, `;
          }
          return null;
        })}
      </p>
    );
  }

  return (
    <p className={`mb-1 text-lightInputText dark:text-darkInputText mt-${topMargin}`}>
      <span className="font-semibold text-lightText dark:text-darkText">{name}: </span>
      {data}
    </p>
  );
};

export default StandardParagraph;
