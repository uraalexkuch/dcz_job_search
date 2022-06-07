import React, { useContext, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import { ArrowCircleDown } from '@mui/icons-material';
import JobsModal from './JobsModal';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import jobsVac from "../../data/vacancion.json";
import {Col, Row} from "react-bootstrap";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
   position: {
      color: theme.palette.third.fourth,
   },

   resultContainer: {
      display: 'flex',
       marginLeft:"2rem",
       marginRight:"2rem",
       lineHeight: 0,
       color:"#FFFFFF",
      justifyContent: 'space-between',
     // padding: '.5rem 1.5rem .5rem 1.5rem',
      marginTop: '2rem',
      marginBottom: '2rem',
      borderBottom: '1px solid #cecece',
      borderRadius:"5px 5px",
      background: '#045ba7',
      //color: theme.palette.gray.fW500,
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
      border: "1px solid #625d5d",
   margin: "0px 0px 15px 0px",
   padding: "20px 10px",
      '&:hover': {
         transform: 'translateY(2px)',
         boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',

         backgroundColor: theme.palette.third.secondary,
      },
      [theme.breakpoints.down('md')]: {
         display: "flex",
         flexWrap: "wrap",
         marginLeft:'0.5rem',
         marginRight:"0.5rem",
      },
   },

   description: {

      color: theme.palette.gray.fW600,
      fontWeight:"bold"
   },

   nameValueSalary: {
      color: theme.palette.gray.fW600,
      fontSize: '1.8 rem',
      fontWeight:"bold"
   },
   nameValue: {
      color: theme.palette.gray.fW600,
      fontSize: '1rem',
      fontWeight:"bold"
   },
   valueSalary: {
      color:  "#005BAA",
      marginRight: '.5rem',
      paddingRight: '.4rem',
      fontSize: '2.2rem',
      fontWeight:"bold"
   },
   value: {
      color: theme.palette.third.fifth,
      marginRight: '.5rem',
      paddingRight: '.4rem',
      fontWeight:"bold"
   },

   resultIcon: {
      fontSize: '5rem',
      cursor: 'pointer',
       color:"#FFFFFF",
      marginTop:'0.5rem',

   },
}));

function JobBoard() {

   const [isReversed, setIsReversed] = useState(false);
   const classes = useStyles();
   const {
      jobs,
       data,
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
      setJobs(jobsVac.reverse());
   };

   const handleJobsModal = (job) => {
      setJobsModal([job]);
      handleOpen();
   };
   const jobsotrasl=jobs.map(((t)=>t.BRANCHNAME));
   const uniqotrasl=new Set(jobsotrasl)
   const otrasl=[...uniqotrasl]

   const displayJobs = jobs
      .slice(pagesVisited, pagesVisited + jobsPerPage)
      .map((job) => (

         <React.Fragment key={job.id}>

            <Row style={{
               width: 'auto',

               marginLeft:'1rem',
               marginRight:"1rem",
               display: 'flex',
               gap: '1rem',

            }} sx={{ mt: 10 }}
               className={classes.hoverEffect}
               //sx={{ mb: 3 }}
               onClick={() => {
                  handleJobsModal(job);
               }}
            ><Col style={{ width:"80%"}}>
            <Typography style={{fontWeight:"bold",color:  "#005BAA",}}
                  className={classes.position}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
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
                  Дата та час розміщення:{' '}
                  <span className={classes.value}>
                        {job.REG_DATE}
                     </span>
               </div>
            </Col>
               <Col style={{width:"20%",fontWeight:"bold"}} sx={{ fontWeight: 600, mt: 2 }}>
                  <Typography className={classes.nameValueSalary}>
                     Заробітна плата(грн.):{' '}
                     <span className={classes.valueSalary}>
                        {job.SALARY === ''
                           ? 'За домовленістю'
                           : job.SALARY}
                     </span>

                  </Typography>

               </Col>
            </Row>
         </React.Fragment>
      ));
   //console.log(jobs)
   return (
      <Box sx={{ mt: 1, ml: 2, mr: 2 }}>

         <Box container className={classes.resultContainer}>
            <Typography
               variant="subtitle1"
               component="subtitle1"
               sx={{
                  fontSize: '1.3rem',
                  display: 'flex',
                  fontWeight: 500,
                  padding:'.3rem',
                   color:"#FFFFFF",
                  border: "1px solid #625d5d",
               }}
            >
               {' '}
               Результат:&nbsp;
               <ArrowCircleDown
                  onClick={handleResultIcon}
                  className={classes.resultIcon}
                  sx={{width:"2rem",
                     height:'2rem',
                     transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)',
                     transition: '.2s',
                  }}
               />
            </Typography>
            <Typography variant="subtitle1" sx={{
               fontSize: '1.2rem',
               display: 'flex',
               fontWeight: 500,
               padding:'.3rem',
               color:"#FFFFFF",

            }}>{`${
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
