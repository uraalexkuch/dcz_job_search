import React, {Component} from "react";
import Box from "@mui/material/Box";
import {Col, Row} from "react-bootstrap";
import logo from "../Img/logo_1.png";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/system";
import logo1 from "../../components/Img/grc_ua_logo.png";
import logo2 from "../../components/Img/work.png";
import logo3 from "../../components/Img/robota.png"
import logo4 from "../../components/Img/jooble.png"
import logo5 from "../../components/Img/pidbir.png"
import logo6 from "../../components/Img/logo_1.png"
import QRCode from "react-qr-code";
import "../jobFolder/about.css"

import "../Header/Header.css"



export default class ComponentToPrint extends Component {
    constructor(props) {

        super(props);
    }

    render() {
        return (
            <Container style={{
                //border: "1px solid #625d5d",
                position: 'absolute',
                top: '35%',
                left: '45%',
                transform: 'translate(-50%, -50%)',
                width: '210mm',
                height: '297mm',
                margin: '10mm',
                overflow: "absolute!important",
                backgroundColor: 'white',
                pageBreakInside: 'auto',
                //boxShadow: 24,
                //overflowY: 'scroll',
                //overflowX: 'hidden',
                marginTop: "20%"
            }}>
                <>
                    <Row style={{
                        // width: 'auto',
                        //marginTop:"-2%",
                        backgroundColor: "#fec248",
                        width: 'auto',
                        // marginBottom: '2rem',
                        height: 'auto',
                        marginLeft: '.5rem',
                        marginRight: ".5rem",
                        //marginTop:"1rem",
                        display: 'flex',
                        //gap: '1rem',
                    }} sx={{mt: 10}}>
                        <Col style={{
                            backgroundColor: "#fec248",
                            marginLeft: "1rem",
                            marginTop: "2rem",
                            // paddingTop: "6%",
                            //zIndex: "1"
                        }}>
                            <img
                                className="logo-img"
                                src={logo}
                                height="auto"
                                width="50"
                                alt="logo" style={{
                                marginLeft: "10%",
                                marginTop: "3%",
                                //zIndex: "1"
                                // marginRight:"2rem"
                            }}/>
                        </Col>
                        <Col
                            //style={{width: "30%"}}
                        ><h3 style={{
                            color: "#070707",
                            fontSize: "1.2rem",
                            fontWeight: "bolder",
                            paddingBottom: "1rem", marginTop: "12%", marginLeft: "3%",
                        }}>???????????????? ???????????? ????????????????????</h3>
                        </Col>
                        <Col style={{
                            marginLeft: "10%",
                            marginTop: "2rem",
                            fontWeight: "bold"
                        }}>
                         <span style={{
                             marginBottom: "5rem",
                             marginRight: "2rem",
                             textAlign: "center"
                         }}>  ???????????????? ?????? :   </span>
                            <img className="logo-img"
                                 src={this.props.data[0].source === 'dcz' ? logo6 : this.props.data[0].source === 'grc.ua' ? logo1 : this.props.data[0].source === 'work.ua'? logo2 : this.props.data[0].source === 'rabota.ua' ?
                                     logo3: this.props.data[0].source === 'jooble'?logo4: this.props.data[0].source === 'pidbir.com'?logo5: logo6}
                                 height="auto"
                                 width="50rem"

                                 alt="logo"

                            /></Col>
                    </Row>

                    <Row style={{
                        //width: 'auto',
                        marginTop: "-3%",
                        // marginBottom: '2rem',
                        marginLeft: '.5rem',
                        marginRight: ".5rem",
                        display: 'flex',
                        gap: '1rem',
                    }} sx={{mt: 10}}>
                        <Col className="lineabout col-2"/>
                        <Col className="portal col-auto text-center" style={{
                            paddingTop: "20px",
                            width: "100%",
                            marginLeft: "10px",

                            color: "#1b285f",
                        }}><h4 style={{fontSize: "1rem"}}>???????????? ???????????? ????????????????</h4></Col>
                        <Col className="lineabout col-2"/>
                    </Row>
                </>

                <Box style={{
                    marginTop: "-2%",
                    marginBottom: "1rem",
                    padding: '.5rem',
                    margin: '.5rem',
                    border: "1px solid #625d5d",
                }}>
                    <Row style={{
                        width: '100%',
                        height: '10%',
                        marginLeft: '1rem',
                        marginRight: "1rem",
                        display: 'flex',
                        //gap: '1rem',
                    }}>
                        <Col style={{width: "100%"}}>
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h4"
                                sx={{mt: 1, fontWeight: 600, fontSize: 20}}
                                style={{
                                    color: "#1b285f",
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                    marginTop: "2rem",
                                    pageBreakInside: 'auto',
                                }}
                            >
                                {this.props.data[0].vacname}
                            </Typography>
                        </Col>
                        <Col style={{width: '25%',}}>
                            <QRCode
                                size={256}
                                style={{height: "auto", maxWidth: "80%", width: "auto"}}
                                value={this.props.data[0].vac_url}
                                viewBox={`0 0 256 256`}
                            />
                        </Col></Row>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -2, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#1b285f",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                            pageBreakInside: 'auto',
                        }}>
                        ??????????:&nbsp;&nbsp;</span>
                        {this.props.data[0].cityname}
                    </Typography>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#1b285f",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                            pageBreakInside: 'auto',
                        }}>
                       ????????????????????????:&nbsp;&nbsp;</span>
                        {this.props.data[0].companyname}
                    </Typography>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem', }}
                    >
                        <span style={{
                            color: "#1b285f",
                            flexWrap: "wrap",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            pageBreakInside: 'auto',
                            fontWeight: "bold",
                        }}>
                       ????????"????????:&nbsp;&nbsp;</span>
                        <div
                            dangerouslySetInnerHTML={{__html: this.props.data[0].description}}
                        />
                    </Typography>
                    {this.props.data[0].workcond ? <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#1b285f",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       ?????????? ??????????:&nbsp;&nbsp;</span>
                        {this.props.data[0].workcond}
                    </Typography> : ''}
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#1b285f",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                            pageBreakInside: 'auto',
                        }}>
                       ?????????????????? ??????????(??????):&nbsp;&nbsp;</span>
                        {this.props.data[0].salary === 0 ? ("??????????????????") : this.props.data[0].salary}
                    </Typography>
                    {this.props.data[0].salarytxt ? <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#1b285f",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       ?????????? ????????????:&nbsp;&nbsp;</span>
                        {this.props.data[0].salarytxt}
                    </Typography> : ""}
                    {this.props.data[0].contact ? <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#1b285f",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Email:&nbsp;&nbsp;</span>
                        {this.props.data[0].contact === '' ? '??????????????????' : this.props.data[0].contact}
                    </Typography> : ""}

                    <Typography variant="h4" sx={{mt: -1, fontWeight: 500}}>
                        <span style={{
                            fontWeight: "bold",
                            fontSize: '.8rem',
                            display: 'inline-block',
                        }}>
                          ????????????:&nbsp;&nbsp;
                            <span style={{
                                color: "#1b285f",
                                marginRight: '.5rem',
                                paddingRight: '.4rem',
                                fontWeight: "bold",
                            }}>
                              {this.props.data[0].branchnname.toUpperCase()}
                           </span>
                        </span>
                        <span style={{
                            fontWeight: "bold",
                            fontSize: '.8rem',
                            display: 'inline-block',
                        }}>
                          ???????? ???? ?????? ????????????????????:&nbsp;&nbsp;
                            <span style={{
                                color: "#1b285f",
                                marginRight: '.5rem',
                                paddingRight: '.4rem',
                                fontWeight: "bold",
                            }}>
                              {this.props.data[0].reg_date}
                           </span>
                        </span>
                    </Typography>
                    <Col className="lineabout col-2"/>
                    <p style={{
                        fontSize:".8rem",
                        color: "#1b285f",
                        marginRight: '.5rem',
                        paddingRight: '.4rem',
                        fontWeight: "bold",
                    }}> Copyright 2022 ?? ?????????????????? ?????????? ????????????????????</p>
                </Box>

            </Container>


        )
    }
}
