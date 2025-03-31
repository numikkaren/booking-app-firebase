import React from "react";
import { MapContainer,TileLayer,Marker ,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map(){

    return(
        <div className="map-wrapper">
            <MapContainer center={[-41.2865, 174.7762]} zoom={13} style={{ height: "100%", width: "100%"}}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap contributors"
                />
            </MapContainer>
        </div>
    );
}

export default Map;
