import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
let googleMap;

export default function MapComponent({apiKey}) {
  const ref = useRef();

  useEffect(() => {
    console.log("Map is ready");
    googleMap = new google.maps.Map(ref.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, []);

  return (
    
      <div ref={ref} className="map" />
  );
};
