import React, { useContext, useState } from 'react';
import { Box, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import {ArrowCircleDown, ArrowCircleUp} from '@mui/icons-material';
import JobsModal from './JobsModal';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import jobsVac from "../../data/vacancion.json";
import {Col, Row} from "react-bootstrap";
import Pagination from "./Pagination";
import {theme} from "../../CustomTheme";

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
         marginTop: '.2rem',
         marginBottom: '.2rem',
         marginLeft:".2rem",
         marginRight:".2rem",
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
         //marginLeft:'0.5rem',
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
      fontWeight:"bold",
      [theme.breakpoints.down('md')]: {
         fontSize: ".8rem"}

   },
   nameValue: {
      color: theme.palette.gray.fW600,
      fontSize: '1rem',
      fontWeight:"bold",
          [theme.breakpoints.down('md')]: {
   fontSize: ".8rem"
}
   },
   valueSalary: {
      color:  "#005BAA",
      marginRight: '.5rem',
      paddingRight: '.4rem',
      fontSize: '1.8rem',
      fontWeight:"bold",
      [theme.breakpoints.down('md')]: {
         fontSize: "1.3rem"
      }
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
      setJobs(jobs.reverse());

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
                 width: '100%',
                // marginLeft:'1rem',
                 marginRight:"2rem",
                 display: 'flex',
                 gap: '1rem',
                 [theme.breakpoints.down('md')]: {
                   // marginLeft:'.3rem',
                    marginRight:".3rem",
                    width: '100%',
              }

              }} sx={{ mt: 10 }}
                   className={classes.hoverEffect}
                 //sx={{ mb: 3 }}
                   onClick={() => {
                      handleJobsModal(job);
                   }}
              ><Col style={{ width:"80%",[theme.breakpoints.down('md')]: {
                    fontSize: "1rem",width:"100%"
                 }}}>
                 <Typography style={{fontWeight:"bold",color:  "#005BAA",}}
                             className={classes.position}
                             sx={{ fontWeight: "bold", fontSize: "1.5rem",[theme.breakpoints.down('md')]: {
                                   fontSize: "1rem"
                                } }}
                 >
                    {job.VACNAME.toLowerCase()}
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
                    Регіон:{' '}
                    <span className={classes.value}>
                        {job.candidate_required_location === ''
                            ? 'Дистанційно'
                            : job.REGIONNAME.length < 10
                                ? job.REGIONNAME
                                : job.REGIONNAME.slice(0, 30)}
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
                       Заробітна плата(грн.):
                       <div className={classes.valueSalary}>
                          {job.SALARY==0?("договірна"):job.SALARY }&nbsp;{job.CURRENCY}

                       </div>

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
                        [theme.breakpoints.down('md')]: {
                           fontSize: '.8rem',
                        }
                 }}
             >
                {' '}
                Результат:&nbsp;
                <ArrowCircleUp
                    onClick={handleResultIcon}
                    className={classes.resultIcon}
                    sx={{
                       width:"2rem",
                       height:'2rem',
                       transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)',
                       transition: '.2s',
                       [theme.breakpoints.down('md')]: {
                          width:"1rem",
                          height:'1rem',
                       }
                    }}
                />
             </Typography>
             <Typography variant="subtitle1" sx={{
                fontSize: '1.2rem',
                display: 'flex',
                fontWeight: 500,
                padding:'.3rem',
                color:"#FFFFFF",
                [theme.breakpoints.down('md')]: {
                   fontSize: '.8rem',
                }
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
