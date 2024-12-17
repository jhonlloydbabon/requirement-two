import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';

import Modal from './components/Modal';
import { useSelector } from 'react-redux';

function App() {
  const isModalActive = useSelector(state=>state.modal.status);
  
  return (
    <>
      {isModalActive?<Modal /> : <></>}
      <div className="container-fluid">
      <div className='row p-1 '>
        <Navigation />
        <div className='col-9'>
          <Router>
            <Routes>
              <Route path='/' element={<Home />}/>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
