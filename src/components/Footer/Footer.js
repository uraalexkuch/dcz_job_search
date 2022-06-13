import React, {Component} from 'react';
import "../Footer/footer.css"
import logo from "../Img/logo_1.png"
import { Container, Row} from "react-bootstrap";



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
                                            м.Київ, 01601, вул.Еспланадна, 8/10 <p>e-mail:17@es.dcz.gov.ua</p>
                                        </div>

                                </div>
                            </div>
                            <div className="table-cell vat" style={{
                                //marginLeft: '2rem',
                                marginRight: '1rem'
                            }}>
                                <div className="sitename">Telegram ресурси:</div>
                                <div className="address">
                                    <a href="https://t.me/worknowdcz" title="">"Робота зараз: Державна служба зайнятості"</a>
                                    <a href="https://t.me/DSZonline" title="">"Онлайн-підтримка Державної служби зайнятості"</a>
                                    <a href="https://t.me/+EMOeELVlILE2MWZi" title="">"Державна служба зайнятості"</a>
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
