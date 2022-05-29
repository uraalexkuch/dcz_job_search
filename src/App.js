import React from "react";
import Jobs from './pages/Jobs';

import { theme } from './CustomTheme';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';


function App() {
  return (
      <ThemeProvider theme={theme}>

        <Jobs />

      </ThemeProvider>
  );
}

export default App;