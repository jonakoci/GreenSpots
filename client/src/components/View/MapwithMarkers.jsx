import React, { useEffect, useState, useRef } from "react";
import {Link} from "react-router-dom";


import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer,
  TrafficLayer,
} from "@react-google-maps/api";
import leaf from "../logos/leafmarker.png";
import redleaf from "../logos/redLeaf.png";
import locationLogo from "../logos/currentLocation.png";
import axios from "axios";

function MapwithMarkers() {
  const [points, setPoints] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [directions, setDirections] = useState(null);
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef(null);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        setPoints(res.data.points);
        console.log(res.data.points);
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
  
  
  const handleDirections = () => {
    if (navigator.geolocation && selectedMarker) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const directionsService = new window.google.maps.DirectionsService();

          const request = {
            origin: currentPosition,
            destination: {
              lat: selectedMarker.lat,
              lng: selectedMarker.lng,
            },
            travelMode: window.google.maps.TravelMode.DRIVING,
          };

          directionsService.route(request, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const deletePoint = (pointId) => {
    axios.delete('http://localhost:8000/api/users/' + pointId)
        .then(res => {
            setPoints(points.filter(point => point._id != pointId)); 
        })
        .catch(err => console.log(err))
}


  return (
    <div>
      <div class="row justify-content-center m-3">

      <div>
        <LoadScript googleMapsApiKey="AIzaSyA0KPhwZR5KH-57FNVgalP2KLFpvq1XDAE">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={
              selectedMarker
                ? { lat: selectedMarker.lat, lng: selectedMarker.lng }
                : center
            }
            zoom={zoom}
            onClick={onClick}
            ref={mapRef}
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
                  <button onClick={handleDirections}>Directions</button>
                  <div className="d-flex" style={{ marginTop: '10px' }}>
                  <Link to={"/edit/" + selectedMarker._id }><button style={{ marginRight: '10px' }}>Edit</button></Link>
                  <button onClick={() => deletePoint(selectedMarker._id)}>Delete</button>
                  </div>
                  
                </div>
              </InfoWindow>
            )}
            {directions && (
            <DirectionsRenderer
              options={{
                directions: directions,
              }}
            />
          )}
            <TrafficLayer onLoad={onLoad} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
    </div>

  );
}

export default MapwithMarkers;