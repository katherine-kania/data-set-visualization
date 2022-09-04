import React, { useRef, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import * as topojson from "topojson-client";
import Legend from "./Legend";

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
    if (feature.properties) {
      const { area } = feature.properties;
      layer.bindPopup(`${area}`);
    }
  }

  
  useEffect(() => {
    const layer = layerRef.current;
    addData(layer, props.data);
  }, [props.data]);
  
  console.dir(data.features[0])
  // console.dir(data.features.properties)

  return (
    <>
      <GeoJSON ref={layerRef} {...otherProps} onEachFeature={onEachFeature} />
      <div>
          <Legend ref={layerRef} {...otherProps} onEachFeature={onEachFeature}/>
      </div>
    </>
  );
}
