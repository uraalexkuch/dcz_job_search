import React, {useEffect, useState} from 'react';
import {JobsContext} from '../components/jobFolder/JobsContext';
import {makeStyles} from '@mui/styles';
import SearchBar from '../components/jobFolder/SearchBar';
import {Box} from '@mui/material';
import JobPosts from '../components/jobFolder/JobPosts';
import dataCodif from "../data/cod.json";
import dataVac from "../data/vacancion.json";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "@mui/material/Button";
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
    const [categoryLabelPay,setCategoryLabelPay,] = useState([['меньше 10000 грн'], ['від 10000 грн до 30000 грн'], ['більше 30000 грн'],["за домовленністю"]]);
    const [jobs, setJobs] = useState([]);
    const [categoryPay,  setCategoryPay,] = useState([['меньше 10000 грн'], ['від 10000 грн до 30000 грн'], ['більше 30000 грн'],["за домовленністю"]]);
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
    const pageCount = Math.ceil(jobs.length / jobsPerPage);

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
    const dataRayon=dataCodif.filter((cod)=>{
            if(cod.category==="P"){
                return cod
            }
        }
    )
    const dataGromad=dataCodif.filter((cod)=>{
            if(cod.category==="H"){
                return cod
            }
        }
    )

   const datavacregion = dataVac.map((t)=>t.REGIONNAME);
   const uniqregion=new Set(datavacregion)
    const regionspisok=[...uniqregion]
    const dataotrasl=dataVac.map(((t)=>t.BRANCHNAME));
   const uniqotrasl=new Set(dataotrasl)
    const otrasl=[...uniqotrasl]
    const classes = useStyles();

    const fetchData = async () => {
        setIsLoading(true);
        try {
           // const {
              //  result,
              //  data: {datavac},

           // } = await axios(`https://remotive.com/api/remote-jobs?limit=200`);

            setCod(dataCodif);
            setJobs(dataVac); ///  will served as filtered jobs data
            setData(dataVac);
            setCategoryLabelCod(dataRayon);
            setCategoryLabel(otrasl);
            setCategoryLabelRegion(regionspisok);// will be used to declare ALL categories
            setIsLoading(false);



        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
        }
    };
const changeView=async () => {
    setLabel("вакансії")
    setIsLoad(true)

        //setLabel("В розрізі територій")
console.log("переключил")}
    const changeView2=async () => {
        setLabel("В розрізі територій")
        setIsLoad(false)

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
    console.log(  categoryLabelRegion)
    console.log(  categoryLabel)
    console.log(dataRayon)
    return (
        <JobsContext.Provider value={searchStates}>
            <Box className={classes.container} maxWidth="xxl" sx={{m: 'auto'}}>
                <Header/>
                <Button  style={{
                    marginLeft:"45%"
                }} variant="contained" onClick={!isLoad?changeView:changeView2}>{Label}</Button>
                <JobPosts/>
                <Footer/>
            </Box>
        </JobsContext.Provider>
    );
}

export default Jobs;
