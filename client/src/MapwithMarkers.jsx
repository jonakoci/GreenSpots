import React from 'react'
import { GoogleMap, LoadScript, Marker, TrafficLayer } from '@react-google-maps/api';
import leaf from './components/leafmarker.png'

function MapwithMarkers() {
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

      const onClick = (...args) => {
        console.log('onClick args: ', args)
      }
      
      const onLoad = trafficLayer => {
        console.log('trafficLayer: ', trafficLayer)
      }


  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyDKoUoidG1QOmO57mMj44HSIbCNNroE1kY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center} // Set the initial center of the map
          zoom={10}
          onClick={onClick}
        >
          <Marker position={point} icon={{url: leaf, scaledSize: {width: 50, height: 50}}}/>
          <TrafficLayer
            onLoad={onLoad}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapwithMarkers
