import React from "react";
import MapwithMarkers from "./MapwithMarkers";
import Footer from "./Footer";
import Header from "./Header";
import InfoData2 from "./InfoData";

function Main() {
  return (
    <div style={{ margin: "20px" }}>
      <Header />
      <div
        style={{
          margin: "20px",
          padding: "10px",
          border: "1px solid #D3D3D3",
          borderRadius: "10px",
        }}
      >
        <MapwithMarkers />
      </div>
      <InfoData2 />
      <Footer />
    </div>
  );
}

export default Main;
