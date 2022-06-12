import React, {useContext, useEffect} from 'react';
import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select,} from '@mui/material';
import swal from "sweetalert";
import {makeStyles} from '@mui/styles';
import {JobsContext} from './JobsContext';
import SearchIcon from '@mui/icons-material/Search';

import {Row} from "react-bootstrap";

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
        backgroundColor: "#FFD947",
        cursor: "pointer",
        order: "4",
        padding: "0 17px 0 14px",
        borderRadius: "0 50px 50px 0",
        height: "49px"
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
        setCategoryLabelPay,
        categoryRegion,
        setCategoryRegion,
        categoryLabelRegion,
        categoryLabel,
        setCategoryLabelRegion,
        setPageNumber,
    } = useContext(JobsContext);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setJobs(data);
    };

    const handleKeyDown = () => {
        //const reg = /[a-zA-Z0-9]/g;
        console.log(searchText)
        if (searchText === undefined || "") {
            //  console.log(data.author.center)
            swal("Помилка!", "Наберіть посаду або професію!", "error");
        } else {
            setJobs(
                data.filter((job) =>
                    job.VACNAME.toLowerCase().includes(searchText.toLocaleLowerCase()) || job.DESCRIPTION.toLowerCase().includes(searchText.toLocaleLowerCase())
                ))
            //setPageNumber(0);
            console.log(jobs)
        }
    };
    const handleStart = () => {
        setCategory(0);
        setCategoryRegion(0)
        setCategoryPay(0)
        setJobs(data);
    };
    const handleCategory = (e) => {
        setCategory(e.target.value);
        setJobs(data);
    };
    const handleCategoryRegion = (e) => {
        setCategoryRegion(e.target.value);
       // console.log(e.target.value)
        setJobs(data);
    };
    const handleCategoryPay = (e) => {
        setCategoryPay(e.target.value);
       // console.log(e.target.value)
        setJobs(data);
    };
    const classes = useStyles();
    useEffect(() => {
        if (categoryRegion !== 0) {
            setJobs(
                data.filter((job) =>
                    job.REGIONNAME.toLowerCase().includes(categoryRegion.toLocaleLowerCase())
                )
            )
            setCategory(0)
            setCategoryPay(0)
        } else setJobs(data);
        setCategory(0)
        setCategoryPay(0)
    }, [categoryRegion]);

    useEffect(() => {
        if (category !== 0&&categoryRegion !== 0) {
            setJobs(
                data.filter((job) =>
                    job.BRANCHNAME.toLowerCase()==category.toLocaleLowerCase()&&job.REGIONNAME.toLowerCase().includes(categoryRegion.toLocaleLowerCase()),
                )
            )
            setCategoryPay(0)
        }
        else if  (category !== 0) {
            setJobs(
                data.filter((job) =>
                    job.BRANCHNAME.toLowerCase()==category.toLocaleLowerCase(),
                )
            )
            setCategoryPay(0)
        }
        else setJobs(data);
    }, [category]);

    useEffect(() => {
        //setCategoryPay(0)
        if (categoryRegion!== 0&&category !== 0&&categoryPay !== 0) {
            const datastart= data.filter((job) =>
                job.BRANCHNAME.toLowerCase()==category.toLocaleLowerCase()&&job.REGIONNAME.toLowerCase().includes(categoryRegion.toLocaleLowerCase()),
            )
            setJobs(
                datastart.filter((job) => {
                    switch (categoryPay[0]) {
                        case 'мінімальна':
                            return job.SALARY > 1 && job.SALARY <6500;
                        case 'від 6501 грн. до 10 000 грн':
                            return job.SALARY > 6500 && job.SALARY < 10000;
                        case 'від 10 001 грн. до 20 000 грн':
                            return job.SALARY > 10000 && job.SALARY < 20000;
                        case 'від 20 001 грн. до 30 000 грн':
                            return job.SALARY > 20000 && job.SALARY < 30000;
                        case 'більше 30 001 грн':
                            return job.SALARY > 300000;
                        case 'договірна':
                            return job.SALARY<1;
                    }
                })
            )
            // setCategoryPay(0)
        }
        if (categoryRegion=== 0&&category === 0&&categoryPay !== 0) {

            setJobs(
                data.filter((job) => {
                    switch (categoryPay[0]) {
                        case 'мінімальна':
                            return job.SALARY > 1 && job.SALARY <6500;
                        case 'від 6501 грн. до 10 000 грн':
                            return job.SALARY > 6500 && job.SALARY < 10000;
                        case 'від 10 001 грн. до 20 000 грн':
                            return job.SALARY > 10000 && job.SALARY < 20000;
                        case 'від 20 001 грн. до 30 000 грн':
                            return job.SALARY > 20000 && job.SALARY < 30000;
                        case 'більше 30 001 грн':
                            return job.SALARY > 300000;
                        case 'договірна':
                            return job.SALARY<1;
                    }
                })
            )
            // setCategoryPay(0)
        }
        if (categoryRegion!== 0&&category === 0) {
            const datastart= data.filter((job) =>
               job.REGIONNAME.toLowerCase().includes(categoryRegion.toLocaleLowerCase()),
            )
            setJobs(
                datastart.filter((job) => {
                    switch (categoryPay[0]) {

                        case 'мінімальна':
                            return job.SALARY > 1 && job.SALARY <6500;
                        case 'від 6501 грн. до 10 000 грн':
                            return job.SALARY > 6500 && job.SALARY < 10000;
                        case 'від 10 001 грн. до 20 000 грн':
                            return job.SALARY > 10000 && job.SALARY < 20000;
                        case 'від 20 001 грн. до 30 000 грн':
                            return job.SALARY > 20000 && job.SALARY < 30000;
                        case 'більше 30 001 грн':
                            return job.SALARY > 300000;
                        case 'договірна':
                            return job.SALARY<1;
                    }
                })
            )
             setCategoryPay(0)
        }
               if (categoryRegion=== 0&&category !== 0) {
            const datastart= data.filter((job) =>
                job.BRANCHNAME.toLowerCase()==category.toLocaleLowerCase()
            )
            setJobs(
                datastart.filter((job) => {
                    switch (categoryPay[0]) {

                        case 'мінімальна':
                            return job.SALARY > 1 && job.SALARY <6500;
                        case 'від 6501 грн. до 10 000 грн':
                            return job.SALARY > 6500 && job.SALARY < 10000;
                        case 'від 10 001 грн. до 20 000 грн':
                            return job.SALARY > 10000 && job.SALARY < 20000;
                        case 'від 20 001 грн. до 30 000 грн':
                            return job.SALARY > 20000 && job.SALARY < 30000;
                        case 'більше 30 001 грн':
                            return job.SALARY > 300000;
                        case 'договірна':
                            return job.SALARY<1;
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
    }, [data]);
    //console.log(  data)
    return (

        <>
            <Row style={{marginTop: '2rem'}} className={classes.container} sx={{mt: 10}}>
                <FormControl size="small" className={classes.formControl1}>
                    <InputLabel htmlFor="jobs" className={classes.inputLabel}>
                        Пошук за назвою
                    </InputLabel>
                    <OutlinedInput
                        label="Search for Jobs"
                        variant="outlined"
                        onChange={handleSearch}
                        // onKeyPress={handleKeyDown}
                        placeholder="Введіть назву посади"
                        value={searchText}
                        sx={{borderRadius: 5, position: 'relative'}}
                    />{' '}
                </FormControl>
                <Button
                    variant={'contained'}
                    color={'primary'}
                    icon={<SearchIcon/>}
                    shadowless
                    padding={'5px'}
                    onClick={handleKeyDown}
                    placeholder="Введіть назву"
                    value={searchText}
                >
                    Шукати
                </Button>

            </Row>
            <Row style={{
                marginTop: '' +
                    '1rem'
            }} className={classes.containertwo} sx={{mt: 10}}>

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
                        placeholder="Введіть назву"
                    >
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

        </>
    );
}

export default SearchBar;
