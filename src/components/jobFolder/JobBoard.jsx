import React, { useContext, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import { ArrowCircleDown } from '@mui/icons-material';
import JobsModal from './JobsModal';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import dataVac from "../../data/vacancion.json";
const useStyles = makeStyles((theme) => ({
   position: {
      color: theme.palette.third.fourth,
   },

   resultContainer: {
      display: 'flex',

      justifyContent: 'space-between',
      padding: '.5rem 1.5rem .5rem 1.5rem',
      marginTop: '2rem',
      marginBottom: '2rem',
      borderBottom: '1px solid #cecece',
      borderRadius:"25px 25px",
      background: 'linear-gradient(5deg, #FFD947 55%, #045ba7 75%)',
      color: theme.palette.gray.fW500,
      boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
      transition: '0.3s',
      [theme.breakpoints.down('sm')]: {
         paddingLeft: 0,
         paddingRight: 0,
      },
   },

   hoverEffect: {
      cursor: 'pointer',
     // padding: '.5rem',
      border: "1px solid #dfdfdf",
   margin: "0px 0px 15px 0px",
   padding: "20px 10px",
      '&:hover': {
         transform: 'translateY(2px)',
         boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',

         backgroundColor: theme.palette.third.secondary,
      },
   },

   description: {
      color: theme.palette.gray.fW600,
   },


   nameValue: {
      color: theme.palette.gray.fW600,
      fontSize: '1rem',
   },

   value: {
      color: theme.palette.third.fifth,
      marginRight: '.5rem',
      paddingRight: '.4rem',
   },

   resultIcon: {
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: theme.palette.gray.fW400,
   },
}));

function JobBoard() {

   const [isReversed, setIsReversed] = useState(false);
   const classes = useStyles();
   const {
      jobs,
      setJobs,
      pagesVisited,
      jobsPerPage,
      setJobsModal,
      handleKeyDown,
      handleOpen,

   } = useContext(JobsContext);
   const dot = '. . ';

   const handleResultIcon = () => {

      setIsReversed(!isReversed);
      setJobs(jobs.reverse());
   };

   const handleJobsModal = (job) => {
      setJobsModal([job]);
      handleOpen();
   };
   const dataotrasl=jobs.map(((t)=>t.BRANCHNAME));
   const uniqotrasl=new Set(dataotrasl)
   const otrasl=[...uniqotrasl]

   const displayJobs = jobs
      .slice(pagesVisited, pagesVisited + jobsPerPage)
      .map((job) => (

         <React.Fragment key={job.id}>
            <Box
               className={classes.hoverEffect}
               sx={{ mb: 3 }}
               onClick={() => {
                  handleJobsModal(job);
               }}
            >
               <Typography
                  className={classes.position}
                  sx={{ fontWeight: 600, fontSize: 18 }}
               >
                  {job.VACNAME}
               </Typography>
               <Typography
                  variant="body1"
                  className={classes.description}
                  sx={{ mt: 2, mb: 3, fontSize: 15 }}
               >
                  {`${job.DESCRIPTION
                     .replace(/(<([^>]+)>)/gi, '')
                     .slice(0, 220)}${dot.repeat(2)}`}
               </Typography>


               <Typography sx={{ fontWeight: 600, mt: 2 }}>
                  <div className={classes.nameValue}>
                     Заробітна плата:{' '}
                     <span className={classes.value}>
                        {job.SALARY === ''
                           ? 'За домовленістю'
                           : job.SALARY}
                     </span>

                  </div>
                  <div className={classes.nameValue}>
                     Область:{' '}
                     <span className={classes.value}>
                        {job.candidate_required_location === ''
                           ? 'Дистанційно'
                           : job.REGIONNAME.length < 10
                           ? job.REGIONNAME
                           : job.REGIONNAME.slice(0, 20)}
                     </span>
                  </div>
                  <div className={classes.nameValue}>
                      Дата розміщення:{' '}
                     <span className={classes.value}>
                        {job.REG_DATE}
                     </span>
                  </div>
               </Typography>
            </Box>
         </React.Fragment>
      ));
   console.log(jobs)
   return (
      <Box sx={{ mt: 1, ml: 2, mr: 2 }}>
         <Box container className={classes.resultContainer}>
            <Typography
               variant="subtitle1"
               component="subtitle1"
               sx={{
                  fontSize: 18,
                  display: 'flex',
                  fontWeight: 500,
                  padding:'.5rem'
               }}
            >
               {' '}
               Результат:&nbsp;
               <ArrowCircleDown
                  onClick={handleResultIcon}
                  className={classes.resultIcon}
                  sx={{
                     transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)',
                     transition: '.2s',
                  }}
               />
            </Typography>
            <Typography variant="subtitle2">{`${
               jobs.length <= 1
                  ? `${jobs.length}` + ' одиниця'
                  : `${jobs.length}` + ' одиниць'
            }`}</Typography>
         </Box>

         {jobs.length >= 1 ? (
            displayJobs
         ) : (
            <Typography
               variant="h3"
               component="h5"
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  mt: 6,
                  fontSize: 28,
               }}
            >
               <ErrorOutlineIcon sx={{ fontSize: 32, mr: 1, mb: 2 }} /> Вибачте,
               дані відсутні
            </Typography>
         )}
         <span>
            <JobsModal />
         </span>
      </Box>
   );
}

export default JobBoard;
