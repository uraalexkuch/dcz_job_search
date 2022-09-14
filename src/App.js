import React from "react";
import Jobs from './pages/Jobs';

import {theme} from './CustomTheme';

import {ThemeProvider,} from '@mui/material/styles';
import ScrollToTop from "./components/jobFolder/ScrollToTop";
import {Router} from "react-router-dom";


function App() {
    return (
       <ThemeProvider theme={theme}>

                      <Jobs/>

        </ThemeProvider>
    );
}

export default App;
