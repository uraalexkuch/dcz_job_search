import React, {Component} from 'react';
import "../Footer/footer.css"
import logo from "../Img/logo_1.png"
import { Container, Row} from "react-bootstrap";



export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="flex footer-cols mob-block">
                        <div className="flex flex-row flex-1 mob-block">
                            <div className="flex-item flex-1 mob-block">
                                <div className="table">
                                    <div className="table-cell vat">
                                        <a className="logo" href="/" title="Головна">
                                            <img
                                                className="img-responsive"
                                                 src="https://www.dcz.gov.ua/sites/default/files/logo_1.png"/>
                                        </a>
                                    </div>
                                    <div className="table-cell vat">
                                        <div className="sitename">Державний центр зайнятості</div>
                                        <div className="descr"></div>
                                        <div className="address">
                                            м.Київ, 01601, вул.Еспланадна, 8/10 <p>e-mail:17@es.dcz.gov.ua</p>
                                            Telegram:​https://t.me/+EMOeELVlILE2MWZi
                                        </div>
                                        <div className="on-map">
                                            <a href="https://goo.gl/cUoVjg" target="_blank">(переглянути на карті)</a>
                                        </div>
                                        <row className="social">
                                            <a href="https://www.facebook.com/zaniatist"
                                               target="_blank">Facebook</a> &nbsp; / &nbsp; <a
                                            href="https://www.youtube.com/channel/UCzchYdwO8nMJ3I21f089unw"
                                            target="_blank">YouTube</a></row>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-item flex-1  links-block mob-block">
                                <nav role="navigation">
                                    <ul className="block-content">
                                        <li  className="field-content"><a href="https://www.dcz.gov.ua/help" title="">Поширені запитання
                                            громадян</a></li>
                                        <li  className="field-content"><a href="https://www.dcz.gov.ua//storinka/poslugy-0" title="">Корисна інформація
                                            для населення</a></li>
                                        <li  className="field-content"><a href="https://www.dcz.gov.ua//storinka/vidkryty-vlasnu-spravu" title="">Відкрити
                                            власну справу</a></li>
                                        <li  className="field-content"><a href="https://www.dcz.gov.ua//storinka/poslugy" title="">Роз'яснення щодо
                                            надання послуг роботодавцям</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex-item flex-1 links-block mob-block">
                                <div className="block-title">Державні інформаційні ресурси</div>
                                <div className="block-content">
                                    <div
                                        className="view view-links view-id-links view-display-id-block view-dom-id-12bd96f1784bdbb57fcc65aca36ed815">
                                        <div className="view-content">
                                            <div className="views-row views-row-1 views-row-odd views-row-first">
                                                <div className="views-field views-field-title"><span
                                                    className="field-content"><a href="http://www.president.gov.ua"
                                                                                 target="_blank">Президент України</a></span>
                                                </div>
                                            </div>
                                            <div className="views-row views-row-2 views-row-even">

                                                <div className="views-field views-field-title"><span
                                                    className="field-content"><a href="https://nazk.gov.ua/uk/"
                                                                                 target="_blank">Національне агентство з питань запобігання корупції</a></span>
                                                </div>
                                            </div>
                                            <div className="views-row views-row-3 views-row-odd">

                                                <div className="views-field views-field-title"><span
                                                    className="field-content"><a href="http://nads.gov.ua"
                                                                                 target="_blank">Національне агентство України з питань  державної служби</a></span>
                                                </div>
                                            </div>
                                            <div className="views-row views-row-4 views-row-even">

                                                <div className="views-field views-field-title"><span
                                                    className="field-content"><a href="http://rada.gov.ua"
                                                                                 target="_blank">Верховна Рада України</a></span>
                                                </div>
                                            </div>
                                            <div className="views-row views-row-5 views-row-odd views-row-last">

                                                <div className="views-field views-field-title"><span
                                                    className="field-content"><a href="https://association4u.in.ua/"
                                                                                 target="_blank">Урядова компанія EUКраїна</a></span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="more"><a href="/links">...</a></div>
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
