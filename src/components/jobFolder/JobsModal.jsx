import React, {useContext, useRef} from 'react';
import {JobsContext} from './JobsContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {makeStyles} from '@mui/styles';
import ComponentToPrint from "./ComponentToPrint";
import logo1 from "../../components/Img/grc_ua_logo.png";
import logo2 from "../../components/Img/work.png";
import logo3 from "../../components/Img/robota.png"
import logo4 from "../../components/Img/jooble.png"
import logo5 from "../../components/Img/pidbir.png"
import logo6 from "../../components/Img/logo_1.png"
import convertDate from ".././jobFolder/sendVac/convertDate";
import {Col, Row} from "react-bootstrap";
import ReactToPrint, {useReactToPrint} from "react-to-print";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPrint} from "@fortawesome/free-solid-svg-icons";
import '../jobFolder/JobModal.css'
import arrow from './../Img/arrow.png'

const useStyles = makeStyles((theme) => ({
    modalStyle1: {
        border: "5px solid #fec248",
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '78%',
        height: '80%',
        backgroundColor: 'white',
        boxShadow: 24,
        padding: 24,

        [theme.breakpoints.down('xl')]: {
            width: '78%',
            height: '80%'
        }
        , [theme.breakpoints.down('md')]: { width: '78%',
            height: '80%'}
    },
    [theme.breakpoints.down('sm')]: {
        width: '78%',
        height: '80%'
    },
    modalStyle: {
        position: 'absolute',
        top: '57%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '73%',
        backgroundColor: 'white',
        boxShadow: 24,
        padding: 24,
        overflowY: 'scroll',
        overflowX: 'hidden',
        outline: 'none',
        [theme.breakpoints.down('xl')]: {
            width: '100%',
            height: '73%',
            top: '60%',
        }
        , [theme.breakpoints.down('md')]: {  width: '100%',
            height: '73%',top: '59%',}
    }, [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '73%',
        top: '58%',
    },
    printButtonStyle:{
        marginTop:"44%",
        [theme.breakpoints.down('xl')]: {
            marginTop:"45%",
        }
        , [theme.breakpoints.down('md')]: {
            marginTop:"44%",}
    }, [theme.breakpoints.down('sm')]: {
        marginTop:"44%",

    },
    detailsContainerOut: {
        padding: '.5rem',
        border: "1px solid #625d5d",
        [theme.breakpoints.down('md')]: {
            padding: '.5rem',
            flexWrap: 'wrap',
        }
    },
    detailsContainer: {
        padding: '1.5rem',
        [theme.breakpoints.down('md')]: {
            paddingRight: '.5rem',
            paddingLeft: '.5rem',
            flexWrap: 'wrap',
            //marginTop: '1rem'
        }
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
        fontWeight: "bold",
        fontSize: '.8rem',
        display: 'inline-block',
    },

    value: {
        color: "#1b285f",
        marginRight: '.5rem',
        paddingRight: '.4rem',
        fontWeight: "bold",
        overflowWrap: "break-word",
        [theme.breakpoints.down('md')]: {
            width: '25%'
        }
    },
    jobTitle: {
        color: "#1b285f",
        fontWeight: "bold",
        fontSize: "1.5rem",
        [theme.breakpoints.down('md')]: {
            fontSize: "1rem",
        }
    },
    closeBtn: {
        color: 'red',
        fontWeight: "bold",
        [theme.breakpoints.down('md')]: {
            lineHeight: '.5rem'
        }

    },
}));


