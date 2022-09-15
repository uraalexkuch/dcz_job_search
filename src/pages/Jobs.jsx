import React, {useEffect, useState} from 'react';
import {JobsContext} from '../components/jobFolder/JobsContext';
import {makeStyles} from '@mui/styles';
import {Box, Button} from '@mui/material';
import JobPosts from '../components/jobFolder/JobPosts';
import './Jobs.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {theme} from "../CustomTheme";
import ScrollToTop from "../components/jobFolder/ScrollToTop";



const useStyles = makeStyles(() => ({
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
    const [categoryLabelPay, setCategoryLabelPay,] = useState([['мінімальна'], ['від 6501 грн. до 10 000 грн'], ['від 10 001 грн. до 20 000 грн'], ["від 20 001 грн. до 30 000 грн"], ["більше 30 001 грн"], ["договірна"]]);
    const [jobs, setJobs] = useState([]);
    const [categoryPay, setCategoryPay,] = useState(0);
    const [searchText, setSearchText] = useState();
    const [pageNumber, setPageNumber] = useState(0);
    const [category, setCategory] = useState(0);
    const [categoryRegion, setCategoryRegion,] = useState(0);
    const [sortedJobs, setSortedJobs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageLoad, setErrorMessageLoad] = useState('');
    const [categoryLabel, setCategoryLabel] = useState([
        'ІТ','HR','автобізнес','АПК', 'безпека_охорона','будівництво','державна_служба','дизайн','добувна',
        'енергетіка','зв\'язок','ЗМІ','інше','кафе_ресторан', 'клінінг/благоустрій','керівництво','краса_здоров\'я','культура_дозвілля',
          'логістика', 'маркетинг_реклама','медицина/аптека',  'нерухомість','оборона','освіта_наука',
        'послуги','початок кар\'єри', 'промисловість','робота_офіс','страхування', 'фінанси_аудит',
         'торгівля','туризм',    'юриспруденція'

          ]);
    const [categoryLabelRegion, setCategoryLabelRegion] = useState(['М.Київ', 'Вінницька', 'Волинська', 'Дніпропетровська', 'Донецька', 'Житомирська', 'Закарпатська', 'Запорізька',
        'Івано-Франківська', 'Київська', 'Кіровоградська', 'Луганська', 'Львівська', 'Миколаївська',
        'Одеська', 'Полтавська', 'Рівненська','Сумська', 'Тернопільська', 'Херсонська', 'Хмельницька','Харківська',
        'Черкаська', 'Чернівецька', ' Чернігівська']);
    const [isLoading] = useState(false);

    const [jobsModal, setJobsModal] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [Label, setLabel] = useState(["Подати вакансію"]);
    const [isLoad, setIsLoad] = useState(false);
    const jobsPerPage = 10;
    const pagesVisited = pageNumber * jobsPerPage;
    const pageCount = Math.ceil(jobs.length / jobsPerPage);
    useStyles();
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
    // const dataVac= [...dataVac0, ...dataVac1];
    //const datavacregion = dataVac.map((t)=>t.REGIONNAME);
    // const uniqregion=new Set(datavacregion)
    //const regionspisok=[...uniqregion]
   /* const sortedregion = ['м.Київ', 'Вінницька', 'Волинська', 'Дніпропетровська', 'Донецька', 'Житомирська', 'Закарпатська', 'Запорізька',
        'Івано-Франківська', 'Київська', 'Кіровоградська', 'Луганська', 'Львівська', 'Миколаївська',
        'Одеська', 'Полтавська', 'Рівненська', 'Тернопільська', 'Херсонська', 'Хмельницька',
        'Черкаська', 'Чернівецька', ' Чернігівська'
    ]
    //regionspisok.sort((a, b) => (a > b) ? 1 : -1);

    const otrasl = ['промисловість', 'державна_служба', 'логістика',
        'енергетіка', 'безпека_охорона', 'освіта_наука', 'медицина/аптека',
        'АПК', 'торгівля', 'інше', 'будівництво',
        'послуги', 'клінінг/благоустрій', 'фінанси_аудит',
        'добувна', 'нерухомість', 'ІТ',
        'культура_дозвілля', 'юриспруденція', 'кафе_ресторан',
        'страхування', 'зв\'язок', 'автобізнес',
        'оборона', 'ЗМІ', 'маркетинг_реклама',
        'туризм', 'краса_здоров\'я', 'HR',
        'початок кар\'єри', 'робота_офіс', 'керівництво', 'дизайн'
    ]
    const sortedotrasl = otrasl.sort((a, b) => (a > b) ? 1 : -1);*/


    const changeView = async () => {
        setLabel("До пошуку")
        setIsLoad(true)
        //setJobs(dataVac);
        //setLabel("В розрізі територій")
        console.log("переключил")
    }
    const changeView2 = async () => {
        setLabel("Подати вакансію")
        setIsLoad(false)
        // setJobs(dataVac);
        console.log("переключил2")
    }
    useEffect(() => {
      //fetchData();
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
            <Box className='containerbox' maxWidth="xxl" sx={{m: 'auto',}}>
                <Header/>
                <div className="changebutton">

                    <Button variant="contained" sx={{
                    [theme.breakpoints.down('xl')]: {
                        width: 'max(85%)', lineHeight: "1", marginRight: "2rem"
                    }, [theme.breakpoints.down('md')]: {
                        width: 'max(85%)', lineHeight: "1", marginRight: "2rem"
                    }
                }} onClick={(e) => {
                        e.preventDefault();
                        window.open('https://forms.gle/UdmbR5bEEuHLQbk37', '_blank');
                        //window.location.href='https://forms.gle/UdmbR5bEEuHLQbk37';

                    }}>Неактуальна вакансія?Сюди!
                    </Button>
                    </div>
                <JobPosts/>
                <Footer/>
            </Box>
        </JobsContext.Provider>

    )
        ;
}

export default Jobs;
