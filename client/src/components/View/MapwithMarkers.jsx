
import React, { useEffect, useState, useRef } from "react";

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
  const [available, setAvailable] = useState();
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef(null);


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
    setZoom(15); // Update the zoom level to zoom in on the selected marker
  };
  
  const onCloseClick = () => {
    setSelectedMarker(null);
    setZoom(12);
  };
  
  const getMarkerIcon = (point) => {
    if (point.available) {
      return { url: leaf, scaledSize: { width: 50, height: 50 } };
    } else {
      return { url: redleaf, scaledSize: { width: 50, height: 50 } };
    }
  };
  
  const handleStatus = () => {
    if (selectedMarker) {
      const pointId = selectedMarker.id;
      const updatedPoints = points.map((point) => {
        if (point.id === pointId) {
          return {
            ...point,
            available: !selectedMarker.available,
          };
        }
        return point;
      });
  
      axios
        .patch(`http://localhost:8000/api/users/edit/${pointId}`, {
          available: !selectedMarker.available,
        })
        .then((res) => {
          setPoints(updatedPoints);
          setSelectedMarker((prevSelectedMarker) => ({
            ...selectedMarker,
            available: !selectedMarker.available,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  

  return (
    <div>
      <div class="row justify-content-center m-3">
                  <div>
                      <form class="card">
                          <div class="card-body row align-items-center justify-content-evenly">
                              <div class="col-9">
                                  <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Address, city" />
                              </div>
                              <div class="col-auto">
                                  <button class="btn btn-lg btn-success" type="submit">Search</button>
                              </div>
                              <div class="col-auto">
                                  <img src={locationLogo} alt="currentLocation" width={'40px'} />
                              </div>
                          </div>
                      </form>
                  </div>

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
    </div>
  );
}

export default MapwithMarkers;
