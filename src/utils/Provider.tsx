import useDarkMode from 'use-dark-mode';
import { useState, useEffect, FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import darkTheme from '@styles/darkTheme';
import lightTheme from '@styles/lightTheme';

const Provider: FunctionComponent = ({ children }) => {
  const { value } = useDarkMode(false);
  const [mounted, setMounted] = useState(false);
  const theme = value ? darkTheme : lightTheme;

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default Provider;
