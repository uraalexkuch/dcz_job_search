import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import JobBoard from './JobBoard';
import SortJobs from './SortJobs';
import Pagination from './Pagination';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
   },

   loading: {
      display: 'inline-block',
      margin: 'auto',
      justifyContent: 'center',
   },
}));

function JobPosts() {
   const { isLoading, errorMessage } = useContext(JobsContext);
   const classes = useStyles();
   return (
      <Box className={classes.container}>
         <SortJobs />

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
         ) : (
            <Box className={classes.jobBoard}>
               <JobBoard />
               <Pagination />
            </Box>
         )}
      </Box>
   );
}

export default JobPosts;
