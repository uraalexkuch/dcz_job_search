import React, {Component} from 'react';
import "../Footer/footer.css"
import bot from "../Img/chatbot.png"
import job from "../Img/searchjob.png"
import fb from '../Img/fb.png'
import tg from '../Img/tg.png'
import viber from '../Img/viber.png'
import phone from '../Img/phone.png'
import email from '../Img/email.png'
import { faFontAwesome} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

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
                                    }}><div className="sitename">Наші контакти:</div>
                                        <div className="sitename1"><img
                                            className="logo-img"
                                            src={email}
                                            height="auto"
                                            width="25"
                                            alt="logo" style={{

                                        }}/>
                                            17@es.dcz.gov.ua
                                        </div>
                                        <div  className="sitename1"><img
                                            className="logo-img"
                                            src={phone}
                                            height="auto"
                                            width="25"
                                            alt="logo" />
                                            0800509966
                                        </div>
                                        <a href="https://t.me/+EMOeELVlILE2MWZi" title=""> <img
                                            className="logo-img"
                                            src={tg}
                                            height="auto"
                                            width="25"
                                            alt="logo" style={{

                                        }}/>Офіціний канал</a>
                                        <a href="https://invite.viber.com/?g2=AQBsEJIHA824hE7mFTxmXPecRQwQDYWtsfdL0DVkBSe8Sycep0JxB8ALDDNPfXfV" title=""><img
                                            className="logo-img"
                                            src={viber}
                                            height="auto"
                                            width="25"
                                            alt="logo" style={{

                                        }}/>Офіціний канал</a>
                                        <a href="https://www.facebook.com/zaniatist" title=""><img
                                            className="logo-img"
                                            src={fb}
                                            height="auto"
                                            width="25"
                                            alt="logo" />Офіційна сторінка</a>
                                </div>
                            </div>
                            <div className="table-cell vat" style={{
                                //marginLeft: '2rem',
                                marginRight: '1rem'
                            }}>
                                <div className="sitename2">Наші ресурси:</div>
                                <div className="address">
                                    <a href="https://t.me/worknowdcz" title="">

                                        <img
                                        className="logo-img"
                                        src={tg}
                                        height="auto"
                                        width="25"
                                        alt="logo" style={{
                                    }}/>Робота зараз: Державна служба зайнятості
                                        </a>
                                    <a href="https://t.me/worknowdcz" title="">

                                        <img
                                            className="logo-img"
                                            src={viber}
                                            height="auto"
                                            width="25"
                                            alt="logo" style={{
                                        }}/>Робота зараз: Державна служба зайнятості
                                    </a>
                                </div>
                            </div>
                            <div className="table-cell vat" style={{
                                //marginLeft: '2rem',
                                marginRight: '2rem'
                            }}>

                                <div className="sitename2">Онлайн-підтримка:</div>
                                <div className="address">
                                    <a href="https://t.me/@DCZ_worknow_bot" title="">
                                      <img
                                        className="logo-img"
                                        src={tg}
                                        height="auto"
                                        width="25"
                                        alt="logo" style={{
                                    }}/>Чат-бот
                                        </a>
                                    <a href="https://t.me/DSZonline" title=""><img
                                        className="logo-img"
                                        src={tg}
                                        height="auto"
                                        width="25"
                                        alt="logo" style={{
                                    }}/>Підтримка</a>

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
