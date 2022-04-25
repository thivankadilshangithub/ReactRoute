import './App.css';
import { Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './Components/HeaderBar/Navbar';

import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Project from './Components/Pages/Project/Project';

function App() {
  return (
    <div className="App">
       <Navbar />
  <Routes>
      <Route exact path='/' element={<Home/>} /> 
      <Route  path='/about' element={<About/>} /> 
      <Route  path='/project' element={<Project/>} /> 
      <Route  path='/contact' element={<Contact/>} /> 
  </Routes>
    </div>
  );
}

export default App;
