import React, { useContext, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import { PaginationItem } from '@mui/material';
import { JobsContext } from './JobsContext';

const useStyles = makeStyles((theme) => ({}));

function PaginationRounded() {
   const { setPageNumber, pageCount, pageNumber } = useContext(JobsContext);

   const handlePage = (e, page) => {
      setPageNumber(page - 1);
      console.log(page - 1);
      console.log(pageNumber);
      handleScrollToTop();
   };

   const handleScrollToTop = () => {
      const smoothScroll =
         document.documentElement.scrollTop || document.body.scrollTop;
      if (smoothScroll > 0) {
         window.requestAnimationFrame(handleScrollToTop);
         window.scrollTo(0, smoothScroll - smoothScroll / 12);
      }
   };
   const classes = useStyles();

   return (
      <Stack spacing={2}>
         <Pagination
            onChange={handlePage}
            count={pageCount}
            shape="rounded"
            className={classes.pagination}
            renderItem={(item) => (
               <PaginationItem
                  sx={{ fontSize: 16 }}
                  components={{ previous: ArrowLeft, next: ArrowRight }}
                  {...item}
               />
            )}
            sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
         />
      </Stack>
   );
}
export default PaginationRounded;
