import React, {useEffect, useRef} from 'react';
import './App.css';
import { GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api'; 
import Map from './components/Map';

function App() {

  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App