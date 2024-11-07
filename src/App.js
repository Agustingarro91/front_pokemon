import './App.css';
import Form from './Components/Form/Form.jsx';
import Detail from './Components/Detail/Detail';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import {Routes, Route, useLocation} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import { useState, useEffect } from "react";
import axios from 'axios';
import Error from './Components/Error';

function App() {
  const location = useLocation();






  return (
    <div className="App">      
      {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:name' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/error' element={<Error error = {'Feos'}/>}/>
        

      </Routes>
      
    </div>
  );
}

export default App;
