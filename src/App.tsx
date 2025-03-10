import React, { useState, useMemo, useEffect, createContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import DataTable from './components/DataTable';
import Header from './components/Header';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'; 
  });

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newMode); 
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <DataTable />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
