import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SearchBar from "./SearchBar";

import VacForm from "./sendVac/pages/VacForm";





const useStyles = makeStyles((theme) => ({
   container: {
      display: 'flex',
      margin: 'auto',
      width: 'max(85%)',
      marginTop: '2rem',
      boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.1)',
      [theme.breakpoints.down('lg')]: {
         width: 'max(90%)',
      },
      [theme.breakpoints.down('md')]: {
         flexDirection: 'column',
      },
   },

   jobBoard: {
      flexGrow: 1,
      minWidth:"100%"
   },

   loading: {
      display: 'inline-block',
      margin: 'auto',
      justifyContent: 'center',
   },
}));

function JobPosts() {
   const { isLoading, errorMessage,isLoad} = useContext(JobsContext);
   const classes = useStyles();
   const [, setValue] = React.useState('1');


   return (
      <div  style={{margin:"1rem"}}>
         {errorMessage.length > 0 ? (
            /////// HANDLING ERRORS AND DATA LOADING STATUS ////////////////
            <Typography
               variant="h3"
               sx={{ fontSize: 50, fontWeight: 500, margin: 'auto' }}
            >
               <ErrorOutlineIcon sx={{ fontSize: 42 }} /> {errorMessage}
            </Typography>
         ) : isLoading ? (
            <div className={classes.loading}>
               <Typography variant="h3" sx={{ fontSize: 50 }}>
                  Завантажуємось...
               </Typography>
            </div>
         ) :!isLoad? (
             <Box className={classes.jobBoard}  >
                <SearchBar/>

             </Box>):
            ( <Box className={classes.jobBoard}>
                <VacForm/>
             </Box>)

         }
      </div>
   );
}

export default JobPosts;
