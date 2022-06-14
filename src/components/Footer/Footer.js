import React, {Component} from 'react';
import "../Footer/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  solid, regular,brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import { faFacebook,faTelegram,faViber } from "@fortawesome/free-brands-svg-icons"

import {faCoffee, faFontAwesome} from "@fortawesome/free-solid-svg-icons";
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
                                    <a href="https://t.me/worknowdcz" title=""><FontAwesomeIcon icon={faTelegram} />Робота зараз: Державна служба зайнятості</a>
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
                                    <a href="https://t.me/@DCZ_worknow_bot" title=""><FontAwesomeIcon icon={faTelegram}/>Чат-бот </a>
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
