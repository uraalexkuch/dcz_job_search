import React from 'react'
import {Form, useForm} from "../components/useForm";
import {Button, Input, Select} from "../controls";
import {Grid} from "@material-ui/core";
import location from '../../../Img/location.png'
import dataCodif from "../../../../data/cod.json";
import Box from "@mui/material/Box";
import position from "../../../Img/position.png";
import response from "../../../Img/respons.png";
import description from "../../../Img/description.png";
import pay from "../../../Img/pay.png";
import contact from "../../../Img/contact.png";
import {makeStyles} from "@mui/styles";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    logo: {
        marginLeft: '-3.5rem',
        background: "#FFFFFF",
        width: '3rem'
    },
    logo1: {
        marginLeft: '-1.8rem',
        background: "#FFFFFF",
        width: '3rem'
    },
   formall :{

       [theme.breakpoints.down('md')]: {
           marginLeft: '.5rem', marginRight: ".5rem",
       }
},
    item: {
        paddingLeft: '2rem',
    },
    labl: {
        color: 'rgba(0, 0, 0, 0.77',
        fontSize: '1rem',
        fontWeight:"bold"

    }
}));

const region = [

    {label: 'Вінницька', value: 'UA05000000000010236'},
    {label: 'Волинська', value: 'UA07000000000024379'},
    {label: 'Дніпропетровська', value: 'UA12000000000090473'},
    {label: 'Донецька', value: 'UA14000000000091971'},
    {label: 'Житомирська', value: 'UA18000000000041385'},
    {label: 'Закарпатська', value: 'UA21000000000011690'},
    {label: 'Запорізька', value: 'UA23000000000064947'},
    {label: 'Івано-Франківська', value: 'UA26000000000069363'},
    {label: 'Київська', value: 'UA32000000000030281'},
    {label: 'Кіровоградська', value: 'UA35000000000016081'},
    {label: 'Луганська', value: 'UA44000000000018893'},
    {label: 'Львівська', value: 'UA46000000000026241'},
    {label: 'Миколаївська', value: 'UA48000000000039575'},
    {label: 'Одеська', value: 'UA51000000000030770'},
    {label: 'Полтавська', value: 'UA53000000000028050'},
    {label: 'Рівненська', value: 'UA56000000000066151'},
    {label: 'Сумська', value: 'UA59000000000057109'},
    {label: 'Тернопільська', value: 'UA61000000000060328'},
    {label: 'Харківська', value: 'UA63000000000041885'},
    {label: 'Херсонська', value: 'UA65000000000030969'},
    {label: 'Хмельницька', value: 'UA68000000000099709'},
    {label: 'Черкаська', value: 'UA71000000000010357'},
    {label: 'Чернівецька', value: 'UA73000000000044923'},
    {label: 'Чернігівська', value: 'UA74000000000025378'},
    {label: 'Київ', value: 'UA80000000000093317'},
]
const otrasl = [
    {label: 'ІТ', value: 'ІТ'},
    {label: 'HR', value: 'HR'},
    {label: 'автобізнес', value: 'автобізнес'},
    {label: 'АПК', value: 'АПК'},
    {label: 'безпека_охорона', value: 'безпека_охорона'},
    {label: 'будівництво', value: 'будівництво'},
    {label: 'державна_служба', value: 'державна_служба'},
    {label: 'дизайн', value: 'дизайн'},
    {label: 'добувна', value: 'добувна'},
    {label: 'енергетіка', value: 'енергетіка'},
    {label: 'зв\'язок', value: 'зв\'язок'},
    {label: 'ЗМІ', value: 'ЗМІ'},
    {label: 'інше', value: 'інше'},
    {label: 'кафе_ресторан', value: 'кафе_ресторан'},
    {label: 'клінінг/благоустрій', value: 'клінінг/благоустрій'},
    {label: 'керівництво', value: 'керівництво'},
    {label: 'краса_здоров\'я', value: 'краса_здоров\'я'},
    {label: 'культура_дозвілля', value: 'культура_дозвілля'},
    {label: 'логістика', value: 'логістика'},
    {label: 'маркетинг_реклама', value: 'маркетинг_реклама'},
    {label: 'медицина/аптека', value: 'медицина/аптека'},
    {label: 'нерухомість', value: 'нерухомість'},
    {label: 'оборона', value: 'оборона'},
    {label: 'освіта_наука', value: 'освіта_наука'},
    {label: 'послуги', value: 'послуги'},
    {label: 'початок кар\'єри', value: 'початок кар\'єри'},
    {label: 'промисловість', value: 'промисловість'},
    {label: 'робота_офіс', value: 'робота_офіс'},
    {label: 'страхування', value: 'страхування'},
    {label: 'фінанси_аудит', value: 'фінанси_аудит'},
    {label: 'торгівля', value: 'торгівля'},
    {label: 'туризм', value: 'туризм'},
    {label: 'юриспруденція', value: 'юриспруденція'},
]
let datarayon = dataCodif.filter((cod) => {
        if (cod.category === "P") {
            return cod
        }
    }
)
console.log(datarayon)
let datagromad = dataCodif.filter((cod) => {
        if (cod.category === "H") {
            return cod
        }
    }
)
console.log(datagromad)
let datatown = dataCodif.filter((cod) => {
        if (cod.naspunkt !== "") {
            return cod
        }
    }
)
console.log(datatown)


