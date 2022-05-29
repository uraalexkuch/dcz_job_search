import React, { useContext, useEffect } from 'react';
import {
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   OutlinedInput,
   Box, Button, Icon,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { JobsContext } from './JobsContext';
import SearchIcon from '@mui/icons-material/Search';
import {Image} from "@mui/icons-material";
import {Col, Row} from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
   container: {
      width: 'max(85%)',
      margin: 'auto',
      display: 'flex',
borderRadius:"25 px 25 px",
      marginLeft:'2rem',
      marginRight:"2rem",
      gap: '1rem',
      [theme.breakpoints.down('lg')]: {
         width: 'max(85%)',

      },
   },
   containertwo: {
      width: 'max(85%)',
      marginTop: '2rem',
      marginLeft:'2rem',
      marginRight:"2rem",
      display: 'flex',

      gap: '1rem',
      [theme.breakpoints.down('lg')]: {
         width: 'max(85%)',

      },
   },
   inputStyle: {
      position: 'relative',
   },

   formControl1: {
      width: '100%',

   },
   formControl2: {
      width: '50%',
   },
buttonsearch:{
   backgroundColor:"#FFD947",
   cursor: "pointer",
   order: "4",
   padding: "0 17px 0 14px",
   borderRadius: "0 50px 50px 0",
height: "49px"
},
   searchIcon: {
      position: 'absolute',
      right: '5%',
      top: '15%',
      height:"100%",
      color: theme.palette.third.main,
      backgroundColor:"#FFD947"
   },
}));



function SearchBar() {
   const {
      jobs,
      setJobs,
      data,
      setData,
      searchText,
      setSearchText,
      category,
      setCategory,
      categoryRegion,
      setCategoryRegion,
      categoryLabelRegion,
      categoryLabel,
      setCategoryLabelRegion,
      setPageNumber,
   } = useContext(JobsContext);




   const handleSearch = (e) => {
      setSearchText(e.target.value);
   };
const search=  ()=> jobs
    .filter(
    (job) =>
        job.prof
            .toLowerCase()
            .includes(searchText.toLocaleLowerCase())

     ||
        job.vacopis
            .toLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
        job.region
            .toLowerCase()
            .includes(searchText.toLocaleLowerCase())
)

   const searchgaluz=()=> jobs.filter((job) =>
       job.otrasl.toLowerCase().includes(category.toLowerCase())
   )
   const searchregion=()=>jobs.filter((job) =>
       job.region.toLowerCase().includes(categoryRegion.toLowerCase())

   )
   const handleKeyDown = (e) => {
      //const reg = /[a-zA-Z0-9]/g;
      if (searchText !== '') {
         setJobs(
             search
         );
         setPageNumber(0);
      }
      if (searchText === '' ) {
         category === 0
            ? setJobs(data)
            : setJobs(
             searchgaluz
              ).then( setCategory(0));
      }
      if (searchText === '' ) {
         categoryRegion === 0
             ? setJobs(data)
             : setJobs(
                 searchregion
             ).then(  setCategoryRegion(0));
         console.log(categoryRegion.toLowerCase())
      }
   };
   const handleStart = () => {
      setCategory(0);
      setCategoryRegion(0)
      setJobs(data);

   };
   const handleCategory = (e) => {
      setCategory(e.target.value);
      setJobs(jobs);

   };
   const handleCategoryRegion = (e) => {
      setCategoryRegion(e.target.value);
      console.log(e.target.value)
      setJobs(jobs);
   };
   const classes = useStyles();

   useEffect(() => {
      if (category !== 0) {
         setJobs(
            jobs.filter((job) =>
               job.otrasl.toLowerCase().includes(category.toLocaleLowerCase()),

            )
         );
         setPageNumber(0);

      } else setJobs(data);

   }, [category]);
   useEffect(() => {
      if (categoryRegion!== 0) {
         setJobs(
             jobs.filter((job) =>
                 job.region.toLowerCase().includes(categoryRegion.toLocaleLowerCase())
             )
         );
         setPageNumber(0);
//setCategoryRegion(0)
      } else setJobs(data);
      //setCategoryRegion(0)
   }, [categoryRegion]);
   useEffect(() => {
      console.log('working');
   }, [jobs]);


   console.log(  data)
   return (
      <>
         <Row style={{marginTop:'2rem'}} className={classes.container} sx={{ mt: 10 }}>
            <FormControl size="small" className={classes.formControl1}>
               <InputLabel htmlFor="jobs" className={classes.inputLabel}>
                 Пошук за назвою
               </InputLabel>
               <OutlinedInput
                   label="Search for Jobs"
                   variant="outlined"
                   onChange={handleSearch}
                  // onKeyPress={handleKeyDown}
                   placeholder="Введіть назву посади або область"
                   value={searchText}
                   sx={{ borderRadius: 5, position: 'relative' }}
               />{' '}


            </FormControl>
            <>
               <Button
                   variant={'contained'}
                   color={'primary'}

                   icon={<SearchIcon/>}
                   shadowless
                   padding={'5px'}

                   onClick={handleKeyDown}
                   placeholder="Введіть назву"
                   value={searchText}
               >
                 Шукати
               </Button>

            </>

         </Row >
         <Row style={{marginTop:'' +
                '1rem'}} className={classes.containertwo} sx={{ mt: 10 }}>

            <FormControl size="small" className={classes.formControl1}>
               <InputLabel htmlFor="categories">Регіон</InputLabel>

               <Select
                   labelId="demo-simple-select-label"
                   label="categoryRegion"
                   variant="outlined"
                   sx={{ borderRadius: 5 }}
                   className={classes.inputStyle}
                   onChange={handleCategoryRegion }
                   value={categoryRegion}
               >
                  <MenuItem value={0}>{'Всі'}</MenuItem>

                  {categoryLabelRegion .map((item, idx) => (
                      <MenuItem key={idx} value={item}>
                         {item}
                      </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormControl size="small" className={classes.formControl1}>
               <InputLabel htmlFor="categories">Галузь</InputLabel>

               <Select
                   labelId="demo-simple-select-label"
                   label="category"
                   variant="outlined"
                   sx={{ borderRadius: 5 }}
                   className={classes.inputStyle}
                   onChange={handleCategory}
                   value={category}
               >
                  <MenuItem value={0}>{'Всі'}</MenuItem>

                  {categoryLabel.map((item, idx) => (
                      <MenuItem key={idx} value={item}>
                         {item}
                      </MenuItem>
                  ))}
               </Select>
            </FormControl>

         </Row>

      </>
   );
}

export default SearchBar;
