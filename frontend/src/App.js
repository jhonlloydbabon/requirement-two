import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div className="container-fluid">
      <div className='row p-1 '>
        <Navigation />
        <div className='col-9'>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
