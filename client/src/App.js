import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MapwithMarkers from './MapwithMarkers';

function App() {
  return (
    <div>
      <Header/>
      <div style={{margin:"10px", padding:"10px"}}>
       <SearchBar />
      </div>
      <div style={{margin:"20px", padding:"10px", border:"1px solid #d3d3d3", borderRadius:"10px"}}>
        <MapwithMarkers/>
      </div>  
      <Footer />
    </div>
  );
}

export default App;