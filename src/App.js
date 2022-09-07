import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";
import Map from "./Map";

const apiKey = "AIzaSyD6AUPIR0eIiGldIIo0b06uqLxlZDyQh-I";

export default function App() {
  return (
    <Map apiKey={apiKey}/>
  );
}
