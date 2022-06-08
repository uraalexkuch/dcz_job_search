import React, {Component} from 'react';
import "../jobFolder/about.css"
import logo from "../Img/logo_1.png"
import "./Header.css"
import {Col, Row} from "react-bootstrap";



export default class Header extends Component {
    render() {
        return (
<>
    <Row style={{
       // width: 'auto',
        //marginTop:"-2%",
        backgroundColor:"#f6c547",
        width: '100%',
        // marginBottom: '2rem',
       // marginLeft:'1rem',
      marginRight:"1rem",
        display: 'flex',
        gap: '1rem',
    }} sx={{ mt: 10 }}>
    <Col style={{
        backgroundColor:"#f6c547",
        marginLeft:"1rem",
        marginTop:"1rem",
        paddingTop:"6%",
        //zIndex: "1"
    }}><img className="logo-img"
            src={logo}
            height="auto"
            width="100"
            alt="logo" style={{
        marginLeft:"10%",
        marginTop:"3%",
        //zIndex: "1"
        // marginRight:"2rem"
    }}

    /> </Col>
        <Col
            style={{width:"100%"}}
       ><h3 style={{
           color:"#FFFFFF",
           fontSize:"1.5rem",
           fontWeight:"bolder",
           paddingBottom:"1rem", marginTop:"12%", marginLeft:"2%",
       }}>ДЕРЖАВНА СЛУЖБА ЗАЙНЯТОСТІ</h3>
    </Col>
    </Row>




    <Row style={{
        width: 'auto',
        marginTop:"-2%",
       // marginBottom: '2rem',
        //marginLeft:'3rem',
       //marginRight:"2rem",
        display: 'flex',
        //gap: '1rem',
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
