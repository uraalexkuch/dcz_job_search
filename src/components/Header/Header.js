import React, {Component} from 'react';
import "../jobFolder/about.css"
import logo from "../Img/logo_1.png"
import "./Header.css"
import {Col, Row} from "react-bootstrap";
import {Button, Paper} from "@mui/material";
import CardCarousel from "../jobFolder/Partner/CardCarousel";
import data from "bootstrap/js/src/dom/data";



export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:false,
                    };
        this.  changeView  = this.  changeView .bind(this);
    }
   changeView=async () => {

       this.setState(
       data=true)

        console.log("переключил")}
    render() {
        return (
            <>
                <Row style={{
                    // width: 'auto',
                    //marginTop:"-2%",
                    backgroundColor: "#FFD947",
                    width: 'auto',
                    // marginBottom: '2rem',
                    // marginLeft:'1rem',
                    //marginRight:"1rem",
                    display: 'flex',
                    gap: '1rem',
                }} sx={{mt: 10}}>
                    <Col style={{
                        backgroundColor: "#FFD947",
                        marginLeft: "1rem",
                        marginTop: "1rem",
                        paddingTop: "6%",
                        //zIndex: "1"
                    }}><Button elevation={24} onClick={this.changeView}>
                        <img
                        className="logo-img"
                        src={logo}
                        height="auto"
                        width="100"
                        alt="logo" style={{
                        marginLeft: "10%",
                        marginTop: "3%",
                        //zIndex: "1"
                        // marginRight:"2rem"
                    }}/>
                    </Button></Col>
                    <Col
                        style={{width: "75%"}}
                    ><h3 style={{
                        color: "#FFFFFF",
                        fontSize: "1.5rem",
                        fontWeight: "bolder",
                        paddingBottom: "1rem", marginTop: "12%", marginLeft: "2%",
                    }}>ДЕРЖАВНА СЛУЖБА ЗАЙНЯТОСТІ</h3>
                    </Col>
                    <Col col={4}
                        style={{marginTop: "2%"}}
                    ><CardCarousel/></Col>
                </Row>


                <Row style={{
                    //width: 'auto',
                    marginTop: "-2%",
                    // marginBottom: '2rem',
                    //marginLeft:'3rem',
                    //marginRight:"2rem",
                    display: 'flex',
                    gap: '1rem',
                }} sx={{mt: 10}}>
                    <Col className="lineabout col-3"/>
                    <Col className="portal col-auto text-center" style={{
                        paddingTop: "20px",
                        width: "80%",
                        marginLeft: "10px",
                        color: "#005BAA",
                    }}><h2>ЄДИНИЙ ПОРТАЛ ВАКАНСІЙ</h2></Col>
                    <Col className="lineabout col-3"/>
                </Row>
            </>


        )
    }
}
