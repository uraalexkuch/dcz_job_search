import React, {useContext, useEffect, useState} from 'react';
import { Box, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import {ArrowCircleUp} from '@mui/icons-material';
import JobsModal from './JobsModal';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import convertDate from ".././jobFolder/sendVac/convertDate";
import {Col, Row} from "react-bootstrap";

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
      background: '#1b285f',
       fontFamily:'Proba',
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
       [theme.breakpoints.down('lg')]: {
           paddingLeft: 0,
           paddingRight: 0,
           marginTop: '.2rem',
           marginBottom: '.2rem',
           marginLeft:".2rem",
           marginRight:".2rem",
       },
       [theme.breakpoints.down('xs')]: {
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
       fontFamily:'Proba',
      color: theme.palette.gray.fW600,
      fontWeight:"bold"
   },

   nameValueSalary: {
      color: theme.palette.gray.fW600,
      fontSize: '1.8 rem',
      fontWeight:"bold",
       fontFamily:'Proba',
      [theme.breakpoints.down('md')]: {
         fontSize: ".8rem"}

   },
   nameValue: {
      color: theme.palette.gray.fW600,
      fontSize: '1rem',
      fontWeight:"bold",
       fontFamily:'Proba',
          [theme.breakpoints.down('md')]: {
   fontSize: ".8rem"
}
   },
   valueSalary: {
      color:  "#1b285f",
      marginRight: '.5rem',
      paddingRight: '.4rem',
      fontSize: '1.8rem',
      fontWeight:"bold",
       fontFamily:'Proba',
      [theme.breakpoints.down('md')]: {
         fontSize: "1.3rem"
      }
   },
   value: {
      color: theme.palette.third.fifth,
      marginRight: '.5rem',
      paddingRight: '.4rem',
      fontWeight:"bold",
       fontFamily:'Proba'
   },

   resultIcon: {
      fontSize: '5rem',
      cursor: 'pointer',
      color:"#FFFFFF",
      marginTop:'0.5rem',
       fontFamily:'Proba'
   },
}));

