import React, {useContext, useEffect, useState} from 'react';
import Select from 'react-select';
import dataCodif from "../../data/cod.json";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper
} from "@mui/material";

import {  styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import {JobsContext} from "./JobsContext";
import Typography from "@mui/material/Typography";
import dataVac from "../../data/vacancion.json";


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
    console.log(
        rayon)
    const choiceModulesHandler = (id) => {
       // setIsLoading(true)
        setSelectedCard(id)

    }

    return (
        <div className="App">

            <Select
                defaultValue={selectedOptionObl}
                onChange={setSelectedOptionObl}
                options={regionlocal }
            />
            <Select
                defaultValue={selectedOptionRay}
                onChange={setSelectedOptionRay}
                options={rayon}
            />
            <Select
                defaultValue={selectedOptionGrom}
                onChange={setSelectedOptionGrom}
                options={gromada}
            />

            <Grid container spacing={2}>
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
                            {rayon ?
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
                                )):isShow?gromada.map((item) => (
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
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
                                )):''}

                        </Box>

                    </Grid>}

            </Grid>
        </div>

    );
}

export default Gromada;
