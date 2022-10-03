import React, {Component} from 'react';
import "../Footer/footer.css"
import fb from '../Img/fb.png'
import tg from '../Img/tg.png'

import phone from '../Img/phone.png'
import email from '../Img/email.png'
import { faFontAwesome} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "@mui/material";
import {theme} from "../../CustomTheme";

library.add(  faFontAwesome)

export default function  Footer() {
 const Mailto = ({ email,}) => {
        return <a href={`mailto:${email}`}>{children}</a>;
    };

        return (
            <footer className="footer">
                <Container  fluid>
                        <Row className="rowfooter" >
                                    <Col  className="footcol"   >
                                        <div className="sitename">Наші контакти:</div>
                                        <Row className="rowfooter">
                                            <div  className="sitename1"><img
                                                className="logo-img"
                                                src={phone}
                                                height="auto"
                                                width="25"
                                                alt="logo" />
                                            </div>
                                            <span style={{
                                                marginTop:".5rem", marginLeft:"1rem",
                                            }}>0 800 337 020</span>
                                        </Row>
                                        <Row>
                                        <div className="rowfooter">
                                            <div className="sitename1">

                                                <Link href={`mailto:${'17@es.dcz.gov.ua'}`} target="_blank" rel="noopener noreferrer">    <img
                                            className="logo-img"
                                            src={email}
                                            height="auto"
                                            width="25"
                                            alt="logo" style={{
                                                }}/></Link>
                                        </div> <span style={{
                                            marginLeft:"1rem"
                                        }}></span>
                                            <div className="rowfooter"> <div className="sitename1">
                                            <a href="https://t.me/DSZonline" title="">
                                                <img
                                                    className="logo-img"
                                                    src={tg}
                                                    height="auto"
                                                    width="25"
                                                    alt="logo" style={{
                                                }}/>
                                            </a>
                                            <span style={{
                                                marginLeft:".5rem"
                                            }}></span>
                                            <span style={{
                                                marginLeft:".5rem"
                                            }}></span>
                                            <a href="https://www.facebook.com/zaniatist" title="">
                                                <img
                                                    className="logo-img"
                                                    src={fb}
                                                    height="auto"
                                                    width="25"
                                                    alt="logo" /></a>
                                        </div>
                                            </div>
                                        </div>
                                        </Row>
                                        <Row className="rowfooter">     <a href="https://t.me/DCZWorkNowBbot" title="">
                                            <img
                                                className="logo-img"
                                                src={tg}
                                                height="auto"
                                                width="25"
                                                alt="logo" />
                                        </a>
                                            <span  style={{
                                            marginTop:".5rem", marginLeft:"1rem",
                                            [theme.breakpoints.down('md')]: {
                                                marginTop:".5rem",
                                            }, [theme.breakpoints.down('sm')]: {
                                                marginTop:".5rem",
                                            }
                                        }}>Чат-бот</span></Row>
                            </Col>



                    </Row>
                    <div className="copyrights cy">
                        Copyright 2022 © Державний центр зайнятості
                    </div>
                </Container>
            </footer>
    )
    }

