import React from "react";
import { MapContainer,TileLayer,Marker , Popup} from "react-leaflet";
import {Icon, divIcon} from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../assets/Marker-icon-red.png";
import MarkerClusterGroup from "react-leaflet-cluster";

function Map(){

    // create markers

    const markers = [

        {
            geocode: [-41.292034,174.800483],
            popup: "Hello, I'm pop up 1"
        },

        {
            geocode: [-41.317124,174.795262],
            popup: "Hello, I'm pop up 2"
        },

        {
            geocode: [-41.304371,174.795116],
            popup: "Hello, I'm pop up 3"
        },

    ];

    const customIcon = new Icon({
        //iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconUrl: markerIcon,
        iconSize:[38,38]
    })

    // const createCustomClusterIcon = (cluster) =>{
    //     return new divIcon(
    //         {}
    //     )

    // }

    return(
        <div className="map-wrapper">
            <MapContainer center={[-41.317124,174.795262]} zoom={13} style={{ height: "100%", width: "100%"}}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap contributors"
                />
                <MarkerClusterGroup
                //chunkedLoading
                //iconCreateFunction={createCustomClusterIcon}
                >
            {markers.map( (marker, index) => (
                <Marker key={index} position={marker.geocode} icon={customIcon}>
                    <Popup>{marker.popup}</Popup>
                </Marker>
            ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
}

export default Map;
