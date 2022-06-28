import React from "react";
import Jobs from './pages/Jobs';

import {theme} from './CustomTheme';

import {ThemeProvider,} from '@mui/material/styles';
import {Typography} from "@mui/material";
import SearchBar from "./components/jobFolder/SearchBar";




function App() {
    return (
       <ThemeProvider theme={theme}>

                      <Jobs/>
        </ThemeProvider>
    );
}

export default App;
