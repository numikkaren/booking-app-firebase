import React from "react";
import AddEquipmentForm from "../AddEquipmentForm.jsx";
import EquipmentList from "../EquipmentList";


function OwnerLogin() {
  return (
    <div>
      <h1>Equipment Upload page</h1>
      <p>Upload your equipment details here:</p>
      <AddEquipmentForm />
      <EquipmentList />
    </div>
  );
}

export default OwnerLogin; // Default export