export default function BasicModal() {
    const {jobsModal, open, handleClose} = useContext(JobsContext);

    const classes = useStyles();
    let componentRef = useRef();
    useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div>
            {jobsModal.map((item) => (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box className={classes.modalStyle1}>
                    <Row className="rowmodals"  >
                        <Col col={4} className='value'>
                            <span style={{marginTop: ".5rem"}}> Перейти </span>
                            <img src={arrow} height="80%"
                                 width="35%" style={{marginLeft: "1rem", marginRight: '1rem'}}/>
                        </Col>

                        <Col col={4} style={{marginLeft: "1rem", marginRight: '1rem'}}>
                            <a href={item.vac_url}
                               target="_blank"
                               rel="noopener noreferrer">
                                <img className="logoimg"
                                     src={item.source === 'dcz' ? logo6 : item.source === 'grc.ua' ? logo1 : item.source === 'work.ua' ? logo2 : item.source === 'rabota.ua' ?
                                         logo3 : item.source === 'jooble' ? logo4 : item.source === 'pidbir.com' ? logo5 : logo6}
                                     height="auto"
                                     width="50rem"
                                     alt="logo"

                                /></a></Col>
                        <Col col={1} style={{fontWeight: "bold"}}> <Button style={{
                            border: "1px solid #625d5d", lineHeight: '.5rem',
                        }}
                                                                           onClick={handleClose}>
                            <span className={classes.closeBtn}>X</span> &nbsp;
                        </Button></Col>

                    </Row>
                    <Row>
                        <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: 1, fontWeight: 600, fontSize: 18}}
                        className={classes.jobTitle}
                    >
                        {item.vacname}
                    </Typography></Row>
                    <Col> <Box className={classes.modalStyle}>
                        <Box className={classes.detailsContainerOut}>

                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h4"
                                sx={{mt: -2, fontWeight: 600, fontSize: 15}}
                                className={classes.detailsContainer}
                            >
                    <span className={classes.value}>
                    Локація:&nbsp;&nbsp;</span>
                                {item.cityname}
                            </Typography>
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h4"
                                sx={{mt: -6, fontWeight: 600, fontSize: 15}}
                                className={classes.detailsContainer}
                            >
                    <span className={classes.value}>
                   Роботодавець:&nbsp;&nbsp;</span>
                                {item.companyname}
                            </Typography>
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h4"
                                sx={{mt: -6, fontWeight: 600, fontSize: 15}}
                                className={classes.detailsContainer}
                            >
                    <span className={classes.value}>
                   Обов`язки:&nbsp;&nbsp;</span>
                                <div
                                    dangerouslySetInnerHTML={{__html: item.description}}
                                />
                            </Typography>
                            {item.workcond ? <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h4"
                                sx={{mt: -6, fontWeight: 600, fontSize: 15}}
                                className={classes.detailsContainer}
                            >
                    <span className={classes.value}>
                   Умови праці:&nbsp;&nbsp;</span>
                                {item.workcond}
                            </Typography> : ''}
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h4"
                                sx={{mt: -6, fontWeight: 600, fontSize: 15}}
                                className={classes.detailsContainer}
                            >
                    <span className={classes.value}>
                   Заробітна плата:&nbsp;&nbsp;</span>
                                {item.salary == 0 || item.salary == null ? ("договірна") : item.salary}&nbsp;{item.currency == null && item.salary == null || item.currency == 0 && item.salary == 0 ? ("UAH") : item.currency}
                            </Typography>
                            {item.salarytxt ? <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h4"
                                sx={{mt: -6, fontWeight: 600, fontSize: 15}}
                                className={classes.detailsContainer}
                            >
                    <span className={classes.value}>
                   Умови оплати:&nbsp;&nbsp;</span>
                                {item.salarytxt}
                            </Typography> : ""}
                            {item.contact ? <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h4"
                                sx={{mt: -6, fontWeight: 600, fontSize: 15}}
                                className={classes.detailsContainer}
                            >
                    <span className={classes.value}>
                   Email:&nbsp;&nbsp;</span>
                                {item.contact === '' ? 'відсутній' : item.contact}
                            </Typography> : ""}

                            <Typography variant="h4" sx={{mt: -1, fontWeight: 500}}>
                    <span className={classes.nameValue}>
                      Галузь:&nbsp;&nbsp;
                        <span className={classes.value}>
                          {item.branchnname.toLocaleLowerCase()}
                       </span>
                    </span>
                                <span className={classes.nameValue}>
                      Дата  розміщення:&nbsp;&nbsp;
                                    <span className={classes.value}>
                          {convertDate(item.reg_date)}
                       </span>
                    </span>
                            </Typography>
                        </Box>
                        <Col col={2}  style={{marginTop:'2%'}} >
                            <ReactToPrint
                                trigger={() => <Button
                                    style={{border: "1px solid #625d5d", marginLeft: "40%", width: "20%"}}
                                    startIcon={<FontAwesomeIcon icon={faPrint}/>}></Button>}
                                pageStyle='@page { size:auto; margin:10mm; } @media print {
html, body {
height: initial !important;
overflow: absolute !important;
-webkit-print-color-adjust: exact;
}' content={() => componentRef.current}
                            />
                            <div style={{display: "none"}}><ComponentToPrint ref={componentRef} data={jobsModal}
                                                                             style={{display: "none"}}/></div>
                        </Col>
                    </Box>


                   </Col>
                </Box>
                </Modal>
            ))}
        </div>
    );
}
