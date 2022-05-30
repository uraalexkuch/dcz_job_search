import React, {Component} from 'react';
import "../Footer/footer.css"
import logo from "../Img/logo_1.png"
import { Container, Row} from "react-bootstrap";



export default class Footer extends Component {
    render() {
        return (
            <footer style={{
                borderTop:" 20px #FFD947 solid",
                marginRight:'1rem',
                marginLeft:"1rem"
            }}>
                <Container>

                    <Row className="row">
                        <div className="col-m-3 footer-item" style={{
                            marginLeft:"2rem",
                            marginRight:"2rem"
                        }}>
                            <div> <img className="logo-img"
                                       src={logo}
                                       height="auto"
                                       width="100"
                                       alt="logo" style={{
                                marginLeft:"2rem",
                                marginRight:"2rem"
                            }}
                            /></div> <br/>
                            <h4>Державний центр зайнятості</h4>
                            <p>
                                м.Київ, 01601, вул.Еспланадна, 8/10 e-mail:17@es.dcz.gov.ua,
                                <p><p> Наш Телеграм</p></p>
                                <a
                                    rel="nofollow"
                                    href="https://t.me/+EMOeELVlILE2MWZi"
                                    target="_blank">Telegram</a>
</p><p>
                                <a href="https://goo.gl/cUoVjg" target="_blank">(переглянути на карті)</a>
                            </p>

                        </div>


                    </Row>
                    <div style={{
                        marginRight:"45%",
                        marginLeft:"3%",
                        marginTop:"3rem",
                        color:"#FFD947",
                        fontSize:"0.8rem",

                    }}>Product of Yuriy Kucherenko@2022</div>
                </Container>
            </footer>

        );
    }
}
