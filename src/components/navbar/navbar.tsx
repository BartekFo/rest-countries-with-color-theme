import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as solidFaMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!isMounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button className="theme-toggle-btn" type="button" onClick={() => setTheme('light')}>
          <FontAwesomeIcon icon={solidFaMoon} className="transform -rotate-12 h-4" />
          Light Mode
        </button>
      );
    }

    return (
      <button className="theme-toggle-btn" type="button" onClick={() => setTheme('dark')}>
        <FontAwesomeIcon icon={faMoon} className="transform -rotate-12 h-4" />
        Dark Mode
      </button>
    );
  };

  return (
    <nav
      className="
      bg-lightElementColor shadow-md flex justify-center
      dark:bg-darkElementColor
      "
    >
      <div className="max-w-screen-2xl w-full flex justify-between items-center py-7 mx-4 md:mx-20 md:py-5">
        <Link href="/" passHref>
          <h1 className="text-base font-bold md:text-2xl cursor-pointer">Where in the world?</h1>
        </Link>
        {renderThemeChanger()}
      </div>
    </nav>
  );
};

export default Navbar;
