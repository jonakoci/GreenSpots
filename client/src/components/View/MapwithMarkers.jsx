import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  TrafficLayer,
} from "@react-google-maps/api";
import leaf from "../logos/leafmarker.png";
import redleaf from "../logos/redLeaf.png";
import axios from "axios";

function MapwithMarkers() {
  const [points, setPoints] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        setPoints(res.data.points);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const containerStyle = {
    height: "600px",
    width: "100%",
  };

  const center = {
    lat: 41.3275,
    lng: 19.8187,
  };

  const infoWindowStyles = {
    backgroundColor: "white",
    borderRadius: "5px",
    height: "50px",
    width: "100px"
  };

  const onClick = (...args) => {
    console.log("onClick args: ", args);
  };

  const onLoad = (trafficLayer) => {
    console.log("trafficLayer: ", trafficLayer);
  };

  
  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const onCloseClick = () => {
    setSelectedMarker(null);
  };
  
  const getMarkerIcon = (point) => {
    if (point.available) {
      return { url: leaf, scaledSize: { width: 50, height: 50 } };
    } else {
      return { url: redleaf, scaledSize: { width: 50, height: 50 } };
    }
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyDKoUoidG1QOmO57mMj44HSIbCNNroE1kY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={onClick}
        >
          {points.map((point, index) => (
            <Marker
              key={point.id}
              position={{ lat: point.lat, lng: point.lng }}
              icon={getMarkerIcon(point)}
              onClick={() => onMarkerClick(point)}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              onCloseClick={onCloseClick}
              options={{
                pixelOffset: new window.google.maps.Size(0, -30), // Adjust the vertical position of the InfoWindow
              }}
            >
              <div style={{ width: '100px', height: 'auto' }}>
                <p>{selectedMarker.title}</p>
                <p>{selectedMarker.description}</p>
                <button>Directions</button>
              </div>
            </InfoWindow>
          )}
          <TrafficLayer onLoad={onLoad} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapwithMarkers