import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';

import Modal from './components/Modal';

function App() {
  const [isModalActive, setIsModalActive] = useState(true);
  return (
    <>
      {isModalActive?<Modal /> : <></>}
      <div className="container-fluid">
      <div className='row p-1 '>
        <Navigation />
        <div className='col-9'>
          <Router>
            <Routes>
              <Route path='/' element={<Home setIsModalActive={setIsModalActive}/>}/>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
