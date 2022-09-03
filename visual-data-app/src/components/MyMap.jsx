import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

import TopoJSON from "./../data/TopoJSON";
import topojson from "./../data/sidewalks.json";

class MyMap extends Component {
  state = {};

  // componentDidMount(){
  //     console.log(mapData)
  // }

  sidewalkStyle = {
    color: "yellow",
    weight: 1,
    // dashArray: 5,
  };

//   onEachSidewalk = (sidewalk, layer) => {
//     const sidewalkArea = sidewalk.properties.area;
//     console.log(sidewalk);
//     layer.bindPopup(sidewalkArea);
//   };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>NYC COVID Sidewalk Density Data</h1>
        <MapContainer
          style={{ height: "80vh" }}
          zoom={11}
          center={[40.73061, -73.935242]}
        >
          <TopoJSON
            style={this.sidewalkStyle}
            data={topojson}
            // onEachFeature={this.onEachSidewalk}
          />
          <TileLayer
            style={{ opacity: ".5" }}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    );
  }
}

export default MyMap;
