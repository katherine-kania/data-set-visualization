import React, { useRef, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import * as topojson from "topojson-client";

export default function TopoJSON(props) {
  const layerRef = useRef(null);
  const { data, ...otherProps } = props;

  function addData(layer, jsonData) {
    if (jsonData.type === "Topology") {
      for (let key in jsonData.objects) {
        let geojson = topojson.feature(jsonData, jsonData.objects[key]);
        layer.addData(geojson);
      }
    } else {
      layer.addData(jsonData);
    }
  }
  
  function onEachFeature(feature, layer) {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmedText}`);
    }
  }
  
  useEffect(() => {
    const layer = layerRef.current;
    addData(layer, props.data);
  }, [props.data]);
  

  return (
    <>
      <GeoJSON ref={layerRef} {...otherProps} data={data} onEachFeature={onEachFeature} />
    </>
  );
}
