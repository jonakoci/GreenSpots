import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MapwithMarkers from './MapwithMarkers';

function App() {
  return (
    <div className="App">
      <Header style={{marginBottom:"30px"}}/>
      <div style={{marginBottom:"40px", padding:"20px"}} >
        <MapwithMarkers/>
        </div>
      <Footer />
    </div>
  );
}

export default App;