function JobBoard() {
   const [isReversed, setIsReversed] = useState(false);
   const [isReversedZp, setIsReversedZp] = useState(false);
   const [isReversedName, setIsReversedName] = useState(false);
   const classes = useStyles();
   const {
      jobs,
      setJobs,
      pagesVisited,
      jobsPerPage,
      setJobsModal,
      handleOpen
   } = useContext(JobsContext);
   const dot = '. . ';

   const handleResultIcon = () => {
      setIsReversed(!isReversed);
       const sortedvac =isReversed?jobs.sort((a, b) => (b.reg_date > a.reg_date) ? 1 : -1):jobs.sort((a, b) => (a.reg_date > b.reg_date) ? 1 : -1);
       setJobs(sortedvac);
   };
    const handleResultZp = () => {
        setIsReversedZp(!isReversedZp);
        const sortedvac =isReversedZp?jobs.sort((a, b) => (a.salary > b.salary) ? 1 : -1):jobs.sort((a, b) => (b.salary > a.salary) ? 1 : -1);
        setJobs(sortedvac);
    };
    const handleResultName = () => {
        setIsReversedName(!isReversedName);
        const sortedvac =isReversedName?jobs.sort((a, b) => (a.vacname.toLowerCase() > b.vacname.toLowerCase()) ? 1 : -1):jobs.sort((a, b) => (b.vacname.toLowerCase() > a.vacname.toLowerCase()) ? 1 : -1);
        setJobs(sortedvac);
    };
   const handleJobsModal = (job) => {
      setJobsModal([job]);
      handleOpen();
   };
   const jobsotrasl=jobs.map(((t)=>t.branchnname));
   new Set(jobsotrasl);


    const displayJobs = jobs
       .slice(pagesVisited, pagesVisited + jobsPerPage)
       .map((job) => (

           <React.Fragment key={job.id}>

              <Row style={{
              maxHeight: '100%',
                 overflow: 'auto',
                 width: '100%',
                  fontFamily:'Proba',
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
              ><Col style={{ width:"95%",justifyContent:'space-around',[theme.breakpoints.down('md')]: {fontFamily:'Proba',
                    fontSize: "1rem",width:"100%"
                 }}}>
                 <Typography style={{fontWeight:"bold",color:  "#1b285f",}}
                             className={classes.position}
                             sx={{ fontWeight: "bold", fontSize: "1.5rem",[theme.breakpoints.down('md')]: {
                                   fontSize: "1rem"
                                } }}
                 >
                    {job.vacname.toLowerCase()}
                 </Typography>
                 <Typography
                     variant="body1"
                     className={classes.description}
                     sx={{ mt: 2, mb: 3, fontSize: 15 }}
                     //dangerouslySetInnerHTML={{__html: job.description.replace(/(<([^>]+)>)/gi, '')
                             //.slice(0, 220)}}
                 >
                    {`${job.description
                       .replace(/(<([^>]+)>)/gi, '')
                       .slice(0, 220)}${dot.repeat(2)}`}
                 </Typography>
                 <div className={classes.nameValue}>
                    Регіон:{' '}
                    <span className={classes.value}>
                        { job.regionname.length < 15
                                ? job.regionname
                                : job.regionname.slice(0, 35)}
                     </span>
                 </div>
                 <div className={classes.nameValue}>
                    Дата розміщення:{' '}
                    <span className={classes.value}>
                        {convertDate(job.reg_date)}
                     </span>
                 </div>
              </Col>
                 <Col style={{width:"20%",fontWeight:"bold"}} sx={{ fontFamily:'Proba',fontWeight: 600, mt: 2 }}>
                    <Typography className={classes.nameValueSalary}>
                       Заробітна плата(грн.):
                       <div className={classes.valueSalary}>
                          {job.salary===null||job.salary===0?("договірна"):job.salary }&nbsp;{ (job.currency==0||null)||(job.currency==0&&(job.salary===null||job.salary===0))? ("UAH") : job.currency}


                       </div>

                    </Typography>

                 </Col>
              </Row>
           </React.Fragment>
       ));
   //console.log(jobs)
   return (
       <Box sx={{ mt: 1, ml: 2, mr: 2 }} style={{visibility: jobs ? 'visible' : 'hidden' }}>
          <Box container className={classes.resultContainer}>
             <Typography
                 variant="subtitle1"
                 component="subtitle1"
                 sx={{
                     fontFamily:'Proba',
                    display: 'flex',
                    fontWeight: 500,
                    padding:'.3rem',
                    color:"#FFFFFF",
                    border: "1px solid #625d5d",
                    [theme.breakpoints.down('md')]: {
                       fontSize: '.6rem',
                    },
                        [theme.breakpoints.down('sm')]: {
                     fontSize: '.6rem',

                 },
                     [theme.breakpoints.down('xs')]: {
                         fontSize: '.6rem',

                     }
                 }}
             >
                {' '}
                Результат: &nbsp;&nbsp;
                 {`${
                     jobs.length <= 1
                         ? `${jobs.length}`
                         : `${jobs.length}` 
                 }`}
             </Typography>
              <Typography variant="subtitle1" sx={{

                  display: 'flex',
                  fontWeight: 500,
                  padding:'.3rem',
                  color:"#FFFFFF",
                  fontFamily:'Proba',
                  [theme.breakpoints.down('md')]: {
                      fontSize: '.6rem',
                      marginLeft:0,
                  },
                  [theme.breakpoints.down('sm')]: {
                      fontSize: '.6rem',
                      marginLeft:0,
                      display: 'none'
                  },
                  [theme.breakpoints.down('xs')]: {
                      fontSize: '.6rem',
                      marginLeft:0,
                      display: 'none'
                  }
              }}>
                  Сортування:&nbsp;&nbsp;
              </Typography>
             <Typography variant="subtitle1" sx={{
                 fontFamily:'Proba',
                display: 'flex',
                fontWeight: 500,
                padding:'.3rem',
                color:"#FFFFFF",
                 [theme.breakpoints.down('md')]: {
                     fontSize: '.6rem',
                 },
                 [theme.breakpoints.down('sm')]: {
                     fontSize: '.6rem',
                 },
                 [theme.breakpoints.down('xs')]: {
                     fontSize: '.6rem',
                 }
             }}>

                 за назвою:  <ArrowCircleUp
                 onClick={handleResultName}
                 className={classes.resultIcon}
                 sx={{
                     fontFamily:'Proba',
                     width:"2rem",
                     height:'2rem',
                     transform: isReversedName ? 'rotate(180deg)' : 'rotate(0deg)',
                     transition: '.2s',
                     [theme.breakpoints.down('md')]: {
                         width:"1rem",
                         height:'1rem',
                     }
                 }}
             /> &nbsp;&nbsp;

                 за датою:  <ArrowCircleUp
                     onClick={handleResultIcon}
                     className={classes.resultIcon}
                     sx={{
                         width:"2rem",
                         height:'2rem',
                         fontFamily:'Proba',
                         transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)',
                         transition: '.2s',
                         [theme.breakpoints.down('md')]: {
                             width:"1rem",
                             height:'1rem',
                         }
                     }}
                 /> &nbsp;&nbsp;


                 за з/п:  <ArrowCircleUp
                 onClick={handleResultZp}
                 className={classes.resultIcon}
                 sx={{
                     width:"2rem",
                     height:'2rem',
                     fontFamily:'Proba',
                     transform: isReversedZp ? 'rotate(180deg)' : 'rotate(0deg)',
                     transition: '.2s',
                     [theme.breakpoints.down('md')]: {
                         width:"1rem",
                         height:'1rem',
                     }
                 }}
             /></Typography>
          </Box>


          {jobs.length >= 1 ? (<>
                  {displayJobs}</>
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
                 <ErrorOutlineIcon sx={{ fontSize: 32,fontFamily:'Proba', mr: 1, mb: 2 }} /> Вибачте,
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
