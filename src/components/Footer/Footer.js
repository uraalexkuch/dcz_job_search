import React, {Component} from 'react';
import "../Footer/footer.css"
import fb from '../Img/fb.png'
import tg from '../Img/tg.png'
import viber from '../Img/viber.png'
import phone from '../Img/phone.png'
import email from '../Img/email.png'
import { faFontAwesome} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {Col, Container, Row} from "react-bootstrap";

library.add(  faFontAwesome)

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <Container  fluid>
                        <Row className="rowfooter" >
                                    <Col  className="footcol"   >
                                        <div className="sitename">Наші контакти:</div>
                                        <Row className="rowfooter">   <div className="sitename1"><img
                                            className="logo-img"
                                            src={email}
                                            height="auto"
                                            width="25"
                                            alt="logo" style={{

                                        }}/>

                                        </div><span style={{
                                            marginTop:"1rem", marginLeft:"1rem",
                                        }}>17@es.dcz.gov.ua</span></Row>
                                        <Row className="rowfooter">  <div  className="sitename1"><img
                                            className="logo-img"
                                            src={phone}
                                            height="auto"
                                            width="25"
                                            alt="logo" />

                                        </div><span style={{
                                            marginTop:"1rem", marginLeft:"1rem",
                                        }}>0800337020</span></Row>
                                       <Row className="rowfooter"> <a href="https://t.me/+EMOeELVlILE2MWZi" title="">
                                           <img
                                            className="logo-img"
                                            src={tg}
                                            height="auto"
                                            width="25"
                                            alt="logo" style={{
                                        }}/> </a><span style={{
                                           marginLeft:".5rem"
                                       }}></span>
                                        <a href="https://is.gd/14o78K" title=""><img
                                            className="logo-img"
                                            src={viber}
                                            height="auto"
                                            width="25"
                                            alt="logo" style={{
                                        }}/></a><span style={{
                                               marginLeft:".5rem"
                                           }}></span>
                                           <a href="https://www.facebook.com/zaniatist" title=""><img
                                               className="logo-img"
                                               src={fb}
                                               height="auto"
                                               width="25"
                                               alt="logo" /></a></Row>

                            </Col>
                            <Col  className="footcol"  >
                                <div className="sitename">Наші ресурси:</div>
                                <div className="address">
                                    <Row className="rowfooter">  <a href="https://t.me/worknowdcz" title="">

                                        <img
                                        className="logo-img"
                                        src={tg}
                                        height="auto"
                                        width="25"
                                        alt="logo" style={{
                                    }}/>
                                        </a><span style={{
                                       marginLeft:".5rem"
                                    }}></span>
                                    <a href="https://is.gd/14o78K" title="">
                                        <img
                                            className="logo-img"
                                            src={viber}
                                            height="auto"
                                            width="25"
                                            alt="logo" style={{
                                        }}/>
                                    </a><span style={{
                                            marginTop:"1rem",marginLeft:"1rem"
                                        }}>Робота зараз: ДСЗ</span>
                                        </Row>
                                </div>
                            </Col>
                            <Col className="footcol" >

                                <div className="sitename2">Онлайн-підтримка:</div>
                                <div className="address">
                                    <Row className="rowfooter">     <a href="https://t.me/@DCZ_worknow_bot" title="">
                                      <img
                                        className="logo-img"
                                        src={tg}
                                        height="auto"
                                        width="25"
                                        alt="logo" style={{
                                    }}/>
                                        </a><span style={{
                                    marginTop:"1rem", marginLeft:"1rem",
                                }}>Чат-бот</span></Row>


                                </div>
                            </Col>

                    </Row>
                    <div className="copyrights cy">
                        Copyright 2022 © Державний центр зайнятості
                    </div>
                </Container>
            </footer>

    )
    }
    }
