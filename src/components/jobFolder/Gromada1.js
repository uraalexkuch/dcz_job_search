import React, {Component} from 'react';
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

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


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
export default class Gromada1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOptionObl:null,
            selectedOptionRay: null,
            selectedOptionGrom: null,
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
            selectedOptionRay: null,
            selectedOptionGrom: null,
            showModuls: true,
            showGrom: true,
        })

    }

    choiceModulesHandler = (id) => {
       // this.setState({
       //     idrayon: id,

       // })
        console.log("номерid"+id)
        dataVac.filter((r)=>{
                   console.log("номер"+r.CITYID.slice(0,10));
                   console.log("all"+r);
                   if(r.CITYID.slice(0,10)==id.slice(0,10)){
                       console.log("номер"+r)
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

                if(job.oblast==selectedOptionObl.value&&job.gromada===""){
                    return job
                }
                }},
        )
        let  searchrayon= datagromad.filter((job) =>{
            if (selectedOptionRay) {


                              if(job.rayon==selectedOptionRay.value&&job.naspunkt===""){
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
                marginLeft:"75%",marginRight:"1rem"
            }} variant="contained" onClick={this.clear}>Скасувати</Button>


            <InputLabel htmlFor="categories">Регіон</InputLabel>
            <Select

                placeholder="Оберіть область"
                labelId="demo-simple-select-label"
                defaultValue={0}
               value={selectedOptionObl}
                onChange={this.handleChangeObl}
                options={regionlocal }
            />
            <InputLabel htmlFor="categories">Район</InputLabel>
            <Select
                placeholder="Оберіть район"
                labelId="demo-simple-select-label"
                defaultValue={selectedOptionRay}
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
                                                            {"Район:  "+item.label}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {"\nКількість вакансій по району: "+dataVac.filter((r)=>{
                                                                    if(r.CITYID.slice(0,7)==item.value.slice(0,7)){
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
                                                            {"Громада:  "+item.label}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {"\nКількість вакансій по громаді: "+dataVac.filter((r)=>{
                                                                    if(r.CITYID.slice(0,10)==item.value.slice(0,10)){
                                                                        return r
                                                                    }
                                                                }
                                                            ).length}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        )):""}

                            </Box>

                    </Grid>}

            </Grid>

        </div>

    );
}}


