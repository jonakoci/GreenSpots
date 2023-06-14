import React, {useEffect, useRef} from 'react';
import './App.css';

import MapwithMarkers from './components/View/MapwithMarkers';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter }
    from "react-router-dom";
import HowTo from '../src/components/HowTo'
import Main from './components/View/Main';
import AboutUs from './components/View/aboutUs/AboutUs';
import Header from './components/View/Header';
import Footer from './components/View/Footer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path="/how" element={<HowTo /> } />  
          <Route path="/about" element={<><Header/><AboutUs /></> } />  
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App