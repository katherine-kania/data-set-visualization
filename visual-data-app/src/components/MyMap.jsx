import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'
import mapData from './../data/sidewalks.json'
import 'leaflet/dist/leaflet.css'
import './MyMap.css'

class MyMap extends Component {
    state = {};

    // componentDidMount(){
    //     console.log(mapData)
    // }

    sidewalkStyle = {
        color: 'yellow',
        weight: 1,
        // dashArray: 5,
    };



    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>NYC COVID Sidewalk Density Data</h1>
                <MapContainer style={{ height:'80vh' }} zoom={11} center={[40.730610, -73.935242]}>
                    <GeoJSON style={this.sidewalkStyle} data={mapData.features}/>
                <TileLayer style={{ opacity: '.5' }} 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                </MapContainer>
            </div>
            )
    }
}

export default MyMap;