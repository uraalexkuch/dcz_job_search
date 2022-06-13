import React, {Component} from 'react';
import "../Footer/footer.css"
import logo from "../Img/logo_1.png"
import { Container, Row} from "react-bootstrap";



export default class FooterPrint extends Component {
    render() {
        return (
            <footer className="footer" style={{height:"10%" , background: '#FFFFFF'}}>

                    <div className="copyrights cy">
                        Copyright 2022 © Державний центр зайнятості


                </div>
            </footer>

    )
    }
    }
