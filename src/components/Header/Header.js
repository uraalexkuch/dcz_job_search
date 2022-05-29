import React, {Component} from 'react';

import logo from "../Img/logo_1.png"
import "./Header.css"
import {Row} from "react-bootstrap";



export default class Header extends Component {
    render() {
        return (
<>
               <Row style={{
                   width:"10%"
               }}>
                   <img className="logo-img"
                        src={logo}
                        height="auto"
                        width="100"
                        alt="logo" style={{
                      marginLeft:"50%",
                      // marginRight:"2rem"
                   }}

                /></Row>

                    <div className="hero-text text-center col-auto">
                        Державний центр зайнятості
                    </div>
</>



)
    }
}
