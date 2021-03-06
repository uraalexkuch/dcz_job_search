import React, {Component, useContext, useState} from 'react';
import Select from 'react-select';
import dataCodif from "../../data/cod.json";
import dataVac from "../../data/vacancion.json";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    InputLabel
} from "@mui/material";
import jobsVac from "../../data/vacancion.json";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
import {Col, Row} from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import {ArrowCircleUp} from "@mui/icons-material";
import {JobsContext} from "./JobsContext";
const useStyles = makeStyles((theme) => ({
    position: {
        color: theme.palette.third.fourth,
    },

    resultContainer: {
        display: 'flex',
        marginLeft:"2rem",
        marginRight:"2rem",
        lineHeight: 0,
        color:"#FFFFFF",
        justifyContent: 'space-between',
        // padding: '.5rem 1.5rem .5rem 1.5rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        borderBottom: '1px solid #cecece',
        borderRadius:"5px 5px",
        background: '#045ba7',
        //color: theme.palette.gray.fW500,
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        transition: '0.3s',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },

    hoverEffect: {
        cursor: 'pointer',
        // padding: '.5rem',
        border: "1px solid #625d5d",
        margin: "0px 0px 15px 0px",
        padding: "20px 10px",
        '&:hover': {
            transform: 'translateY(2px)',
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',

            backgroundColor: theme.palette.third.secondary,
        },
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexWrap: "wrap",
            marginLeft:'0.5rem',
            marginRight:"0.5rem",
        },
    },

    description: {

        color: theme.palette.gray.fW600,
        fontWeight:"bold"
    },

    nameValueSalary: {
        color: theme.palette.gray.fW600,
        fontSize: '1.8 rem',
        fontWeight:"bold"
    },
    nameValue: {
        color: theme.palette.gray.fW600,
        fontSize: '1rem',
        fontWeight:"bold"
    },
    valueSalary: {
        color:  "#005BAA",
        marginRight: '.5rem',
        paddingRight: '.4rem',
        fontSize: '1.8rem',
        fontWeight:"bold"
    },
    value: {
        color: theme.palette.third.fifth,
        marginRight: '.5rem',
        paddingRight: '.4rem',
        fontWeight:"bold"
    },

    resultIcon: {
        fontSize: '5rem',
        cursor: 'pointer',
        color:"#FFFFFF",
        marginTop:'0.5rem',

    },
}));

const regionlocal = [

    { label: '??????????????????', value: 'UA05000000000010236' },
    { label: '??????????????????', value: 'UA07000000000024379' },
    { label: '????????????????????????????????', value: 'UA12000000000090473' },
    { label: '????????????????', value: 'UA14000000000091971' },
    { label: '??????????????????????', value: 'UA18000000000041385' },
    { label: '????????????????????????', value: 'UA21000000000011690' },
    { label: '????????????????????', value: 'UA23000000000064947' },
    { label: '??????????-??????????????????????', value: 'UA26000000000069363' },
    { label: '????????????????', value: 'UA32000000000030281' },
    { label: '????????????????????????????', value: 'UA35000000000016081' },
    { label: '??????????????????', value: 'UA44000000000018893' },
    { label: '??????????????????', value: 'UA46000000000026241' },
    { label: '????????????????????????', value: 'UA48000000000039575' },
    { label: '??????????????', value: 'UA51000000000030770' },
    { label: '????????????????????', value: 'UA53000000000028050' },
    { label: '????????????????????', value: 'UA56000000000066151' },
    { label: '??????????????', value: 'UA59000000000057109' },
    { label: '??????????????????????????', value: 'UA61000000000060328' },
    { label: '????????????????????', value: 'UA63000000000041885' },
    { label: '????????????????????', value: 'UA65000000000030969' },
    { label: '??????????????????????', value: 'UA68000000000099709' },
    { label: '??????????????????', value: 'UA71000000000010357' },
    { label: '??????????????????????', value: 'UA73000000000044923' },
    { label: '????????????????????????', value: 'UA74000000000025378' },
    { label: '????????', value: 'UA80000000000093317' },

];

function JobsModal() {
    return null;
}

