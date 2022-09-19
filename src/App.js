import React from "react";
import Jobs from './pages/Jobs';
import {theme} from './CustomTheme';
import {ThemeProvider,} from '@mui/material/styles';
import ReactGA from "react-ga4";

const TRACKING_ID = "G-ZSW5FDZ6JD"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

function App() {
    return (
       <ThemeProvider theme={theme}>
                      <Jobs/>
        </ThemeProvider>
    );
}

export default App;
