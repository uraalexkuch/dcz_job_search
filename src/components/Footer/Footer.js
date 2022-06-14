import React, {Component} from 'react';
import "../Footer/footer.css"
import bot from "../Img/chatbot.png"
import job from "../Img/searchjob.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTelegram,faViber } from "@fortawesome/free-brands-svg-icons"
import { faFontAwesome} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import logo from "../Img/logo_1.png";
import Popover from "react-awesome-popover";
library.add(  faFontAwesome)

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                        <div className="flex flex-row flex-grow-1 ">
                            <div className="flex-item flex-grow-1 ">
                                    <div className="table-cell vat" style={{
                                        marginLeft: '2rem',
                                        paddingLeft: '2rem'
                                    }}>
                                        <div className="sitename">Державний центр зайнятості</div>
                                        <div className="address">
                                         e-mail:17@es.dcz.gov.ua
                                        </div>

                                </div>
                            </div>
                            <div className="table-cell vat" style={{
                                //marginLeft: '2rem',
                                marginRight: '1rem'
                            }}>
                                <div className="sitename">Наші ресурси:</div>
                                <div className="address">

                                    <a href="https://t.me/worknowdcz" title="">

                                        <Popover action="hover" placement="left">
                                        <img
                                        className="logo-img"
                                        src={job}
                                        height="auto"
                                        width="80"
                                        alt="logo" style={{

                                    }}/>
                                            <div style={{marginLeft:"6rem"}}>Робота зараз: Державна служба зайнятості</div>
                                        </Popover></a>
                                    <a href="https://t.me/+EMOeELVlILE2MWZi" title=""><FontAwesomeIcon icon={faTelegram} />Державна служба зайнятості</a>
                                    <a href="https://invite.viber.com/?g2=AQBsEJIHA824hE7mFTxmXPecRQwQDYWtsfdL0DVkBSe8Sycep0JxB8ALDDNPfXfV" title=""><FontAwesomeIcon icon={faViber} />"Державна служба зайнятості"</a>

                                </div>

                            </div>
                            <div className="table-cell vat" style={{
                                //marginLeft: '2rem',
                                marginRight: '2rem'
                            }}>

                                <div className="sitename">Онлайн-підтримка:</div>
                                <div className="address">
                                    <a href="https://t.me/@DCZ_worknow_bot" title="">
                                        <Popover action="hover" placement="left"><img
                                        className="logo-img"
                                        src={bot}
                                        height="auto"
                                        width="80"
                                        alt="logo" style={{

                                    }}/><div style={{marginLeft:"6rem"}}>Чат-бот</div>
                                        </Popover></a>
                                    <a href="https://t.me/DSZonline" title=""><FontAwesomeIcon icon={faTelegram}/>Державна служба зайнятості</a>
                                    <a href="https://www.facebook.com/zaniatist" title=""><FontAwesomeIcon icon={faFacebook}/>Державна служба зайнятості</a>
                                </div>
                            </div>

                    </div>
                    <div className="copyrights cy">
                        Copyright 2022 © Державний центр зайнятості
                    </div>
                </div>
            </footer>

    )
    }
    }
