import React, {Component} from "react";
import Box from "@mui/material/Box";
import {Col, Row} from "react-bootstrap";
import logo from "../Img/logo_1.png";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/system";
import FooterPrint from "../Footer/FooterPrint";
import logo1 from "../../components/Img/grc_ua_logo.png";
import logo2 from "../../components/Img/work.png";
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
                        backgroundColor: "#FFD947",
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
                            backgroundColor: "#FFD947",
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
                        }}>ДЕРЖАВНА СЛУЖБА ЗАЙНЯТОСТІ</h3>
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
                         }}>  Вакансія від :   </span>
                            <img className="logo-img"
                                 src={this.props.data[0].SOURCE == 'dcz' ? logo6 : this.props.data[0].SOURCE == 'grc.ua' ? logo1 : this.props.data[0].SOURCE == 'work.ua' ? logo2 : logo6}
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

                            color: "#005BAA",
                        }}><h4 style={{fontSize: "1rem"}}>ЄДИНИЙ ПОРТАЛ ВАКАНСІЙ</h4></Col>
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
                                    color: "#005BAA",
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                    marginTop: "2rem",
                                    pageBreakInside: 'auto',
                                }}
                            >
                                {this.props.data[0].VACNAME}
                            </Typography>
                        </Col>
                        <Col style={{width: '25%',}}>
                            <QRCode
                                size={256}
                                style={{height: "auto", maxWidth: "80%", width: "auto"}}
                                value={this.props.data[0].VACURL}
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
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                            pageBreakInside: 'auto',
                        }}>
                        Місто:&nbsp;&nbsp;</span>
                        {this.props.data[0].CITYNAME}
                    </Typography>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                            pageBreakInside: 'auto',
                        }}>
                       Роботодавець:&nbsp;&nbsp;</span>
                        {this.props.data[0].COMPANYNAME}
                    </Typography>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem', }}
                    >
                        <span style={{
                            color: "#005BAA",
                            flexWrap: "wrap",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            pageBreakInside: 'auto',
                            fontWeight: "bold",
                        }}>
                       Обов"язки:&nbsp;&nbsp;</span>
                        <div
                            dangerouslySetInnerHTML={{__html: this.props.data[0].DESCRIPTION}}
                        />
                    </Typography>
                    {this.props.data[0].WORKCOND ? <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Умови праці:&nbsp;&nbsp;</span>
                        {this.props.data[0].WORKCOND}
                    </Typography> : ''}
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                            pageBreakInside: 'auto',
                        }}>
                       Заробітна плата(грн):&nbsp;&nbsp;</span>
                        {this.props.data[0].SALARY == 0 ? ("договірна") : this.props.data[0].SALARY}
                    </Typography>
                    {this.props.data[0].SALARYTXT ? <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Умови оплати:&nbsp;&nbsp;</span>
                        {this.props.data[0].SALARYTXT}
                    </Typography> : ""}
                    {this.props.data[0].EMAIL ? <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h4"
                        sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                        style={{padding: '1.5rem'}}
                    >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Email:&nbsp;&nbsp;</span>
                        {this.props.data[0].EMAIL === '' ? 'відсутній' : this.props.data[0].EMAIL}
                    </Typography> : ""}

                    <Typography variant="h4" sx={{mt: -1, fontWeight: 500}}>
                        <span style={{
                            fontWeight: "bold",
                            fontSize: '.8rem',
                            display: 'inline-block',
                        }}>
                          Галузь:&nbsp;&nbsp;
                            <span style={{
                                color: "#005BAA",
                                marginRight: '.5rem',
                                paddingRight: '.4rem',
                                fontWeight: "bold",
                            }}>
                              {this.props.data[0].BRANCHNAME.toUpperCase()}
                           </span>
                        </span>
                        <span style={{
                            fontWeight: "bold",
                            fontSize: '.8rem',
                            display: 'inline-block',
                        }}>
                          Дата та час розміщення:&nbsp;&nbsp;
                            <span style={{
                                color: "#005BAA",
                                marginRight: '.5rem',
                                paddingRight: '.4rem',
                                fontWeight: "bold",
                            }}>
                              {this.props.data[0].REG_DATE}
                           </span>
                        </span>
                    </Typography>
                    <Col className="lineabout col-2"/>
                    <p style={{
                        fontSize:".8rem",
                        color: "#070707",
                        marginRight: '.5rem',
                        paddingRight: '.4rem',
                        fontWeight: "bold",
                    }}> Copyright 2022 © Державний центр зайнятості</p>
                </Box>

            </Container>


        )
    }
}
