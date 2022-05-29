import React, { useEffect, useContext } from 'react';
import {
   Box,
   FormControl,
   FormControlLabel,
   RadioGroup,
   FormLabel,
   Radio,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import { JobsContext } from './JobsContext';

const useStyles = makeStyles((theme) => ({
   container2: {
      flexShrink: 0,
      flexGrow: 0,
      minHeight: '100%',
      backgroundColor: theme.palette.third.secondary,
      background: 'linear-gradient(20deg,#045ba7 55%,  #FFD947 75%)',
      maxWidth: '100%',
      minWidth: '14rem',
      borderRadius:"25px 25px",
   },
   container3: {
      flexShrink: 0,
      flexGrow: 0,
      minHeight: '100%',
      backgroundColor: theme.palette.third.secondary,
      background:" radial-gradient(464.98px at 50% 50%, rgb(38, 72, 111) 0%, rgb(18, 41, 69) 100%)",
      maxWidth: '100%',
      minWidth: '14rem',
   },
   icon: {
      color: theme.palette.third.fourth,
      fontWeight: 'bolder',
   },
}));

const jobType = ['меньше 10000 грн', 'від 10000 грн до 30000 грн', 'більше 30000 грн',"за домовленністю"];

function SortJobs() {
   const {
      category,
      categoryRegion,
      data,
      setJobs,
      jobs,
      sortedJobs,
      setSortedJobs,
      setPageNumber,
   } = useContext(JobsContext);

   const handleSortJobs = (e) => {
      setSortedJobs(e.target.value);
      setJobs(data);
   };

   const jobTypeFilter = () => {
      setPageNumber(0);
      if (!category) {
         setJobs(
            jobs.filter((item) => {
               switch (jobType[sortedJobs]) {
                  case 'меньше 10000 грн':
                     return item.pay<100000;
                  case 'від 10000 грн до 30000 грн':
                     return item.pay>10000&&item.pay<30000;
                  case 'більше 30000 грн':
                     return item.pay>300000;
                  case 'за домовленністю':
                     return (
                        item.pay.includes('За домовленістю')
                     );
               }
            })
         )}
         if (!categoryRegion) {
            setJobs(

                jobs.filter((item) => {
                   switch (jobType[sortedJobs]) {
                      case 'меньше 10000 грн':
                         return item.pay<100000;
                      case 'від 10000 грн до 30000 грн':
                         return item.pay>10000&&item.pay<30000;
                      case 'більше 30000 грн':
                         return item.pay>300000;
                      case 'за домовленністю':
                         return (
                             item.pay.includes('За домовленістю')
                         );
                   }
                })
            );
      } else {
         console.log('there is category');
         setJobs(
             jobs.filter((item) => {
                switch (jobType[sortedJobs]) {
                   case 'меньше 10000 грн':
                      return item.pay<100000;
                   case 'від 10000 грн до 30000 грн':
                      return item.pay>10000&&item.pay<30000;
                   case 'більше 30000 грн':
                      return item.pay>300000;
                   case 'за домовленністю':
                      return (
                          item.pay.includes('За домовленістю')
                      );
                }
             })
         );
      }
   };

   const classes = useStyles();

   useEffect(() => {
      jobTypeFilter();
   }, [sortedJobs]);

   return (<>

      <Box className={classes.container2}>
         <FormControl sx={{ m: 3 }} className={classes.formControl1}>
            <div className={classes.flex}>
               <span className={classes.icon}>
                  <SortRoundedIcon sx={{ fontSize: 20 }} />
               </span>
               <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ ml: 1.5, fontWeight: 600, fontSize: 15 }}
               >
                  {' '}
                  Заробітна плата:{' '}
               </FormLabel>
            </div>
            <RadioGroup
               aria-labelledby="demo-radio-buttons-group-label"
               name="radio-buttons-group"
               value={sortedJobs}
               onChange={handleSortJobs}
               sx={{ mt: 2, ml: 2.5 }}
            >
               {jobType.map((item, index) => (
                  <FormControlLabel
                     control={<Radio size="small" />}
                     label={item}
                     value={index}
                     key={item + index}
                  />
               ))}
            </RadioGroup>
         </FormControl>

      </Box>

       </>
   );
}

export default SortJobs;
