import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
let googleMap;

export default function MapComponent({ data }) {
  const ref = useRef();

  useEffect(() => {
    googleMap = new google.maps.Map(ref.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    addMarker(googleMap);
  }, []);

  const addMarker = (map) => {

    const createPopup = (aa, bb) =>{
      return '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">The Avondale - 2-6 Clydesdale Place, Pymble</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "sandstone rock formation in the southern part of the " +
      "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
      "south west of the nearest large town, Alice Springs; 450&#160;km " +
      "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
      "features of the Uluru - Kata Tjuta National Park. Uluru is " +
      "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
      "Aboriginal people of the area. It has many springs, waterholes, " +
      "rock caves and ancient paintings. Uluru is listed as a World " +
      "Heritage Site.</p>" +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
      "(last visited June 22, 2009).</p>" +
      "</div>" +
      "</div>";
    };

    const infowindow = new google.maps.InfoWindow({
      content: createPopup(),
    });


    // Create markers.
    for (let i = 0; i < data.length; i++) {
      let tmpIcon= getIcons(data[i]);
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng( data[i].lat,  data[i].lng),
        icon: tmpIcon,
        label: data[i].id.toString(),
        map: map,
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    
      
    }

    
  }

  function getIcons(item) {
        var color = ""; // marker fill colour
        var size = 0; // marker size
 

        switch (true) {
            case ( item.status == 1): color = '#88419D'; size = 24; break;   
            case ( item.status == 2): color = '#8C96C6'; size = 22; break;
            case (item.status == 3): color = '#B3CDE3'; size = 20; break;
            case ( item.status == 4): color = '#EDF8FB'; size = 18; break;
            case ( item.status == 5): color = '#2CA25F'; size = 16; break;
            case ( item.status == 6): color = '#99D8C9'; size = 15; break;
            case ( item.status == 7): color = '#525252'; size = 14; break;
        } 
        
        return {
          path: google.maps.SymbolPath.CIRCLE,
          scale: size,
          fillColor: color,
          fillOpacity: 0.8,
          strokeWeight: .1,
          name: item.title
      };
       
    };
    

  return (

    <div ref={ref} className="map" />
    
  );
};
