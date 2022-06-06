import React, { useContext } from 'react';
import { JobsContext } from './JobsContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   modalStyle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 1000,
      height: 550,
      backgroundColor: 'white',
      boxShadow: 24,
      padding: 24,
      overflowY: 'scroll',
      overflowX: 'hidden',
      outline: 'none',
      [theme.breakpoints.down('xl')]: {
         height: '80%',
         width: '90%',
      },
   },

   detailsContainer: {
      padding: '1.5rem',
   },

   span: {
      background: theme.palette.gray.bg,
      margin: '0 .8rem .5rem 0',
      padding: '.1rem .8rem',
      borderRadius: '10rem',
      overflowWrap: 'break-word',
      display: 'inline-block',
   },
   nameValue: {
      color: theme.palette.gray.fW600,
      fontSize: '.8rem',
      display: 'inline-block',
   },

   value: {
      color: theme.palette.third.fifth,
      marginRight: '.5rem',
      paddingRight: '.4rem',
   },
   jobTitle: {
      color: theme.palette.third.fourth,
   },
   closeBtn: {
      color: 'red',
   },
}));

export default function BasicModal() {
   const { jobsModal, open, handleClose } = useContext(JobsContext);

   const classes = useStyles();
   return (
      <div>
         {jobsModal.map((item) => (
            <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
            >
               <Box className={classes.modalStyle}>
                  <Button onClick={handleClose}>
                     <span className={classes.closeBtn}>X</span> &nbsp; Закрити
                  </Button>
                  <Box className={classes.detailsContainer}>
                     <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{ mt: 1, fontWeight: 600, fontSize: 20 }}
                        className={classes.jobTitle}
                     >
                        {item.VACNAME}
                     </Typography>
                     <Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -2, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                        Місто:&nbsp;&nbsp;</span>
                        { item.CITYNAME}
                     </Typography>
                     <Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -6, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                       Роботодавець:&nbsp;&nbsp;</span>
                        { item.COMPANYNAME}
                     </Typography>
                     <Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -6, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                       Обов"язки:&nbsp;&nbsp;</span>
                        { item.DESCRIPTION}
                     </Typography>

                     <Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -6, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                       Заробітна плата(грн):&nbsp;&nbsp;</span>
                        { item.SALARY}
                     </Typography>
                     <Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -6, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                       Email:&nbsp;&nbsp;</span>
                        { item.EMAIL}
                     </Typography>
                     <Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -6, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                       Телефон:&nbsp;&nbsp;</span>
                        { item.PHONE}
                     </Typography>


                     <Typography variant="h2" sx={{ mt: 2, fontWeight: 500 }}>

                        <span className={classes.nameValue}>
                          Галузь:&nbsp;&nbsp;
                           <span className={classes.value}>
                              {item.BRANCHNAME.toUpperCase()}
                           </span>
                        </span>
                        <span className={classes.nameValue}>
                          Дата розміщення:&nbsp;&nbsp;
                           <span className={classes.value}>
                              {item.REG_DATE}
                           </span>
                        </span>
                     </Typography>
                  </Box>
               </Box>
            </Modal>
         ))}
      </div>
   );
}
