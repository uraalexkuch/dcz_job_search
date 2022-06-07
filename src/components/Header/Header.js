import React, {Component} from 'react';
import "../jobFolder/about.css"
import logo from "../Img/logo_1.png"
import "./Header.css"
import {Col, Container, Row} from "react-bootstrap";



export default class Header extends Component {
    render() {
        return (
<>
    <Row style={{
        backgroundColor:"#f6c547",
        width: '100%',
        marginTop:"1rem",
        paddingTop:"6%",
        zIndex: "1"
    }}>
       <div style={{
           marginLeft:"20%"
       }}><h3 style={{
           color:"#FFFFFF",
           fontSize:"1.5rem",
           fontWeight:"bolder",
           paddingBottom:"1rem"
       }}>ДЕРЖАВНА СЛУЖБА ЗАЙНЯТОСТІ</h3></div>
    </Row>

    <Row style={{
        width: 'auto',
        //backgroundColor:"#FFD947",
        marginLeft:'2rem',
        marginRight:"2rem",
marginTop:"-9%",
        display: 'flex',
        gap: '1rem',
        zIndex: "6"
    }} sx={{ mt: 10 }}>
                   <img className="logo-img"
                        src={logo}
                        height="auto"
                        width="100"
                        alt="logo" style={{
                      marginLeft:"5%",
                       marginTop:"5%",
                       zIndex: "1"
                      // marginRight:"2rem"
                   }}

                /> </Row>



    <Row style={{
        width: 'auto',
        marginTop:"-7%",
       // marginBottom: '2rem',
        marginLeft:'2rem',
        marginRight:"2rem",
        display: 'flex',
        gap: '1rem',
    }} sx={{ mt: 10 }}>
        <Col className="lineabout"  />
        <Col className="portal" style={{paddingTop:"20px",
            marginLeft:"10px",
            color: "#005BAA",
        }}><h2>ЄДИНИЙ ПОРТАЛ ВАКАНСІЙ</h2></Col>
        <Col className="lineabout"  />
    </Row>
</>



)
    }
}
