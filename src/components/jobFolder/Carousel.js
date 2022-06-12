import React from "react";
import Carousel from "react-material-ui-carousel";
import logo1 from "../Img/logo1.png";
import logo2 from "../Img/logo2.png";
import logo3 from "../Img/logo3.png";
import logo4 from "../Img/logo4.png";
import logo5 from "../Img/logo5.jpg";
import CarouselSlide from 'react-material-ui-carousel';
import {Card, CardContent, CardMedia, createMuiTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
const pictures = [
    { image: logo1, title: "Iu 1" },
    { image: logo2, title: "Iu 2" },
    { image: logo3, title: "Iu 3" },
    { image: logo4, title: "Iu 3" },
    { image: logo5, title: "Iu 3" },
];

const theme = createMuiTheme ({
    palette: {
        primary:{
            main:'#3c52b2'
        }
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
    },
}));


export default function CarouselJob () {
    const pictures = [
        { image: logo1, title: "Iu 1" },
        { image: logo2, title: "Iu 2" },
        { image: logo3, title: "Iu 3" },
        { image: logo4, title: "Iu 3" },
        { image: logo5, title: "Iu 3" },
    ];
    const classes = useStyles();
    const [index, setIndex] = React.useState(0);



    return (
        <div style={{
            position: "relative",
            //height: "100vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        }}>
            <Carousel>
                {pictures.map(({image, title}) => (
                    <CarouselSlide key={image}>
                        <Card  style={{
                            height: "200px",
                            width: "200px",
                            paddingTop: "80px",
                            textAlign: "center",
                            background: "#52C0F5",
                            color: "#FFF",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            textTransform: "uppercase",
                            borderRadius: "10px",
                            boxSizing: "border-box"

                            //marginTop:'10%'
                        }}>
                            <div >{image}</div>

                        </Card>
                    </CarouselSlide>
                ))}
            </Carousel>

        </div>
    );
}
