import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchCompanyUser } from '../redux/actions/companyUser';
import '../App.css';

// Component
import Header from '../components/HeaderDashboard';
import Cards from '../components/Cards';
import SubHeader from '../components/SubHeader';
import Table from '../components/Table';


function Home({setIsModalActive}) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCompanyUser());
    },[])
    return (
        <div className='container'>
            <Header setIsModalActive={setIsModalActive}/>
            <Cards />
            <SubHeader />
            <Table />
        </div>
    );
}

export default Home;