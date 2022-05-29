import React from 'react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
   palette: {
      primaryBG: {
         main: '#FFFAFA',
      },
      secondary: {
         main: '#31393C',
      },
      third: {
         main: '#045ba7',
         secondary: '#dce2e3',
         third: '#2D5DA1',
         fourth: '#3457D5',
         fifth: ' #4B9CD3',
         sixth: '#00CCFF',
      },
      btnColor: {
         main: '#00CCFF',
         contrastText: 'white',
      },
      gray: {
         bg: '#eeeeee',
         fW400: '#63645E',
         fW500: '#323232',
         fW600: '#625D5D',
         fW700: ' #565051',
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 480,
         md: 768,
         lg: 1024,
         xl: 1200,
         xxl: 1366,
      },
   },
   typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      h1: {
         fontSize: 66,
         '@media (max-width:480px)': {
            fontSize: 54,
         },
         '@media (max-width:360px)': {
            fontSize: 44,
         },
      },
      h2: {
         fontSize: 52,
         '@media (max-width:480px)': {
            fontSize: 40,
         },
         '@media (max-width:360px)': {
            fontSize: 34,
         },
      },
      h3: {
         '@media (max-width:480px)': {
            fontSize: 32,
         },
         '@media (max-width:360px)': {
            fontSize: 28,
         },
      },

      h4: {
         fontSize: 16,
      },
      body1: { fontSize: 14 },

      button: {
         textTransform: 'none',
         fontWeight: 500,
      },
   },
});
