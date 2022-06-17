import React, {Component} from 'react';
import "../jobFolder/about.css"
import logo from "../Img/logo_1.png"
import "./Header.css"
import {Col, Row} from "react-bootstrap"; class HeaderPrint{
    render() {
        return (
            <>
                <Row style={{
                    // width: 'auto',
                    //marginTop:"-2%",
                    backgroundColor: "#FFD947",
                    width: 'auto',
                    // marginBottom: '2rem',
                    height:'5%',
                    marginLeft:'.5rem',
                    marginRight:".5rem",
                    marginTop:".5rem",
                    display: 'flex',
                    //gap: '1rem',
                }} sx={{mt: 10}}>
                    <Col style={{
                        backgroundColor: "#FFD947",
                        marginLeft: "1rem",
                        marginTop: "1rem",
                        paddingTop: "6%",
                        //zIndex: "1"
                    }}>
                        <img
                        className="logo-img"
                        src={logo}
                        height="auto"
                        width="50"
                        alt="logo" style={{
                        marginLeft: "10%",
                        marginTop: "3%",
                        //zIndex: "1"
                        // marginRight:"2rem"
                    }}/>
                    </Col>
                    <Col
                        style={{width: "100%"}}
                    ><h3 style={{
                        color: "#FFFFFF",
                        fontSize: "1.2rem",
                        fontWeight: "bolder",
                        paddingBottom: "1rem", marginTop: "12%", marginLeft: "2%",
                    }}>ДЕРЖАВНА СЛУЖБА ЗАЙНЯТОСТІ</h3>
                    </Col>

                </Row>


                <Row style={{
                    //width: 'auto',
                    marginTop: "-5%",
                    // marginBottom: '2rem',
                    marginLeft:'.5rem',
                    marginRight:".5rem",
                    display: 'flex',
                    gap: '1rem',
                }} sx={{mt: 10}}>
                    <Col className="lineabout col-2"/>
                    <Col className="portal col-auto text-center" style={{
                        paddingTop: "20px",
                        width: "100%",
                        marginLeft: "10px",
                        color: "#005BAA",
                    }}><h4>ЄДИНИЙ ПОРТАЛ ВАКАНСІЙ</h4></Col>
                    <Col className="lineabout col-2"/>
                </Row>
            </>


        )
    }
}
export default class HeaderPrint extends Component {
    render() {
        return (
            <>
                <Row style={{
                    // width: 'auto',
                    //marginTop:"-2%",
                    backgroundColor: "#FFD947",
                    width: 'auto',
                    // marginBottom: '2rem',
                    height:'5%',
                    marginLeft:'.5rem',
                    marginRight:".5rem",
                    marginTop:".5rem",
                    display: 'flex',
                    //gap: '1rem',
                }} sx={{mt: 10}}>
                    <Col style={{
                        backgroundColor: "#FFD947",
                        marginLeft: "1rem",
                        marginTop: "1rem",
                        paddingTop: "6%",
                        //zIndex: "1"
                    }}>
                        <img
                        className="logo-img"
                        src={logo}
                        height="auto"
                        width="50"
                        alt="logo" style={{
                        marginLeft: "10%",
                        marginTop: "3%",
                        //zIndex: "1"
                        // marginRight:"2rem"
                    }}/>
                    </Col>
                    <Col
                        style={{width: "100%"}}
                    ><h3 style={{
                        color: "#FFFFFF",
                        fontSize: "1.2rem",
                        fontWeight: "bolder",
                        paddingBottom: "1rem", marginTop: "12%", marginLeft: "2%",
                    }}>ДЕРЖАВНА СЛУЖБА ЗАЙНЯТОСТІ</h3>
                    </Col>

                </Row>


                <Row style={{
                    //width: 'auto',
                    marginTop: "-5%",
                    // marginBottom: '2rem',
                    marginLeft:'.5rem',
                    marginRight:".5rem",
                    display: 'flex',
                    gap: '1rem',
                }} sx={{mt: 10}}>
                    <Col className="lineabout col-2"/>
                    <Col className="portal col-auto text-center" style={{
                        paddingTop: "20px",
                        width: "100%",
                        marginLeft: "10px",
                        color: "#005BAA",
                    }}><h4>ЄДИНИЙ ПОРТАЛ ВАКАНСІЙ</h4></Col>
                    <Col className="lineabout col-2"/>
                </Row>
            </>


        )
    }
}