//
//let town= searchtown.map(opt => ({ label: opt.name, value: opt.naspunkt }));
export default function VacForm() {

    const modelObject = {
        contact: '',
        rayon: '',
        gromad: '',
        otrasl: '',
        vacname: '',
        townid: '',
        regionid: '',
        companyname: '',
        workcond: '',
        salarytxt: '',
        salary: '',
        description: '',
        reg_date: new Date()
            //.toLocaleDateString('uk-UA')

    }
    const classes = useStyles();
    const {
        values,
        handleInputChange,
        resetForm
    } = useForm(modelObject);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = {
            town: nametown[0],
            regionname: nameregion[0],
        };
        const valuesAll = {...name, ...values}
        console.log(valuesAll);
        await axios.post(
            "http://localhost:5000/api/vac/addVac/", valuesAll
        ).then(resetForm())
            .catch(error => {
            // handle error
            console.log(error);
        })
    }
    let searchrayon = datarayon.filter((job) => {
            if (values.regionid) {
                if (job.oblast === values.regionid && job.gromada === "") {
                    return job
                }
            }
        },
    )
    let searchgromad = datagromad.filter((job) => {
            if (values.rayon) {
                if (job.rayon === values.rayon && job.naspunkt === "") {
                    return job
                }
            }
        },
    )
    let searchtown = datatown.filter((job) => {
            if (values.gromad) {
                if (job.gromada === values.gromad && job.naspunkt !== "") {
                    return job
                }
            }
        },
    )
    let rayon = searchrayon.map(opt => ({label: opt.name, value: opt.rayon}));
    let gromada = searchgromad.map(opt => ({label: opt.name, value: opt.gromada}));
    let town = searchtown.map(opt => ({label: opt.name, value: opt.naspunkt}));
    let nameregion = (region.filter((job) => {
            console.log(job)
            console.log(values.regionid)
            if (job.value == values.regionid) {
                return job
            }
        },
    )).map((o) => (o.label))
    let nametown = (town.filter((job) => {
            console.log(job)
            console.log(values.townid)
            if (job.value == values.townid) {
                return job
            }
        },
    )).map((o) => (o.label))
    console.log(nametown[0])
    return (
        <>
            <span style={{
                marginLeft: '6rem',
                padding: '1rem',
                color: '#0d4681',
                fontWeight: 'bold',
                fontSize: '1.3rem',
                background: "#FFFFFF"
            }}>Додати вакансію</span>

            <Form onSubmit={handleSubmit}
                style={{  paddingTop: '2rem', marginLeft: '3rem', marginRight: "1rem",
                    // paddingLeft:"3rem",
                    border: "2px solid #0768bd", zIndex: '3', }} > <Box>
                <img
                    className={classes.logo1}
                    src={location}
                    alt="logo"/>
            </Box>
                <Grid container>
                    <Grid item className={classes.item} xs={12} sm={12} md={6}>
                        <div className={classes.labl} htmlFor="categories">Область</div>
                        <Select
                            name="regionid"
                            label="Оберіть"
                            value={values.regionid}
                            onChange={handleInputChange}
                            options={region}
                            required
                        />

                    </Grid>
                    <Grid item className={classes.item} xs={12} sm={12} md={6}>
                        <div className={classes.labl} s htmlFor="categories">Район</div>
                        <Select
                            name="rayon"
                            label="Оберіть"
                            value={values.rayon}
                            onChange={handleInputChange}
                            options={rayon}
                            required
                        />

                    </Grid>
                    <Grid item className={classes.item} xs={12} sm={12} md={6}>
                        <div className={classes.labl}htmlFor="categories">Громада</div>
                        <Select
                            name="gromad"
                            label="Оберіть"
                            value={values.gromad}
                            onChange={handleInputChange}
                            options={gromada}
                            required
                        />

                    </Grid>
                    <Grid item className={classes.item} xs={12} sm={12} md={6}>
                        <div className={classes.labl} htmlFor="categories">Населенний пункт</div>
                        <Select
                            name="townid"
                            label="Оберіть"
                            value={values.townid}
                            onChange={handleInputChange}
                            options={town}
                        />

                    </Grid>
                    <Grid item className={classes.item} xs={0} sm={0} md={2}>


                    </Grid>
                    <Grid item className={classes.item} xs={12} sm={12} md={8}>
                        <div className={classes.labl} htmlFor="categories">Галузь</div>
                        <Select
                            name="otrasl"
                            label="Введіть дані"
                            value={values.otrasl}
                            onChange={handleInputChange}
                            options={otrasl}
                            required
                        />
                    </Grid>
                    <Grid item className={classes.item} xs={0} sm={0} md={2}>
                    </Grid>
                    <Grid item className={classes.item} xs={12}>
                        <div className={classes.labl} htmlFor="categories">Назва роботодавця</div>
                        <Input
                            name="companyname"
                            label="Введіть дані"
                            type="textarea"
                            error
                            value={values.companyname}
                            onChange={handleInputChange}
                            required
                         />
                    </Grid>
                    <Grid item className={classes.item} xs={12}>
                        <Box><img
                            className={classes.logo}
                            src={position}
                            height="auto"
                            alt="logo"/>
                        </Box>
                        <div className={classes.labl} htmlFor="categories">Назва професії/посади</div>
                        <Input
                            name="vacname"
                            error
                            label="Введіть дані"
                            type="textarea"
                            value={values.vacname}
                            onChange={handleInputChange}
                            required
                        />
                        <Box><img
                            className={classes.logo}
                            src={response}
                            height="auto"
                            width="35"
                            // style={{marginLeft:'-1.5 rem',background:"#FFFFFF"}}
                            alt="logo"/>
                        </Box>
                        <div className={classes.labl} htmlFor="categories">Обов'язки</div>
                        <Input
                            id="outlined-multiline-flexible"
                            name="description"
                            label="Введіть дані"
                            multiline
                            error
                            rows={4}
                            type="textarea"
                            value={values.description}
                            onChange={handleInputChange}
                            required
                        />
                        <Box><img
                            className={classes.logo}
                            src={description}
                            height="auto"
                            width="35"
                            alt="logo"/>
                        </Box>
                        <div className={classes.labl} htmlFor="categories">Умови праці</div>
                     <Input
                            id="outlined-multiline-flexible"
                            label="Введіть дані"
                            multiline
                            error
                            rows={4}
                            name="workcond"
                            value={values.workcond}
                            onChange={handleInputChange}
                            required
                        />  <Box><img
                        className={classes.logo}
                        src={pay}
                        height="auto"
                        width="35"
                        // style={{marginLeft:'-1.5 rem',background:"#FFFFFF"}}
                        alt="logo"/>
                    </Box>
                        <div className={classes.labl} htmlFor="categories">Оплата</div>
                        <Input
                            label="Введіть дані"
                            name="salary"
                            error
                            value={values.salary}
                            onChange={handleInputChange}
                            required
                        />
                        <Box><img
                            className={classes.logo}
                            src={pay}
                            height="auto"
                            width="35"
                            // style={{marginLeft:'-1.5 rem',background:"#FFFFFF"}}
                            alt="logo"/>
                        </Box>
                        <div className={classes.labl}htmlFor="categories">Додаткові умови оплати</div>
                        <Input
                            label="Введіть дані"
                            multiline
                            error
                            name="salarytxt"
                            value={values.salarytxt}
                            onChange={handleInputChange}
                        />
                        <Box>
                            <img
                            className={classes.logo}
                            src={contact}
                            height="auto"
                            width="35"
                            alt="logo"/>
                        </Box></Grid>
                    <Grid item className={classes.item} xs={12} sm={12} md={6}>
                        <div className={classes.labl} htmlFor="categories">Телефон</div>
                        <Input
                            label="Введіть дані"
                            error
                            name="contact"
                            value={values.contact}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item className={classes.item} xs={12} sm={12} md={6}>
                        <div className={classes.labl} htmlFor="categories">Email</div>
                        <Input
                            label="Введіть дані"
                            error
                            name="contact"
                            value={values.contact}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item className={classes.item} xs={12} sm={12} md={8}>
                        <div style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            color: '#1b285f',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        }}>Увага! Будь ласка, переконайся, що всі пункти заповнені корректно.
                        </div>
                    </Grid>
                    <Grid item className={classes.item} xs={12} sm={12} md={4}>
                        <div style={{
                            margin: '1rem',
                            //padding:'2rem',
                        }}>
                            <Button
                                type="submit"
                                style={{background: '#1b285f', color: "#FFFFFF", fontWeight: "bold",marginRight:'1rem'}}
                                text="Додати"/>
                            <Button
                                text="Скасувати"
                                style={{fontWeight: "bold"}}
                                color="default"
                                onClick={resetForm}/>
                        </div>
                    </Grid>
                </Grid>
            </Form>
        </>)
}
