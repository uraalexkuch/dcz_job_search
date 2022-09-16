import React, {useContext, useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    FormControl,
    InputLabel, Link,
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
import button from "bootstrap/js/src/button";


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
        fontSize: '1.8rem',
        fontWeight: "bold",
        [theme.breakpoints.down('md')]: {
            fontSize: "1.3rem"
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
        e.target.value===""?setIsLoad(false):setIsLoad(true)
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
const resetall=() => {
    setSearchText("");
    setCategory(0);
    setCategoryRegion(0);
    setCategoryPay(0);
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
            if (searchText && category && categoryRegion && categoryPay[0]||searchText|| category || categoryRegion || categoryPay[0]) {
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
                if(dataVac){
                const sortedvac = dataVac.sort((a, b) => (b.reg_date > a.reg_date) ? 1 : -1);
                setJobs(sortedvac); ///  will served as filtered jobs data
                setData(sortedvac);
                // setDisabled(false);
                setVisibility("visible")
                setIsLoading(false);
               }else{
                    setDisabled(true);
                    setIsLoading(false);
                    await Swal.fire({
                    icon: 'info',
                    title: 'Увага!',
                    text: 'Вакансії відсутні!',
                    toast: true,
                })}
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
                <FormControl size="small"  disabled={isLoad} className={classes.formControl1}>
                    <InputLabel htmlFor="categories">Галузь</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="category"
                        variant="outlined"
                        sx={{borderRadius: 5}}
                        className={classes.inputStyle}
                        onChange={handleCategory}
                        value={isLoad?0:category}
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
                    <JobBoard/>
                    <Pagination/></>}</>) :
                <Card className={classes.cardstart} sx={{}} elevation={3}>

                    <CardContent className={classes.warning}>
                        <Typography className={classes.warning} style={{textAlign: 'center'}}>
                            <h3><span>Вітаємо!</span><br/> Ми раді допомогти Вам знайти або змінити роботу!<br/>
                                Оберіть відповідні розділи та розпочнемо пошук!</h3>
                        </Typography>
                        <Typography className={classes.warning} style={{textAlign: 'center'}}>
                            <h3>Зауваження та пропозиції щодо роботи єдиного порталу вакансій просимо направляти на email:<a
                                className="mailto" href="mailto:dczvacancy@gmail.com"> &nbsp;dczvacancy@gmail.com</a> <br/>З усіх інших питань просимо звертатись на онлайн-підтримку <a href='https://t.me/DCZWorkNowBbot' target="_blank" rel="noopener noreferrer"> @DCZworknowbbot</a></h3>
                        </Typography>

                    </CardContent>

                </Card>}

        </>
    );
}

export default SearchBar;
