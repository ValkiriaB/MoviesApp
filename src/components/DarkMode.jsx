import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
const lightTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',

  },
});

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> 
      <Button  onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </Button>
    </ThemeProvider>
  );
};

export default DarkMode;