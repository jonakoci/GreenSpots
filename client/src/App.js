import React, {useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter }
    from "react-router-dom";
import HowTo from './components/HowTo'
import Main from './components/View/Main';
import AboutUs from './components/View/aboutUs/AboutUs';
import Header from './components/View/Header';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path="/how" element={<>
            <Header />
            <HowTo /> 
          </>} />  
          <Route path="/about" element={<>
          <Header />
          <AboutUs />
          </>} />  
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App