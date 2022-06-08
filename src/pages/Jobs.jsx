import React, {useEffect, useState} from 'react';
import {JobsContext} from '../components/jobFolder/JobsContext';
import {makeStyles} from '@mui/styles';
import {Box, Button} from '@mui/material';
import JobPosts from '../components/jobFolder/JobPosts';

import dataVac from "../data/vacancion.json";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/jobFolder/SearchBar";


const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        marginBottom: '2rem',
    },
}));

function Jobs() {
    const [data, setData] = useState([]);
    const [categoryCod, setCategoryCod] = useState([]);
    const [categoryLabelCod, setCategoryLabelCod] = useState([]);
    const [dataCod, setCod] = useState([]);
    const [categoryLabelPay,setCategoryLabelPay,] = useState([['мінімальна'], ['від 6501 грн. до 10 000 грн'], ['від 10 001 грн. до 20 000 грн'],["від 20 001 грн. до 30 000 грн"],["більше 30 001 грн"],["договірна"]]);
    const [jobs, setJobs] = useState([]);
    const [categoryPay,  setCategoryPay,] = useState(0);
    const [searchText, setSearchText] = useState();
    const [pageNumber, setPageNumber] = useState(0);
    const [category, setCategory] = useState(0);
    const [ categoryRegion,setCategoryRegion,] = useState(0);
    const [sortedJobs, setSortedJobs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageLoad, setErrorMessageLoad] = useState('');
    const [categoryLabel, setCategoryLabel] = useState([]);
    const [categoryLabelRegion,setCategoryLabelRegion] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [jobsModal, setJobsModal] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [Label, setLabel]= useState(["В розрізі територій"]);
    const jobsPerPage = 10;
    const pagesVisited = pageNumber * jobsPerPage;
    const pageCount = Math.ceil(data.length / jobsPerPage);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const searchStates = {
        data,
        dataCod,
        setCod,
        categoryCod,
        setCategoryCod,
        categoryLabelCod,
        setCategoryLabelCod,
        setData, // imported to sorted, searchBar
        jobs,
        setJobs, // imported to sorted, searchBar
        searchText, // imported to searchBar
        setSearchText, // imported to searchBar
        category, /// imported to searchBar
        setCategory, // imported to search Bar
        categoryRegion,
        setCategoryRegion,
        categoryLabelPay,
        setCategoryLabelPay,
        categoryPay,
        setCategoryPay,
        pageNumber, // imported to pagination
        setPageNumber, // imported to pagination
        sortedJobs, // imported to SortJobs
        setSortedJobs, // imported to SortJobs
        jobsModal, // imported to JobsModal
        setJobsModal, // imported to JobsModal
        jobsPerPage,
        pagesVisited,
        pageCount, // imported to pagination
        isLoading, // imported toJobPost
        errorMessage, // imported to JobPost
        setErrorMessage,
        isLoad, // imported toJobPost
        errorMessageLoad, // imported to JobPost
        setErrorMessageLoad,// imported to JobPost
        open,
        setOpen,
        handleOpen,
        handleClose,
        categoryLabelRegion,
        setCategoryLabelRegion,
        categoryLabel, // imported to SearchBar
        setCategoryLabel, // imported to SearchBar
    };
   const datavacregion = dataVac.map((t)=>t.REGIONNAME);
   const uniqregion=new Set(datavacregion)
    const regionspisok=[...uniqregion]
    const sortedregion =  regionspisok.sort((a, b) => (a > b) ? 1 : -1);
    const dataotrasl=dataVac.map(((t)=>t.BRANCHNAME));
   const uniqotrasl=new Set(dataotrasl)
    const otrasl=[...uniqotrasl]
    const sortedotrasl =  otrasl.sort((a, b) => (a > b) ? 1 : -1);
   const sortedvac= dataVac.sort((a, b) => (a.REG_DATE > b.REG_DATE) ? 1 : -1);
    const classes = useStyles();
    const fetchData = async () => {
        setIsLoading(true);
        try {
           // const {
              //  result,
              //  data: {datavac},
           // } = await axios(`https://remotive.com/api/remote-jobs?limit=200`);
            setJobs(sortedvac); ///  will served as filtered jobs data
            setData(sortedvac);
            setCategoryLabel(sortedotrasl);
            setCategoryLabelRegion(sortedregion);// will be used to declare ALL categories
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
        }
    };
const changeView=async () => {
    setLabel("вакансії")
    setIsLoad(true)
    //setJobs(dataVac);
        //setLabel("В розрізі територій")
console.log("переключил")}
    const changeView2=async () => {
        setLabel("В розрізі територій")
        setIsLoad(false)
       // setJobs(dataVac);
    console.log("переключил2")}
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        changeView()
    }, []);
    useEffect(() => {
        changeView2()
    }, []);

   //console.log( regionspisok)

    return (
        <JobsContext.Provider value={searchStates}>
            <Box className={classes.container} maxWidth="xxl" sx={{m: 'auto'}}>
                <Header/>

                <Button  style={{
                    marginLeft:"45%",width:"15%"
                }} variant="contained" onClick={!isLoad?changeView:changeView2}>{Label}</Button>

                 <JobPosts />
                <Footer/>
            </Box>
        </JobsContext.Provider>
    );
}

export default Jobs;
