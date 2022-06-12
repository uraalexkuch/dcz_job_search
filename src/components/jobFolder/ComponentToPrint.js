import React, {Component} from "react";
import Box from "@mui/material/Box";
import {Col, Row} from "react-bootstrap";
import logo from "../Img/logo_1.png";
import Typography from "@mui/material/Typography";
import HeaderPrint from "../Header/HeaderPrint";
import Footer from "../Footer/Footer";
import {Container} from "@mui/system";
import FooterPrint from "../Footer/FooterPrint";


export default class ComponentToPrint extends Component {
    constructor(props) {
        /// console.log(props.data)
        // console.log(props.data[0].COMPANYNAME)
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderPrint/>
                <Container style={{

                    position: 'absolute',
                   top: '50%',
                    left: '50%',

                    transform: 'translate(-50%, -50%)',
                    width: 600,
                    height: "auto",
                    backgroundColor: 'white',
                    //boxShadow: 24,
                    padding: '1rem',
                    // overflowY: 'scroll',
                    //  overflowX: 'hidden',
                  marginTop: "15%"
                }}>
                    <Row style={{
                        width: 'auto',
                        height: 'auto',
                        marginLeft: '1rem',
                        marginRight: "2rem",
                        display: 'flex',
                        //gap: '1rem',
                    }}>
                        <Col col={2} style={{marginLeft: "65%", fontWeight: "bold"}}>
                         <span style={{
                             paddingBottom:"2rem"
                         }}>  Вакансія від :</span>  <img className="logo-img"
                                 src={logo}
                                 height="auto"
                                 width="50rem"
                                 alt="logo" style={{}}

                            /></Col>
                    </Row>
                    <Box style={{
                        padding: '1.5rem',
                        border: "1px solid #625d5d",
                    }}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: 1, fontWeight: 600, fontSize: 20}}
                            style={{
                                color: "#005BAA",
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                marginTop:"-2rem"
                            }}
                        >
                            {this.props.data[0].VACNAME}
                        </Typography>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -2, fontWeight: 600, fontSize: 16}}
                            style={{padding: '1.5rem'}}
                        >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                        Місто:&nbsp;&nbsp;</span>
                            {this.props.data[0].CITYNAME}
                        </Typography>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            style={{padding: '1.5rem'}}
                        >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Роботодавець:&nbsp;&nbsp;</span>
                            {this.props.data[0].COMPANYNAME}
                        </Typography>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            style={{padding: '1.5rem'}}
                        >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Обов"язки:&nbsp;&nbsp;</span>
                            <div
                                dangerouslySetInnerHTML={{__html: this.props.data[0].DESCRIPTION}}
                            />
                        </Typography>
                        {this.props.data[0].WORKCOND ? <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            style={{padding: '1.5rem'}}
                        >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Умови праці:&nbsp;&nbsp;</span>
                            {this.props.data[0].WORKCOND}
                        </Typography> : ''}
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            style={{padding: '1.5rem'}}
                        >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Заробітна плата(грн):&nbsp;&nbsp;</span>
                            {this.props.data[0].SALARY == 0 ? ("договірна") : this.props.data[0].SALARY}
                        </Typography>
                        {this.props.data[0].SALARYTXT ? <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            style={{padding: '1.5rem'}}
                        >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Умови оплати:&nbsp;&nbsp;</span>
                            {this.props.data[0].SALARYTXT}
                        </Typography> : ""}
                        {this.props.data[0].EMAIL ? <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{mt: -6, fontWeight: 600, fontSize: 16}}
                            style={{padding: '1.5rem'}}
                        >
                        <span style={{
                            color: "#005BAA",
                            marginRight: '.5rem',
                            paddingRight: '.4rem',
                            fontWeight: "bold",
                        }}>
                       Email:&nbsp;&nbsp;</span>
                            {this.props.data[0].EMAIL === '' ? 'відсутній' : this.props.data[0].EMAIL}
                        </Typography> : ""}

                        <Typography variant="h4" sx={{mt: -1, fontWeight: 500}}>
                        <span style={{
                            fontWeight: "bold",
                            fontSize: '.8rem',
                            display: 'inline-block',
                        }}>
                          Галузь:&nbsp;&nbsp;
                            <span style={{
                                color: "#005BAA",
                                marginRight: '.5rem',
                                paddingRight: '.4rem',
                                fontWeight: "bold",
                            }}>
                              {this.props.data[0].BRANCHNAME.toUpperCase()}
                           </span>
                        </span>
                            <span style={{
                                fontWeight: "bold",
                                fontSize: '.8rem',
                                display: 'inline-block',
                            }}>
                          Дата та час розміщення:&nbsp;&nbsp;
                                <span style={{
                                    color: "#005BAA",
                                    marginRight: '.5rem',
                                    paddingRight: '.4rem',
                                    fontWeight: "bold",
                                }}>
                              {this.props.data[0].REG_DATE}
                           </span>
                        </span>
                        </Typography>
                    </Box>
                    <FooterPrint/>
                </Container>



            </div>
        )
    }
}
