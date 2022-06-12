import React, {useContext, useEffect} from 'react';
import { JobsContext } from './JobsContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import logo from "../Img/logo_1.png";

import logo1 from "../Img/logo1.png";
import logo2 from "../Img/logo2.png";
import logo3 from "../Img/logo3.png";
import logo4 from "../Img/logo4.png";
import logo5 from "../Img/logo5.jpg";

import { Random } from "random-js";
import {Col, Row} from "react-bootstrap";
const random = new Random(); // uses the nativeMath engine
let valueimg = random.integer(1, 6);
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
   detailsContainerOut: {
      padding: '1.5rem',
      border: "1px solid #625d5d",

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
      fontWeight:"bold",
      fontSize: '.8rem',
      display: 'inline-block',
   },

   value: {
      color: "#005BAA",
      marginRight: '.5rem',
      paddingRight: '.4rem',
      fontWeight:"bold",
   },
   jobTitle: {
      color: "#005BAA",
      fontWeight:"bold",
      fontSize:"1.5rem"
   },
   closeBtn: {
      color: 'red',

   },
}));

export default function BasicModal() {
   const { jobsModal, open, handleClose } = useContext(JobsContext);
   useEffect(() => {
      setInterval(() => {
         valueimg = random.integer(1, 6);
      }, 1000);
   }, []);
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


                  <Row style={{
                     width: 'auto',
                     marginLeft:'1rem',
                     marginRight:"2rem",
                     display: 'flex',
                     gap: '1rem',
                  }} >
                     <Col style={{width:"20%",fontWeight:"bold"}}>  <Button style={{ border: "1px solid #625d5d",}} onClick={handleClose}>
                        <span className={classes.closeBtn}>X</span> &nbsp; Закрити
                     </Button></Col>
                   <Col style={{width:"50%",fontWeight:"bold"}}> <a href={item.VACURL} target="_blank" rel="noopener noreferrer">  <Button style={{ border: "1px solid #625d5d",marginLeft:"40%"}} onClick={handleClose}>
                        Перейти на сайт
                     </Button></a></Col>
                     <Col style={{width:"20%",fontWeight:"bold"}} >  <img className="logo-img"
                          src={item.SOURCE=="dcz"?logo:item.SOURCE=="grc.ua"?logo1:''}
                          height="auto"
                          width="50rem"
                          alt="logo" style={{
                        marginLeft:"80%",
                        //marginTop:"1rem",
                        //zIndex: "1"
                        // marginRight:"2rem"
                     }}

                     /></Col>
                  </Row>

                  <Box className={classes.detailsContainerOut}>
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
                        <div
                            dangerouslySetInnerHTML={{__html: item.DESCRIPTION}}
                        />
                     </Typography>
                     {item.WORKCOND?<Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -6, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                       Умови праці:&nbsp;&nbsp;</span>
                        { item.WORKCOND}
                     </Typography>:''}
                     <Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -6, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                       Заробітна плата(грн):&nbsp;&nbsp;</span>
                        { item.SALARY==0?("договірна"):item.SALARY}
                                             </Typography>
                     {item.SALARYTXT? <Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -6, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                       Умови олати:&nbsp;&nbsp;</span>
                        { item.SALARYTXT}
                     </Typography>:""}
                     { item.EMAIL?<Typography
                         id="modal-modal-title"
                         variant="h6"
                         component="h4"
                         sx={{ mt: -6, fontWeight: 600, fontSize: 16 }}
                         className={classes.detailsContainer}
                     >
                        <span className={classes.value}>
                       Email:&nbsp;&nbsp;</span>
                        { item.EMAIL=== ''?'відсутній':item.EMAIL}
                     </Typography>:""}

                     <Typography variant="h4" sx={{ mt: -1, fontWeight: 500 }}>
                        <span className={classes.nameValue}>
                          Галузь:&nbsp;&nbsp;
                           <span className={classes.value}>
                              {item.BRANCHNAME.toUpperCase()}
                           </span>
                        </span>
                        <span className={classes.nameValue}>
                          Дата та час розміщення:&nbsp;&nbsp;
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
