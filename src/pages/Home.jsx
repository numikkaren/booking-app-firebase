import React from "react";
import EquipmentList from "../Components/EquipmentList.jsx";
import Map from "../Components/Map.jsx";

function Home({user}) {
  return (
    <div className="home-wrapper">            {/*  flex container */} 
      <div className="home-left">        
        <h1>Welcome to Equipment Rental Home Page</h1>

        <p>Please see below for the equipment list for hire</p>
        <EquipmentList user = {user} />
      </div>
      <div className="home-right">
        <Map/>
      </div>    
    </div>
  );
}

export default Home; // Default export

