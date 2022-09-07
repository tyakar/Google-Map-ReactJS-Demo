import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";
import Map from "./Map";

const apiKey = "AIzaSyD6AUPIR0eIiGldIIo0b06uqLxlZDyQh-I";

const data = [
    {id: 110, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -31.56391, lng: 147.154312, status: 1 },
    {id: 111, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -33.718234, lng: 150.363181, status: 2 },
    {id: 112, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -33.727111, lng: 150.371124, status: 3 },
    {id: 113, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -33.848588, lng: 151.209834, status: 2 },
    {id: 114, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -33.851702, lng: 151.216968, status: 2 },
    {id: 115, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -34.671264, lng: 150.863657, status: 1 },
    {id: 116, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -35.304724, lng: 148.662905, status: 3 },
    {id: 117, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -36.817685, lng: 175.699196, status: 2 },
    {id: 118, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -36.828611, lng: 175.790222, status: 1 },
    {id: 119, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -37.75, lng: 145.116667, status: 3 },
    {id: 120, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -37.759859, lng: 145.128708, status: 3 },
    {id: 121, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -37.765015, lng: 145.133858, status: 3 },
    {id: 122, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -37.770104, lng: 145.143299, status: 1 },
    {id: 123, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -37.7737, lng: 145.145187, status: 2 },
    {id: 124, title:"The Avondale - 2-6 Clydesdale Place, Pymble", lat: -37.774785, lng: 145.137978, status: 1 }
  ];

export default function App() {
  return (
    <Map apiKey={apiKey} data = {data} />
  );
}
