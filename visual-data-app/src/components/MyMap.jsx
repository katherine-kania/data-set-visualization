import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

import TopoJSON from "./TopoJSON";
import topojson from "./../data/sidewalks.json";

const MyMap = () => {

  const sidewalkStyle = {
    color: "yellow",
    weight: 1,
    // dashArray: 5,
  };

  

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>NYC COVID Sidewalk Density Data</h1>
        <MapContainer
          style={{ height: "80vh" }}
          zoom={11}
          center={[40.73061, -73.935242]}
        >
          <TopoJSON
            style={sidewalkStyle}
            data={topojson}
          />
          <TileLayer
            style={{ opacity: ".5" }}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </>
  );
};

export default MyMap;