export default class Gromada1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOptionObl:null,
            selectedOptionRay: null,
            //selectedOptionGrom: null,
            showModuls: true,
            showGrom: true,
            idrayon: ''
        };
        this. choiceModulesHandler  = this. choiceModulesHandler .bind(this);
    }

    handleChangeObl = (selectedOptionObl) => {

        this.setState({ selectedOptionObl}, () =>
            console.log(`Option selected:`, this.state.selectedOptionObl)
        );
    };
    handleChangeRay = (selectedOptionRay) => {
        this.setState({ selectedOptionRay,showModuls:false,}, () =>
            console.log(`Option selected:`, this.state.selectedOptionRay)
        );
    };
    clear = () => {
        this.setState({
            selectedOptionObl:null,
            selectedOptionRay: 0,
            selectedOptionGrom: null,
          //  showModuls: true,
           // showGrom: true,
        })

    }

    choiceModulesHandler = (id) => {
       // this.setState({
       //     idrayon: id,
       // })
        console.log("??????????id"+id)
        dataVac.filter((r)=>{
                   console.log("??????????"+r.CITYID.slice(0,10));
                   console.log("all"+r);
                   if(r.CITYID.slice(0,10)===id.slice(0,10)){
                       console.log("??????????"+r)
                       return r
                   }
               }
           )
       // console.log(searchnas())


    }

    render() {
        const { selectedOptionObl } = this.state;
        const { selectedOptionRay } = this.state;
        const { selectedOptionGrom } = this.state;
        let  datarayon=dataCodif.filter((cod)=>{
               if (cod.category==="P"){
                    return cod
                }
            }
        )
        console.log(datarayon)
        let datagromad=dataCodif.filter((cod)=>{
                if(cod.category==="H"){
                    return cod
                }
            }
        )
        console.log(datagromad)
        let  searchregion= datarayon.filter((job) =>{
            if (selectedOptionObl) {

                if(job.oblast===selectedOptionObl.value&&job.gromada===""){
                    return job
                }
                }},
        )
        let  searchrayon= datagromad.filter((job) =>{
            if (selectedOptionRay) {
                              if(job.rayon===selectedOptionRay.value&&job.naspunkt===""){
                        return job
                    }} },
                    )
        let  searchtown= dataCodif.filter((job) =>{
            if (selectedOptionGrom) {
                if(job.naspunkt!==""){
                    return job
                }} },
        )

        const show = this.state.showModuls;
        const grom = this.state.showGrom;
         let rayon=searchregion.map(opt => ({ label: opt.name, value: opt.rayon }));
        let gromada=searchrayon.map(opt => ({ label: opt.name, value: opt.gromada }));
        let town= searchtown.map(opt => ({ label: opt.name, value: opt.naspunkt }));
        //console.log(rayon)
        console.log(town)

        return (
        <div className="App">
            <Button size="small" style={{
                marginLeft:"90%",marginRight:"1rem"
            }} variant="contained" onClick={this.clear}>??????????????????</Button>

            <InputLabel htmlFor="categories">????????????</InputLabel>
            <Select
                placeholder="?????????????? ??????????????"
                labelId="demo-simple-select-label"
                defaultValue={0}
               value={selectedOptionObl}
                onChange={this.handleChangeObl}
                options={regionlocal }
            />
            <InputLabel htmlFor="categories">??????????</InputLabel>
            <Select
                placeholder="?????????????? ??????????"
                labelId="demo-simple-select-label"
                defaultValue={0}
                value={selectedOptionRay}
                onChange={this.handleChangeRay}
                options={rayon}
            />
            <Grid container spacing={2} height="100%">
                {
                    <Grid item xs={12} >
                                <Box
                                sx={{
                                    p: 6,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    gridTemplateColumns: { md: '4fr 4fr' },
                                    gap: 4,
                                }} >
                                    {show ?
                                        rayon.map((item) => (
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardActionArea onClick={() => this.choiceModulesHandler( item.value)}>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {"??????????:  "+item.label}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {"\n?????????????????? ???????????????? ???? ????????????: "+dataVac.filter((r)=>{
                                                                    if(r.CITYID.slice(0,7)===item.value.slice(0,7)){
                                                                        return r
                                                                    }
                                                                }
                                                            ).length}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                )):grom?gromada.map((item) => (
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardActionArea onClick={() => this.choiceModulesHandler( item.value)}>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {"??????????????:  "+item.label}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {"\n?????????????????? ???????????????? ???? ??????????????: "+dataVac.filter((r)=>{
                                                                    if(r.CITYID.slice(0,10)===item.value.slice(0,10)){
                                                                        return r
                                                                    }
                                                                }
                                                            ).length}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        )):function JobBoard() {

                                            const [isReversed, setIsReversed] = useState(false);
                                            const classes = useStyles();
                                            const {
                                                jobs,
                                                data,
                                                setJobs,
                                                pagesVisited,
                                                jobsPerPage,
                                                setJobsModal,
                                                handleKeyDown,
                                                handleOpen,

                                            } = useContext(JobsContext);
                                            const dot = '. . ';
                                            const handleResultIcon = () => {
                                                setIsReversed(!isReversed);
                                                setJobs(jobsVac.reverse());

                                            };

                                            const handleJobsModal = (job) => {
                                                setJobsModal([job]);
                                                handleOpen();
                                            };
                                            const jobsotrasl=jobs.map(((t)=>t.BRANCHNAME));
                                            const uniqotrasl=new Set(jobsotrasl)
                                            const otrasl=[...uniqotrasl]

                                            const displayJobs = jobs
                                                .slice(pagesVisited, pagesVisited + jobsPerPage)
                                                .map((job) => (

                                                    <React.Fragment key={job.id}>

                                                        <Row style={{
                                                            width: 'auto',

                                                            marginLeft:'1rem',
                                                            marginRight:"1rem",
                                                            display: 'flex',
                                                            gap: '1rem',

                                                        }} sx={{ mt: 10 }}
                                                             className={classes.hoverEffect}
                                                            //sx={{ mb: 3 }}
                                                             onClick={() => {
                                                                 handleJobsModal(job);
                                                             }}
                                                        ><Col style={{ width:"80%"}}>
                                                            <Typography style={{fontWeight:"bold",color:  "#005BAA",}}
                                                                        className={classes.position}
                                                                        sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                                                            >
                                                                {job.VACNAME.toLowerCase()}
                                                            </Typography>
                                                            <Typography
                                                                variant="body1"
                                                                className={classes.description}
                                                                sx={{ mt: 2, mb: 3, fontSize: 15 }}
                                                            >
                                                                {`${job.DESCRIPTION
                                                                    .replace(/(<([^>]+)>)/gi, '')
                                                                    .slice(0, 220)}${dot.repeat(2)}`}
                                                            </Typography>
                                                            <div className={classes.nameValue}>
                                                                ??????????????:{' '}
                                                                <span className={classes.value}>
                        {job.candidate_required_location === ''
                            ? '??????????????????????'
                            : job.REGIONNAME.length < 10
                                ? job.REGIONNAME
                                : job.REGIONNAME.slice(0, 30)}
                     </span>
                                                            </div>
                                                            <div className={classes.nameValue}>
                                                                ???????? ???? ?????? ????????????????????:{' '}
                                                                <span className={classes.value}>
                        {job.REG_DATE}
                     </span>
                                                            </div>
                                                        </Col>
                                                            <Col style={{width:"20%",fontWeight:"bold"}} sx={{ fontWeight: 600, mt: 2 }}>
                                                                <Typography className={classes.nameValueSalary}>
                                                                    ?????????????????? ??????????(??????.):
                                                                    <div className={classes.valueSalary}>
                                                                        {job.SALARY===0?("??????????????????"):job.SALARY}

                                                                    </div>

                                                                </Typography>

                                                            </Col>
                                                        </Row>
                                                    </React.Fragment>
                                                ));
                                            //console.log(jobs)
                                            return (
                                                <Box sx={{ mt: 1, ml: 2, mr: 2 }}>

                                                    <Box container className={classes.resultContainer}>
                                                        <Typography
                                                            variant="subtitle1"
                                                            component="subtitle1"
                                                            sx={{
                                                                fontSize: '1.3rem',
                                                                display: 'flex',
                                                                fontWeight: 500,
                                                                padding:'.3rem',
                                                                color:"#FFFFFF",
                                                                border: "1px solid #625d5d",
                                                            }}
                                                        >
                                                            {' '}
                                                            ??????????????????:&nbsp;
                                                            <ArrowCircleUp
                                                                onClick={handleResultIcon}
                                                                className={classes.resultIcon}
                                                                sx={{width:"2rem",
                                                                    height:'2rem',
                                                                    transform: isReversed ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                    transition: '.2s',
                                                                }}
                                                            />
                                                        </Typography>
                                                        <Typography variant="subtitle1" sx={{
                                                            fontSize: '1.2rem',
                                                            display: 'flex',
                                                            fontWeight: 500,
                                                            padding:'.3rem',
                                                            color:"#FFFFFF",

                                                        }}>{`${
                                                            jobs.length <= 1
                                                                ? `${jobs.length}` + ' ??????????????'
                                                                : `${jobs.length}` + ' ??????????????'
                                                        }`}</Typography>
                                                    </Box>

                                                    {jobs.length >= 1 ? (

                                                        displayJobs
                                                    ) : (
                                                        <Typography
                                                            variant="h3"
                                                            component="h5"
                                                            sx={{
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                textAlign: 'center',
                                                                mt: 6,
                                                                fontSize: 28,
                                                            }}
                                                        >
                                                            <ErrorOutlineIcon sx={{ fontSize: 32, mr: 1, mb: 2 }} /> ??????????????,
                                                            ???????? ????????????????
                                                        </Typography>
                                                    )}
                                                    <span>
            <JobsModal />
              <Pagination />
         </span>
                                                </Box>
                                            );
                                        }}

                            </Box>

                    </Grid>}

            </Grid>

        </div>

    );
}}


