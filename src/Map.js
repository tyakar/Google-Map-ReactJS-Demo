import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";
import "./styles.css";

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

export default function Map({apiKey, data}) {

  return (
    <Wrapper
        apiKey={apiKey}
        render={render}
      >
        <MapComponent data = {data }/>
      </Wrapper>
  );
};
