import React from "react";
import Jobs from './pages/Jobs';
import {Route,  Routes, } from 'react-router-dom';
import {theme} from './CustomTheme';

import {ThemeProvider,} from '@mui/material/styles';

import {Home} from "@mui/icons-material";


function App() {
    return (
        <ThemeProvider theme={theme}>

                <Jobs/>


        </ThemeProvider>
    );
}

export default App;
