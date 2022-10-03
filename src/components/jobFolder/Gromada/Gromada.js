import React, {useContext, useState} from 'react';
import Select from 'react-select';
import dataCodif from "../../../data/cod.json";

import {JobsContext} from "../JobsContext";
import {makeStyles} from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    container: {
        width: 'max(85%)',
        margin: 'auto',
        display: 'flex',
        borderRadius: "25 px 25 px",
        gap: '1rem',
        [theme.breakpoints.down('lg')]: {
            width: 'max(85%)',
        },
        [theme.breakpoints.down('md')]: {
            width: 'max(90%)',
        }
    },
    containertwo: {
        width: 'auto',
        marginTop: '2rem',
        marginLeft: '2rem',
        marginRight: "2rem",
        display: 'flex',
        gap: '1rem',
        [theme.breakpoints.down('lg')]: {
            width: 'max(85%)',
        },
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap',
            width: 'max(90%)',
            marginLeft: 0,
            marginTop: '1rem',
        }
    },
    warning: {
        color: "#005BAA",
        marginRight: '.5rem',
        paddingRight: '.4rem',
        fontSize: '1.5rem',
        fontWeight: "bold",
        [theme.breakpoints.down('md')]: {
            fontSize: "0.8rem"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.6rem"
        }

    },
    inputStyle: {
        position: 'relative',
    },
    formControl1: {
        width: '100%',
    },
    formControl2: {
        width: '50%',
    },
    buttonsearch: {
        backgroundColor: "#fec248",
        cursor: "pointer",
        order: "4",
        padding: "0 17px 0 14px",
        borderRadius: "0 50px 50px 0",
        height: "49px",
        [theme.breakpoints.down('md')]: {
            padding: 0,
            lineHeight: "1"
        }
    },

    cardstart: {
        width: '50%',
        marginLeft: "25%",
        marginRight: "25%",
        backgroundColor: "#fec248",
        padding: ".5rem",
        borderRadius: "0 50px 50px 0",
        height: "auto",
        [theme.breakpoints.down('md')]: {
            padding: 0,
            lineHeight: "1",
            width: '100%',
            marginLeft: "2%",
            marginRight: "15%",
            height: "auto"
        }
    },
    searchIcon: {
        position: 'absolute',
        right: '5%',
        top: '15%',
        height: "100%",
        color: theme.palette.third.main,
        backgroundColor: "#FFD947"
    },
}));


const regionlocal = [
    { label: 'Вінницька', value: 'UA05000000000010236' },
    { label: 'Волинська', value: 'UA07000000000024379' },
    { label: 'Дніпропетровська', value: 'UA12000000000090473' },
    { label: 'Донецька', value: 'UA14000000000091971' },
    { label: 'Житомирська', value: 'UA18000000000041385' },
    { label: 'Закарпатська', value: 'UA21000000000011690' },
    { label: 'Запорізька', value: 'UA23000000000064947' },
    { label: 'Івано-Франківська', value: 'UA26000000000069363' },
    { label: 'Київська', value: 'UA32000000000030281' },
    { label: 'Кіровоградська', value: 'UA35000000000016081' },
    { label: 'Луганська', value: 'UA44000000000018893' },
    { label: 'Львівська', value: 'UA46000000000026241' },
    { label: 'Миколаївська', value: 'UA48000000000039575' },
    { label: 'Одеська', value: 'UA51000000000030770' },
    { label: 'Полтавська', value: 'UA53000000000028050' },
    { label: 'Рівненська', value: 'UA56000000000066151' },
    { label: 'Сумська', value: 'UA59000000000057109' },
    { label: 'Тернопільська', value: 'UA61000000000060328' },
    { label: 'Харківська', value: 'UA63000000000041885' },
    { label: 'Херсонська', value: 'UA65000000000030969' },
    { label: 'Хмельницька', value: 'UA68000000000099709' },
    { label: 'Черкаська', value: 'UA71000000000010357' },
    { label: 'Чернівецька', value: 'UA73000000000044923' },
    { label: 'Чернігівська', value: 'UA74000000000025378' },
    { label: 'Київ', value: 'UA80000000000093317' },

];
function Gromada() {
    const [selectedOptionObl, setSelectedOptionObl] = useState(null);
    const [selectedOptionRay, setSelectedOptionRay] = useState(null);
    const [selectedOptionGrom, setSelectedOptionGrom] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isShow, setIsShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const classes = useStyles();
    /*const dataregion=dataCodif.filter((cod)=>{
        console.log(cod.category)
            if(cod.category=="O"||cod.category=="K"){
                return cod
            }
        }
    )*/
    const {
        jobs,
        setJobs,
    } = useContext(JobsContext);
    const datarayon=dataCodif.filter((cod)=>{
            if(cod.category==="P"){
                return cod
            }
        }
    )
    const datagromad=dataCodif.filter((cod)=>{
            if(cod.category==="H"){
                return cod
            }
        }
    )
    const searchregion= datarayon.filter((job) =>{
            console.log(selectedOptionObl)
            //setIsLoading(true)
            if (selectedOptionObl) {
                if(job.oblast==selectedOptionObl.value&&job.gromada===""){
                    return job
                }} },//
        //setIsLoading(false)
    )
    const searchrayon= datagromad.filter((job) =>{
            console.log(selectedOptionRay)
            if (selectedOptionRay) {
                //setIsLoading(false)
                if(job.rayon==selectedOptionRay.value&&job.naspunkt===""){
                    return job
                }} },
        //setIsLoading(false)
    )

    //const region=dataregion.map(opt => ({ label: opt.name, value: opt.oblast }));
    const rayon=searchregion.map(opt => ({ label: opt.name, value: opt.rayon }));
    const gromada=searchrayon.map(opt => ({ label: opt.name, value: opt.gromada }));
    //console.log(countvacrayon.length)
    console.log(  rayon)
    const choiceModulesHandler = (id) => {
        // setIsLoading(true)
        setSelectedCard(id)

    }

    return (
        <div className="App">

            <Select
                variant="outlined"
                sx={{borderRadius: 5}}
                className={classes.inputStyle}
                defaultValue={selectedOptionObl}
                onChange={setSelectedOptionObl}
                options={regionlocal }
            />
            <Select
                variant="outlined"
                sx={{borderRadius: 5}}
                className={classes.inputStyle}
                defaultValue={selectedOptionRay}
                onChange={setSelectedOptionRay}
                options={rayon}
            />
            <Select
                variant="outlined"
                sx={{borderRadius: 5}}
                className={classes.inputStyle}
                defaultValue={selectedOptionGrom}
                onChange={setSelectedOptionGrom}
                options={gromada}
            />

        </div>

    );
}

export default Gromada;
