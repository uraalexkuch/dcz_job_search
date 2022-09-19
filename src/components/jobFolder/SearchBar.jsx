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
        categoryRegion,
        setCategoryRegion,
        categoryLabelRegion,
        categoryLabel,
    } = useContext(JobsContext);

    // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    const handleSearch = (e) => {

        setSearchText(e.target.value);
        setJobs(data);
        setCategory(0)
        e.target.value === "" ? setIsLoad(false) : setIsLoad(true)
    };
    const handleCategory = (e) => {

        setCategory(e.target.value)
        //setCategory(e.target.value);
        setJobs(data);
    };
    const handleCategoryRegion = (e) => {

        setCategoryRegion(e.target.value);
        setJobs(data);
    };
    const handleCategoryPay = (e) => {

        setCategoryPay(e.target.value);
        // console.log(e.target.value)
        setJobs(data);
    };
    const classes = useStyles();
    const resetall = () => {
        setSearchText("");
        setIsLoad(false)
        setCategory(0);
        setCategoryRegion(0);
        setCategoryPay(0);
    }
    const toastig = async () => {
        await Swal.fire({
            icon: 'info',
            title: 'Увага!',
            html: '<p style=\'margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;text-indent:35.4pt;\'><span style=\'font-size:19px;line-height:107%;font-family:"Times New Roman",serif;\'>Перед початком пошуку Вам необхідно знати:&nbsp;</span></p>\n' +
                '<ol>' +
                ' <li style="text-align: left;"><span style=\'line-height:107%;font-family:"Times New Roman",serif;font-family:"Times New Roman",serif;font-size:14.0pt;\'>Оновлення вакансій відбувається щоденно.&nbsp;</span></li>' +
                '<li style="text-align: left;"><span style=\'line-height:107%;font-family:"Times New Roman",serif;font-size:19px;\'>Державна служба зайнятості не несе відповідальності за інформацію, подану іншими сайтами з пошуку роботи та роботодавцями без подання офіційної звітності за формою звітності № 3-ПН.</span>' +
                '<span style=\'line-height:107%;font-family:"Times New Roman",serif;font-family:"Times New Roman",serif;font-size:14.0pt;\'>&nbsp;</span><span style=\'line-height: 107%; font-family: "Times New Roman", serif; font-size: 18px;\'>Подавач вакансії вказаний у лівому верхньому кутку обраної вами вакансії. </span></li>' +
                '<li style="text-align: left;"><span style=\'line-height:107%;font-family:"Times New Roman",serif;font-size:19px;\'>Якщо Ви вважаєте, що знайдена Вами вакансія відповідає одному або декільком з наступних критеріїв:&nbsp;</span></li>' +
                '</ol>' +
                ' <li style="text-align: left;"><span style=\'line-height:107%;font-family:"Times New Roman",serif;font-size:19px;\'>вакансія неактуальна;</span></li>' +
                '<li style="text-align: left;"><span style=\'line-height:107%;font-family:"Times New Roman",serif;font-size:19px;\'>порушує вимоги чинного законодавства (підозра на спам, шахрайство, містить вимоги дискримінаційного характеру тощо);</span></li>' +
                '<li style="text-align: left;"><span style=\'line-height:107%;font-family:"Times New Roman",serif;font-size:19px;\'>недійсні контакти (не працює/не відповідає вказаний номер телефону, email);</span></li>' +
                '<li style="text-align: left;"><span style=\'line-height:107%;font-family:"Times New Roman",serif;font-size:19px;\'>інші причини,&nbsp;</span></li>' +
                ' <li style="margin-top: 0cm; margin-right: 0cm; margin-bottom: 8pt; line-height: 107%; font-size: 15px; font-family: Calibri, sans-serif; text-align: left;"><span style=\'font-size:19px;line-height:107%;font-family:"Times New Roman",serif;\'>пропонуємо негайно заповнити онлайн-форму: <span style="color:#0563C1;text-decoration:underline;"><a href="https://forms.gle/YDxTC56dq4ZsHmj36">https://forms.gle/YDxTC56dq4ZsHmj36</a></span></span></li>'

        +'</ol>'+
        '<ol style="margin-left: 26px;">'+
            '<li>'+
                '<h3 style=\'margin-right: 0cm; margin-left: 0cm; font-size: 18px; font-family: "Times New Roman", serif; background: white; text-align: left;\'><span style="font-size:19px;font-weight:normal;">Підписка за галуззю або регіоном та онлайн-підтримка &ndash; через чат-бот&nbsp;</span><a href=\'https://t.me/DCZWorkNowBbot\' target="_blank" rel="noopener noreferrer"> @DCZworknowbbot</a></h3>'+
            '</li>'+
            '<li>'+
                '<h3 style=\'margin-right: 0cm; margin-left: 0cm; font-size: 18px; font-family: "Times New Roman", serif; background: white; text-align: left;\'><span style="font-size:19px;font-weight:normal;">Зауваження та пропозиції щодо роботи єдиного порталу вакансій просимо направляти на email:<a href="mailto:dczvacancy@gmail.com" target="_blank" rel="noopener noreferrer"><span style="color:windowtext;text-decoration:none;">&nbsp; dczvacancy@gmail.com</span></a></span></h3>'+
            '</li>'+
        '</ol>',
            toast: false,
        })
    }
    const searchall = async () => {
        try {
            console.log(categoryRegion)
            console.log(category)
            let valueAll = {
                search: searchText,
                otrasl: category,
                regionname: categoryRegion,
                salary: categoryPay[0]
            }
            console.log(valueAll)
            if (searchText && category && categoryRegion && categoryPay[0] || searchText || category || categoryRegion || categoryPay[0]) {
                setDisabled(false);
                setIsLoading(true);
                const dataVacstart =
                    await axios.post(
                        "https://dczworknowbot.dcz.gov.ua:334/api/vac/getAllChoice/", valueAll
                    ).catch(() => {
                        // handle error
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
            style={{ display:'flex',
                justifyContent:'center',}}>
                <Button
            variant={'contained'}
            color={'primary'}
            icon={<SearchIcon/>}
            shadowless
            native
            padding={'5px'}
            onClick={toastig }
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
            Перед початком користування  ознайомитись!
        </Button>
            </Row>
            <Row className={classes.containertwo} sx={{mt: 10}}>

                <FormControl size="small" className={classes.formControl1}>
                    <InputLabel htmlFor="jobs" className={classes.inputLabel}>
                        Пошук за назвою
                    </InputLabel>
                    <OutlinedInput
                        label="Search for Jobs"
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
                    <InputLabel htmlFor="categories">Регіон</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="categoryRegion"
                        variant="outlined"
                        sx={{borderRadius: 5}}
                        className={classes.inputStyle}
                        onChange={handleCategoryRegion}
                        value={categoryRegion}
                    >
                        <MenuItem value={0}>{'Всі'}</MenuItem>
                        {categoryLabelRegion.map((item, idx) => (
                            <MenuItem key={idx} value={item}>
                                {item}
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
                        // marginRight:'25%',
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
                        // marginRight:'25%',
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
                                    sx={{fontSize: '2rem', marginBottom: "3rem", marginLeft: '25%', marginRight: '25%'}}>
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
                        <Typography className={classes.warning} style={{textAlign: 'center'}}>
                            <h3><span>Вітаємо!</span><br/> Ми раді допомогти Вам знайти або змінити роботу!<br/>
                                Оберіть відповідні розділи та розпочнемо пошук!</h3>
                        </Typography>


                    </CardContent>

                </Card>}

        </>
    );
}

export default SearchBar;
