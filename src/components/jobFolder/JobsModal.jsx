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
import logo3 from "../../components/Img/robota.png";
import arrow from '../Img/arrow.png'
import logo6 from "../../components/Img/logo_1.png"
import {Col, Row} from "react-bootstrap";
import ReactToPrint, {useReactToPrint} from "react-to-print";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPrint} from "@fortawesome/free-solid-svg-icons";
import {theme} from "../../CustomTheme";
import '../jobFolder/JobModal.css'

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
        }
        ,[theme.breakpoints.down('md')]: {

        }
    },
    detailsContainerOut: {
        padding: '1.5rem',
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
        paddingLeft:'.5rem',
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
        color: "#005BAA",
        marginRight: '.5rem',
        paddingRight: '.4rem',
        fontWeight: "bold",
        [theme.breakpoints.down('md')]: {
width: '25%'
        }
    },
    jobTitle: {
        color: "#005BAA",
        fontWeight: "bold",
        fontSize: "1.5rem",
        [theme.breakpoints.down('md')]: {
            fontSize: "1rem",
}
    },
    closeBtn: {
        color: 'red',
        [theme.breakpoints.down('md')]: {
            lineHeight: '.5rem'
        }

},
}));


export default function BasicModal() {
const {jobsModal, open, handleClose} = useContext(JobsContext);

const classes = useStyles();
let componentRef = useRef();
const handlePrint = useReactToPrint({
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
                <Box className={classes.modalStyle}>
                    <Row  className="rowmodals"
                   >
                        <Col col={4} style={{fontWeight: "bold"}}> <Button style={{border: "1px solid #625d5d", lineHeight: '.5rem',

                                }}
                                                                           onClick={handleClose}>
                            <span className={classes.closeBtn}>X</span> &nbsp; Закрити
                        </Button></Col>


                        <Col col={4} className='value'
                             >
                            <img className="logoarrow"
                                 src={arrow}
                                 height="auto"
                                 width="5rem"
                                 alt="logo" style={{
                                // marginLeft:"80%",
                                //marginTop:"1rem",
                                //zIndex: "1"
                                // marginRight:"2rem"
                            }}

                            />
                        </Col>
                        <Col col={2} style={{marginLeft: "5%", fontWeight: "bold"}}> <a href={item.VACURL}
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer">
                            <img className="logo-img"
                                 src={item.SOURCE == 'dcz' ? logo6 : item.SOURCE == 'grc.ua' ? logo1 : item.SOURCE == 'work.ua' ? logo2 : logo6}
                                 height="auto"
                                 width="50rem"
                                 alt="logo" style={{
                                // marginLeft:"80%",
                                //marginTop:"1rem",
                                //zIndex: "1"
                                // marginRight:"2rem"
                            }}

                            /></a></Col>
                    </Row>

                    <Box className={classes.detailsContainerOut}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: 1, fontWeight: 600, fontSize: 20}}
                            className={classes.jobTitle}
                        >
                            {item.VACNAME}
                        </Typography>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -2, fontWeight: 600, fontSize: 16}}
                            className={classes.detailsContainer}
                        >
                    <span className={classes.value}>
                    Місто:&nbsp;&nbsp;</span>
                            {item.CITYNAME}
                        </Typography>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            className={classes.detailsContainer}
                        >
                    <span className={classes.value}>
                   Роботодавець:&nbsp;&nbsp;</span>
                            {item.COMPANYNAME}
                        </Typography>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            className={classes.detailsContainer}
                        >
                    <span className={classes.value}>
                   Обов"язки:&nbsp;&nbsp;</span>
                            <div
                                dangerouslySetInnerHTML={{__html: item.DESCRIPTION}}
                            />
                        </Typography>
                        {item.WORKCOND ? <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            className={classes.detailsContainer}
                        >
                    <span className={classes.value}>
                   Умови праці:&nbsp;&nbsp;</span>
                            {item.WORKCOND}
                        </Typography> : ''}
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            className={classes.detailsContainer}
                        >
                    <span className={classes.value}>
                   Заробітна плата(грн):&nbsp;&nbsp;</span>
                            {item.SALARY == 0 ? ("договірна") : item.SALARY}
                        </Typography>
                        {item.SALARYTXT ? <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            className={classes.detailsContainer}
                        >
                    <span className={classes.value}>
                   Умови оплати:&nbsp;&nbsp;</span>
                            {item.SALARYTXT}
                        </Typography> : ""}
                        {item.EMAIL ? <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            className={classes.detailsContainer}
                        >
                    <span className={classes.value}>
                   Email:&nbsp;&nbsp;</span>
                            {item.EMAIL === '' ? 'відсутній' : item.EMAIL}
                        </Typography> : ""}

                        <Typography variant="h4" sx={{mt: -1, fontWeight: 500}}>
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
                    <Col col={2}>
                        <ReactToPrint
                            trigger={() => <Button style={{border: "1px solid #625d5d", marginLeft: "45%"}}
                                                   startIcon={<FontAwesomeIcon icon={faPrint}/>}>Друкувати</Button>}
                            pageStyle='@page { size:auto; margin:10mm; } @media print {
html, body {
height: initial !important;
overflow: absolute !important;
-webkit-print-color-adjust: exact;
}
}'

                            content={() => componentRef.current}

                        />
                        <div style={{display: "none"}}><ComponentToPrint ref={componentRef} data={jobsModal}
                                                                         style={{display: "none"}}/></div>
                    </Col>
                </Box>

            </Modal>
        ))}
    </div>
);
}
