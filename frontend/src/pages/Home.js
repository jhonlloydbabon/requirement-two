import React from 'react';
import '../App.css';

// Component
import Header from '../components/HeaderDashboard';
import Cards from '../components/Cards';
import SubHeader from '../components/SubHeader';
import Table from '../components/Table';

function Home({setIsModalActive}) {
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