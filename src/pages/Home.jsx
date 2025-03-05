import React from "react";
import EquipmentList from "../Components/EquipmentList.jsx";

function Home() {
  return (
    <div>
      <h1>Welcome to Equipment Rental Home Page</h1>
      <p>Please see below for the equipment list for hire</p>
      <EquipmentList />
    </div>
  );
}

export default Home; // Default export

