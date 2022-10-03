import React, {useContext, useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
} from '@mui/material';
import Swal from "sweetalert2";
import {makeStyles} from '@mui/styles';
import {JobsContext} from './JobsContext';
import SearchIcon from '@mui/icons-material/Search';
import {ProgressBar, Row} from "react-bootstrap";
import axios from "axios";
import JobBoard from "./JobBoard";
import Pagination from "./Pagination";
import {theme} from "../../CustomTheme";
import dataCodif from "../../data/cod.json";

const regionlocal = [

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

];
const useStyles = makeStyles((theme) => ({
    container: {
        width: 'max(85%)',
        margin: 'auto',
        display: 'flex',
        borderRadius: "25 px 25 px",
        //marginLeft: '2rem',
        //marginRight: "2rem",
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

function SearchBar() {

    const [disabled, setDisabled] = useState(true);
    const [visibility, setVisibility] = useState("hidden");
    const [isLoading, setIsLoading] = useState(true);
    const [isLoad, setIsLoad] = useState(false);

    const [isLoadrayon, setIsLoadrayon] = useState(true);
    const [isLoadgromad, setIsLoadgromad] = useState(true);

    const [selectedOptionObl, setSelectedOptionObl] = useState(null);
    const [selectedOptionRay, setSelectedOptionRay] = useState(null);
    const [selectedOptionGrom, setSelectedOptionGrom] = useState(null);
    const {
        setJobs,
        data,
        setData,
        searchText,
        setSearchText,
        category,
        setCategory,
        categoryPay,
        setCategoryPay,
        categoryLabelPay,
        categoryLabel,
    } = useContext(JobsContext);
    const dataregion = dataCodif.filter((cod) => {
        if (cod.category === "C") {
            return cod
        }
    })
    const datarayon = dataCodif.filter((cod) => {
        if (cod.category === "P") {
            return cod
        }
    })
    const datagromad = dataCodif.filter((cod) => {
        if (cod.category === "H") {
            return cod
        }
    })
    const searchregion = datarayon.filter((job) => {
        if (selectedOptionObl) {
            if (job.oblast == selectedOptionObl.value && job.gromada === "") {
                return job
            }
        }
    })
    const searchrayon = datagromad.filter((job) => {
        if (selectedOptionRay) {
            if (job.rayon == selectedOptionRay.value && job.naspunkt === "") {
                return job
            }
        }
    })
   // const region=dataregion.map(opt => ({ label: opt.name, value: opt.oblast }));
   // console.log( dataregion)
    const rayon = searchregion.map(opt => ({label: opt.name, value: opt.rayon}));
    const gromada = searchrayon.map(opt => ({label: opt.name, value: opt.gromada}));

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setJobs(data);
        setCategory(0)
        e.target.value === "" ? setIsLoad(false) : setIsLoad(true)
    };
    const handleCategoryobl = (e) => {
        setSelectedOptionObl(e.target)
        e.target.value === 0? setIsLoadrayon(true): setIsLoadrayon(false)
        setSelectedOptionRay(0);
        setSelectedOptionGrom(0)
        setJobs(data);
    };
    const handleCategoryrayon = (e) => {
        setSelectedOptionRay(e.target)
        e.target.value === 0? setIsLoadgromad(true): setIsLoadgromad(false)

        setJobs(data);
    };
    const handleCategorygromada = (e) => {
        setSelectedOptionGrom(e.target)

        setJobs(data);
    };
    const handleCategory = (e) => {
        setCategory(e.target.value)
        setJobs(data);
    };

    const handleCategoryPay = (e) => {
        setCategoryPay(e.target.value);
        setJobs(data);
    };
    const classes = useStyles();
    const resetall = () => {
       // setSearchText("");
       // setIsLoad(false)
       // setCategory(0);
        //setIsLoadgromad(true)
       // setCategoryPay(0);
       // setSelectedObl(0);
      //  setIsLoadrayon(true)
        //setSelectedOptionRay(0);
        //setSelectedOptionGrom(0)
       // setJobs(data);
       window.location.reload(true);
    }
    const toastig = async () => {
        await Swal.fire({
            icon: 'info',
            title: 'Увага!',
            html: '<p style=\'margin-top:0;margin-right:0;margin-bottom:8.0pt;margin-left:0;line-height:107%;font-size:14.0pt;font-family:Proba,sans-serif;text-align:justify;text-indent:14.0pt;\'><span style=\'font-size:19px;line-height:107%;font-family:Proba,serif;\'>Перед початком пошуку Вам необхідно знати:&nbsp;</span></p>\n' +
                '<ol>' +
                ' <li style="text-align:  justify;"><span style=\'line-height:107%;font-family:Proba,serif;font-family:Proba,serif;font-size:14.0pt;\'>Портал працює в довідковому режимі.&nbsp;</span></li>' +

                ' <li style="text-align:  justify;"><span style=\'line-height:107%;font-family:Proba,serif;font-family:Proba,serif;font-size:14.0pt;\'>Оновлення вакансій відбувається періодично протягом доби. &nbsp;</span></li>' +
                '<li style="text-align:  justify;"><span style=\'line-height:107%;font-family:Proba,serif;font-size:14.0pt;\'>Державна служба зайнятості не несе відповідальності за інформацію, подану іншими сайтами з пошуку роботи та роботодавцями без подання ними офіційної звітності за формою звітності № 3-ПН. Ресурс, який надав вакансію, вказаний у правому верхньому кутку вікна повідомлення у вигляді логотипа. </span>'
                +
                '<li style="text-align:  justify;"><span style=\'line-height:107%;font-family:Proba,serif;font-size:14.0pt;\'>Якщо Ви вважаєте, що знайдена Вами вакансія відповідає одному або декільком з наступних критеріїв:&nbsp;</span></li>' +
                '</ol>' +
'<p style="margin-left:30.0pt;">'+
                ' <li style="text-align:  justify;margin-left: 30.0pt;"><span style=\'line-height:107%;font-family:Proba,serif;font-size:14.0pt;\'>вакансія неактуальна;</span></li>' +
                '<li style="text-align:  justify;margin-left: 30.0pt;"><span style=\'line-height:107%;font-family:Proba,serif;font-size:14.0pt;\'>порушує вимоги чинного законодавства (підозра на спам, шахрайство, містить вимоги дискримінаційного характеру тощо);</span></li>' +
                '<li style="text-align:  justify;margin-left: 30.0pt;"><span style=\'line-height:107%;font-family:Proba,serif;font-size:14.0pt;\'>недійсні контакти (не працює/не відповідає вказаний номер телефону, email);</span></li>' +
                '<li style="text-align:  justify;margin-left: 30.0pt;"><span style=\'line-height:107%;font-family:Proba,serif;font-size:14.0pt;\'>інші причини,&nbsp;</span></li>' +

                '<span style=\'font-size:14.0pt;line-height:107%;font-family:Proba,serif;\'>пропонуємо негайно заповнити онлайн-форму: <span style="color:#0563C1;text-decoration:underline;"><a href="https://forms.gle/YDxTC56dq4ZsHmj36" target="_blank" rel="noopener noreferrer">https://forms.gle/YDxTC56dq4ZsHmj36</a></span></span></li>'
                +'</p>'+
                '<ol style="margin-left: 0;">' +
                '<li>' +
                '<h3 style=\'margin-right: 0; margin-left: 0; font-size: 18px; font-family: Proba, sans-serif; background: white; text-align:  justify;\'><span style="font-size:14.0pt;font-weight:normal;">Підписка за галуззю або регіоном та онлайн-підтримка &ndash; через чат-бот&nbsp;</span><a href=\'https://t.me/DCZWorkNowBbot\' target="_blank" rel="noopener noreferrer"> @DCZ_worknow_bot</a></h3>' +
                '</li>' +
                '<li>' +
                '<h3 style=\'margin-right: 0; margin-left: 0; font-size: 18px; font-family: Proba, sans-serif; background: white; text-align:  justify;\'><span style="font-size:14.0pt;font-weight:normal;">Зауваження та пропозиції щодо роботи єдиного порталу вакансій просимо направляти на email:<a href="mailto:dczvacancy@gmail.com" target="_blank" rel="noopener noreferrer"><span style="color:windowtext;text-decoration:none;">&nbsp; dczvacancy@gmail.com</span></a></span></h3>' +
                '</li>' +
                '</ol>',
            toast: false,
        })
    }
    const searchall = async () => {
        try {

            let valueAll = {
                search: searchText,
                otrasl: category,
                cityid: selectedOptionObl && !selectedOptionRay && !selectedOptionGrom ? selectedOptionObl.value.slice(0, 4)
                    : selectedOptionObl && selectedOptionRay && !selectedOptionGrom ? selectedOptionRay.value.slice(0, 7)
                        : selectedOptionObl && selectedOptionRay && selectedOptionGrom ? selectedOptionGrom.value.slice(0, 10) : '',
                salary: categoryPay[0]
            }
            console.log(valueAll)
            if (searchText && category && selectedOptionObl && categoryPay[0] || searchText || category || selectedOptionObl || categoryPay[0]) {
                setDisabled(false);
                setIsLoading(true);
                console.log(valueAll)
                const dataVacstart =
                    await axios.post(//'http://localhost:2237/api/vac/getAllChoice/', valueAll
                        "https://dczworknowbot.dcz.gov.ua:334/api/vac/getAllChoice/", valueAll
                    ).catch(() => {
                        // handle error:
                    })
                const dataVac = (dataVacstart.data).data
                console.log(dataVacstart)
                if (dataVac) {
                    const sortedvac = dataVac.sort((a, b) => (b.reg_date > a.reg_date) ? 1 : -1);
                    setJobs(sortedvac); ///  will served as filtered jobs data
                    setData(sortedvac);
                    // setDisabled(false);
                    setVisibility("visible")
                    setIsLoading(false);
                } else {
                    setDisabled(true);
                    setIsLoading(false);
                    await Swal.fire({
                        icon: 'info',
                        title: 'Увага!',
                        text: 'Вакансії відсутні!',
                        toast: true,
                    })
                }
            } else (
                await Swal.fire({
                    icon: 'error',
                    title: 'Увага!',
                    text: 'Не зроблено вибір. Оберіть параметр пошуку!',
                    toast: true,
                }))
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Row
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <Button
                    variant={'contained'}
                    color={'primary'}
                    icon={<SearchIcon/>}
                    shadowless
                    native
                    padding={'5px'}
                    onClick={toastig}
                    value={searchText}
                    sx={{
                        lineHeight: "1",
                        padding: '.5rem',
                        [theme.breakpoints.down('xl')]: {
                            //   width: 'max(75%)', lineHeight: "1", marginRight: "20%"
                        }, [theme.breakpoints.down('md')]: {
                            //  width: 'max(75%)', lineHeight: "1", marginRight: "20%"
                        }
                    }}
                >
                    Перед початком користування ознайомитись!
                </Button>
            </Row>
            <Row className={classes.containertwo} sx={{mt: 10}}>

                <FormControl size="small" className={classes.formControl1}>
                    <InputLabel htmlFor="jobs" className={classes.inputLabel}>
                        Пошук за назвою
                    </InputLabel>
                    <OutlinedInput
                        label="Введіть назву посади"
                        variant="outlined"
                        name="jobs"
                        onChange={handleSearch}
                        placeholder="Введіть назву посади"
                        value={searchText}
                        sx={{borderRadius: 5, position: 'relative'}}
                    />{' '}
                </FormControl>
            </Row>
            <Row style={{marginTop: '' + '1rem'}} className={classes.containertwo} sx={{mt: 10}}>
                <FormControl size="small" className={classes.formControl1}>
                    <InputLabel htmlFor="categories">Область</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="oblast"
                        variant="outlined"
                        sx={{borderRadius: 5}}
                        className={classes.inputStyle}
                        onChange={handleCategoryobl}

                        value={regionlocal.value}
                    >

                        {regionlocal.map((item, idx) => (
                            <MenuItem key={idx} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl size="small"  disabled={isLoadrayon} className={classes.formControl1}>
                    <InputLabel htmlFor="categories">Район</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="rayon"
                        variant="outlined"
                        sx={{borderRadius: 5}}
                        className={classes.inputStyle}
                        onChange={handleCategoryrayon}
                        value={rayon.value}
                    >
                        {rayon.map((item, idx) => (
                            <MenuItem key={idx} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl size="small" disabled={isLoadgromad} className={classes.formControl1}>
                    <InputLabel htmlFor="categories">Громада</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="gromada"
                        variant="outlined"
                        sx={{borderRadius: 5}}
                        className={classes.inputStyle}
                        onChange={handleCategorygromada}
                       // defaultValue={0}

                        value={gromada.value}
                    >

                        {gromada.map((item, idx) => (
                            <MenuItem key={idx} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" disabled={isLoad} className={classes.formControl1}>
                    <InputLabel htmlFor="categories">Галузь</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="category"
                        variant="outlined"
                        sx={{borderRadius: 5}}
                        className={classes.inputStyle}
                        onChange={handleCategory}
                        value={isLoad ? 0 : category}
                        defaultValue={0}
                        placeholder="Введіть назву">
                        <MenuItem value={0}>{'Всі'}</MenuItem>
                        {categoryLabel.map((item, idx) => (
                            <MenuItem key={idx} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl size="small" className={classes.formControl1}>
                    <InputLabel htmlFor="categories"> Заробітна плата (грн.) </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="categoryLabelPay"

                        variant="outlined"
                        sx={{borderRadius: 5}}
                        className={classes.inputStyle}
                        onChange={handleCategoryPay}
                        value={categoryPay}
                        defaultValue={0}
                        //  defaultValue={0}
                    >
                        <MenuItem value={0}>{'Всі'}</MenuItem>
                        {categoryLabelPay.map((item, idx) => (
                            <MenuItem key={idx} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </Row>
            <Row className={classes.container} sx={{mt: 10}}>
                <Button
                    variant={'contained'}
                    color={'primary'}
                    icon={<SearchIcon/>}
                    shadowless
                    native
                    padding={'5px'}
                    onClick={searchall}
                    placeholder="Введіть назву"
                    value={searchText}
                    sx={{
                        marginLeft: '10%',
                        fontFamily:'Proba',
                        marginTop: '1rem',
                        width: 'max(55%)', lineHeight: "1", marginRight: "2rem",
                        marginBottom: '2rem', padding: '.5rem',
                        [theme.breakpoints.down('xl')]: {
                            width: 'max(85%)', lineHeight: "1", marginRight: "2rem"
                        }, [theme.breakpoints.down('md')]: {
                            width: 'max(85%)', lineHeight: "1", marginRight: "2rem"
                        }
                    }}
                >
                    Шукати
                </Button>
                <Button
                    variant={'contained'}
                    color={'primary'}
                    icon={<SearchIcon/>}
                    shadowless
                    native
                    padding={'5px'}
                    onClick={resetall}
                    placeholder="Введіть назву"
                    value={searchText}
                    sx={{
                        marginLeft: '10%',
                        fontFamily:'Proba',
                        marginTop: '1rem',
                        width: 'max(55%)', lineHeight: "1", marginRight: "2rem",
                        marginBottom: '2rem', padding: '.5rem',
                        [theme.breakpoints.down('xl')]: {
                            width: 'max(85%)', lineHeight: "1", marginRight: "2rem"
                        }, [theme.breakpoints.down('md')]: {
                            width: 'max(85%)', lineHeight: "1", marginRight: "2rem"
                        }
                    }}
                >
                    Очистити
                </Button></Row>
            {!disabled ? (<>{isLoading ? (
                    <div className={classes.loading}>
                        <Typography className={classes.warning} variant="h3"
                                    sx={{fontSize: '2rem',fontFamily:'Proba', marginBottom: "3rem", marginLeft: '25%', marginRight: '25%'}}>
                            Зачекайте, отримуємо дані...
                            <CircularProgress/>
                        </Typography>
                        <ProgressBar now={60}/>
                    </div>) : <>
                    <Pagination/>
                    <JobBoard/>
                    <Pagination/>
                </>
                }</>) :
                <Card className={classes.cardstart} sx={{}} elevation={3}>

                    <CardContent className={classes.warning}>
                        <Typography className={classes.warning} style={{textAlign: 'center',fontFamily:'Proba'}}>
                            <h3><span>Вітаємо!</span><br/> Ми раді допомогти Вам знайти або змінити роботу!<br/>
                                Оберіть відповідні розділи та розпочнемо пошук!</h3>
                        </Typography>


                    </CardContent>

                </Card>}

        </>
    );
}

export default SearchBar;
