import React, { FC } from 'react';
import Link from 'next/link';

// eslint-disable-next-line react/require-default-props
const Button: FC<{ href?: string }> = ({ children, href }) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <button
          type="button"
          className="
            flex shadow-lg bg-lightElementColor justify-between items-center px-6 py-1 rounded-sm w-max
            dark:bg-darkElementColor
      "
        >
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button
      type="button"
      className="
            flex shadow-lg bg-lightElementColor justify-between items-center px-6 py-1 rounded-sm
            dark:bg-darkElementColor
      "
    >
      {children}
    </button>
  );
};

export default Button;
