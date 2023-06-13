import React from 'react';
import './App.css';
import { GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api';

const containerStyle = {
  height: '600px',
  width: '100%'
};

const center = {
  lat: 41.3275,
  lng: 19.8187
};

const point = {
  lat:41.331781, 
  lng:19.81583
}


function App() {
  return (
    <div className="App">
      <LoadScript googleMapsApiKey="AIzaSyDKoUoidG1QOmO57mMj44HSIbCNNroE1kY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center} // Set the initial center of the map
          zoom={10}
        >
            <MarkerF position={point} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;