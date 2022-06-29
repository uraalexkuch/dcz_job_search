import React, {useContext, useState} from 'react';
import {
    Button,
    Card,
    CardContent, CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
} from '@mui/material';

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
    const {
        jobs,
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
    };


    const handleCategory = (e) => {
        setCategory(e.target.value);

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


    const searchall = async () => {
        setDisabled(false);
        try {
            console.log(categoryRegion)
            console.log(category)
            let valueAll = {
                search:searchText,
                otrasl: category,
                regionname: categoryRegion,
                salary:categoryPay[0]
            }
            console.log(valueAll)

            const dataVacstart =
                await axios.post(
                    "https://dczworknowbot.dcz.gov.ua:334/api/vac/getAllChoice/", valueAll
                ).catch(() => {
                    // handle error

                })

            const dataVac = (dataVacstart.data).data
            console.log(dataVacstart)
            const sortedvac = dataVac.sort((a, b) => (a.reg_date > b.reg_date) ? 1 : -1);
            setJobs(sortedvac); ///  will served as filtered jobs data
            setData(sortedvac);
            // setDisabled(false);
            setVisibility("visible")
            setIsLoading(false);
            console.log(visibility)
        } catch (error) {
            console.log(error);
        }
    }
    /*  useEffect(() => {
        searchall();
    }, []);
  useEffect(async () => {
        if (categoryRegion !== 0 && category === 0) {
            setDisabled(false);
            setIsLoading(true);
            try {
                console.log(categoryRegion)
                const dataVacstart = await axios(
                    "http://localhost:5000/api/vac/getRegion/" + categoryRegion
                );
                const dataVac = (dataVacstart.data).data
                console.log(dataVac)
                const sortedvac = dataVac.sort((a, b) => (a.reg_date > b.reg_date) ? 1 : -1);
                setJobs(sortedvac); ///  will served as filtered jobs data
                setData(sortedvac);
                // setDisabled(false);
                setVisibility("visible")
                setIsLoading(false);
                console.log(visibility)
            } catch (error) {
                console.log(error);
            }

            // data.filter((job) =>
            //     job.regionname.toLowerCase().includes(categoryRegion.toLocaleLowerCase())
            // )

            //setCategory(0)
            //setCategoryPay(0)
        }
        if (category !== 0 && categoryRegion !== 0 || category === "Всі" && categoryRegion !== 0) {
            setDisabled(false);
            setJobs(
                data.filter((job) =>
                    job.branchnname.toLowerCase() === category.toLocaleLowerCase() && job.regionname.toLowerCase().includes(categoryRegion.toLocaleLowerCase()),
                ))
            setCategoryPay(0)
        }
        //else setJobs(data);
        //setCategory(0)
        //  setCategoryPay(0)

    }, [//categoryRegion
    ]);
   /* useEffect(async () => {
        if (category !== 0 && categoryRegion === 0) {
            setDisabled(false);
            //setIsLoading(true);list.filter(item => {
            //   const itemTags = item.tags.split(', ');
            //   return tags.every(t => itemTags.includes(t));
            try {
                console.log(category)
                const dataVacstart = await axios(
                    "http://localhost:5000/api/vac/getOtrasl/", category
                );
                const dataVac = (dataVacstart.data).data
                console.log(dataVac)
                const sortedvac = dataVac.sort((a, b) => (a.reg_date > b.reg_date) ? 1 : -1);
                setJobs(sortedvac); ///  will served as filtered jobs data
                setData(sortedvac);
                // setDisabled(false);
                setIsLoading(false);
                console.log(visibility)
            } catch (error) {
                console.log(error);
            }
            /* setJobs(
                 data.filter((job) =>
                     job.branchnname.toLowerCase()===category.toLocaleLowerCase(),
                 )
             )
            setCategoryPay(0)
        }
        if (category !== 0 && category === "Всі" && categoryRegion !== 0 || category === "Всі" && categoryRegion !== 0) {
            setDisabled(false);
            //setIsLoading(true);
            setJobs(
                data.filter((job) =>
                    job.branchnname.toLowerCase() === category.toLocaleLowerCase() && job.regionname.toLowerCase().includes(categoryRegion.toLocaleLowerCase()),
                ))
            setCategoryPay(0)
        }
        //else setJobs(data);
    }, [//category
    ]);*/
    /*useEffect(async () => {
        if (categoryPay !== 0) {
            setDisabled(false);
            setIsLoading(true);
            try {
                console.log(category)
                const dataVacstart = await axios(
                    "http://localhost:5000/api/vac/getOtrasl/", category
                );
                const dataVac = (dataVacstart.data).data
                console.log(dataVac)
                const sortedvac = dataVac.sort((a, b) => (a.reg_date > b.reg_date) ? 1 : -1);
                setJobs(sortedvac); ///  will served as filtered jobs data
                setData(sortedvac);
                // setDisabled(false);

                setIsLoading(false);
                console.log(visibility)
            } catch (error) {
                console.log(error);
            }
        }
        /* setJobs(
             data.filter((job) =>
                 job.branchnname.toLowerCase()===category.toLocaleLowerCase(),
             )
         )
        else setJobs(data);
    }, [category]);
    /* useEffect(async () => {
        if (category !== 0 && categoryRegion !== 0) {
            setDisabled(false);
            setIsLoading(true);
            setJobs(
                data.filter((job) =>
                    job.branchnname.toLowerCase() === category.toLocaleLowerCase() && job.regionname.toLowerCase().includes(categoryRegion.toLocaleLowerCase()),
                ))
            /* try {
                 console.log(category)
                 const dataVacstart = await axios(
                     "http://localhost:5000/api/vac/getOtrasl0/"+category+categoryRegion
                 );
                 const dataVac=(dataVacstart.data).data
                 console.log(dataVac)
                 const sortedvac = dataVac.sort((a, b) => (a.reg_date > b.reg_date) ? 1 : -1);
                 setJobs(sortedvac); ///  will served as filtered jobs data
                 setData(sortedvac);
                 // setDisabled(false);
                 setVisibility("visible")
                 setIsLoading(false);
                 console.log(visibility)
             } catch (error) {
                 console.log(error);
             }
             setJobs(
                 data.filter((job) =>
                     job.branchnname.toLowerCase()===category.toLocaleLowerCase()&&job.regionname.toLowerCase().includes(categoryRegion.toLocaleLowerCase()),
                 )

            setCategoryPay(0)
        } else if (category !== 0) {
            setDisabled(false);
            setJobs(
                data.filter((job) =>
                    job.branchnname.toLowerCase() === category.toLocaleLowerCase(),
                )
            )
            /* try {
                 console.log(category)
                 const dataVacstart = await axios(
                     "http://localhost:5000/api/vac/getOtrasl/"+category
                 );
                 const dataVac=(dataVacstart.data).data
                 console.log(dataVac)
                 const sortedvac = dataVac.sort((a, b) => (a.reg_date > b.reg_date) ? 1 : -1);
                 setJobs(sortedvac); ///  will served as filtered jobs data
                 setData(sortedvac);
                 // setDisabled(false);
                 setVisibility("visible")
                 setIsLoading(false);
                 console.log(visibility)
             } catch (error) {
                 console.log(error);
             }
             setJobs(
                 data.filter((job) =>
                     job.branchnname.toLowerCase()===category.toLocaleLowerCase(),
                 )
             )
            setCategoryPay(0)
        } else setJobs(data);
    }, [category]);*/


/*useEffect(() => {
        //setCategoryPay(0)
        if (categoryRegion !== 0 && category !== 0 && categoryPay !== 0) {
            const datastart = data.filter((job) =>
                job.branchnname.toLowerCase() === category.toLocaleLowerCase() && job.regionname.toLowerCase().includes(categoryRegion.toLocaleLowerCase()),
            )
            setJobs(
                datastart.filter((job) => {
                    switch (categoryPay[0]) {
                        case 'мінімальна':
                            return job.salary > 1 && job.salary < 6500;
                        case 'від 6501 грн. до 10 000 грн':
                            return job.salary > 6500 && job.salary < 10000;
                        case 'від 10 001 грн. до 20 000 грн':
                            return job.salary > 10000 && job.salary < 20000;
                        case 'від 20 001 грн. до 30 000 грн':
                            return job.salary > 20000 && job.salary < 30000;
                        case 'більше 30 001 грн':
                            return job.salary > 300000;
                        case 'договірна':
                            return job.salary < 1;
                    }
                })
            )
            // setCategoryPay(0)
        }
        if (categoryRegion === 0 && category === 0 && categoryPay !== 0) {

            setJobs(
                data.filter((job) => {
                    switch (categoryPay[0]) {
                        case 'мінімальна':
                            return job.salary > 1 && job.salary < 6500;
                        case 'від 6501 грн. до 10 000 грн':
                            return job.salary > 6500 && job.salary < 10000;
                        case 'від 10 001 грн. до 20 000 грн':
                            return job.salary > 10000 && job.salary < 20000;
                        case 'від 20 001 грн. до 30 000 грн':
                            return job.salary > 20000 && job.salary < 30000;
                        case 'більше 30 001 грн':
                            return job.salary > 300000;
                        case 'договірна':
                            return job.salary < 1;
                    }
                })
            )
            // setCategoryPay(0)
        }
        if (categoryRegion !== 0 && category === 0) {
            const datastart = data.filter((job) =>
                job.regionname.toLowerCase().includes(categoryRegion.toLocaleLowerCase()),
            )
            setJobs(
                datastart.filter((job) => {
                    switch (categoryPay[0]) {

                        case 'мінімальна':
                            return job.salary > 1 && job.salary < 6500;
                        case 'від 6501 грн. до 10 000 грн':
                            return job.salary > 6500 && job.salary < 10000;
                        case 'від 10 001 грн. до 20 000 грн':
                            return job.salary > 10000 && job.salary < 20000;
                        case 'від 20 001 грн. до 30 000 грн':
                            return job.salary > 20000 && job.salary < 30000;
                        case 'більше 30 001 грн':
                            return job.salary > 300000;
                        case 'договірна':
                            return job.salary < 1;
                    }
                })
            )
            setCategoryPay(0)
        }
        if (categoryRegion === 0 && category !== 0) {
            const datastart = data.filter((job) =>
                job.branchnname.toLowerCase() === category.toLocaleLowerCase()
            )
            setJobs(
                datastart.filter((job) => {
                    switch (categoryPay[0]) {

                        case 'мінімальна':
                            return job.salary > 1 && job.salary < 6500;
                        case 'від 6501 грн. до 10 000 грн':
                            return job.salary > 6500 && job.salary < 10000;
                        case 'від 10 001 грн. до 20 000 грн':
                            return job.salary > 10000 && job.salary < 20000;
                        case 'від 20 001 грн. до 30 000 грн':
                            return job.salary > 20000 && job.salary < 30000;
                        case 'більше 30 001 грн':
                            return job.salary > 300000;
                        case 'договірна':
                            return job.salary < 1;
                        default :
                            return job;
                    }
                })
            )
            // setCategoryPay(0)
        }

//else setJobs(data)
        // else setCategoryPay(0)

    }, [categoryPay]);
    useEffect(() => {
        setJobs(data);
        console.log('working');
    }, [data]);*/
    //console.log(  data)


    return (
        <>
            <Row className={classes.container} sx={{mt: 10}}>
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
                <FormControl size="small" className={classes.formControl1}>
                    <InputLabel htmlFor="categories">Галузь</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="category"
                        variant="outlined"
                        sx={{borderRadius: 5}}
                        className={classes.inputStyle}
                        onChange={handleCategory}
                        value={category}
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
                sx={{marginLeft:'20%',
                   // marginRight:'25%',
                    marginTop:'1rem',
                    width: 'max(55%)', lineHeight: "1", marginRight: "2rem",
                    marginBottom:'2rem',padding:'.5rem',
                    [theme.breakpoints.down('xl')]: {
                        width: 'max(85%)', lineHeight: "1", marginRight: "2rem"
                    }, [theme.breakpoints.down('md')]: {
                        width: 'max(85%)', lineHeight: "1", marginRight: "2rem"
                    }
                }}
            >
                Шукати
            </Button></Row>
            {!disabled ? (<>{isLoading ? (
                    <div className={classes.loading}>
                        <Typography className={classes.warning} variant="h3" sx={{ fontSize: '2rem',marginBottom:"3rem", marginLeft:'25%',marginRight:'25%'}}>
                           Зачекайте, отримує дані...
                          <CircularProgress />
                        </Typography>
                        <ProgressBar now={60} />
                    </div>):<>
                    <JobBoard/>
                    <Pagination/></>}</>) :
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
