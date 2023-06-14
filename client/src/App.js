import React, {useEffect, useRef} from 'react';
import './App.css';

import MapwithMarkers from './components/View/MapwithMarkers';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter }
    from "react-router-dom";
import HowTo from '../src/components/HowTo'
import Main from './components/View/Main';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path="/how" element={<HowTo /> } />  
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App