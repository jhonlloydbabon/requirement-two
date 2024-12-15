import React from 'react';
import '../App.css';

// Component
import Header from '../components/HeaderDashboard';
import Cards from '../components/Cards';

function Home({...props}) {
    return (
        <div className='container'>
            <Header />
            <Cards />
        </div>
    );
}

export default Home;