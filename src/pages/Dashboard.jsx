import React, {useState} from "react";
import AddEquipmentForm from "../Components/AddEquipmentForm.jsx";
import EquipmentList from "../Components/EquipmentList.jsx";
import { logout } from "../firebase.js";
import { useNavigate } from "react-router-dom";

function Dashboard() {
 
    const navigate = useNavigate();

    function handleLogout(){
        logout();
        navigate("/");   //Redirect to Home page
    }

  return (
    <div>
      <h1>Dashboard - Equipment Upload page</h1>
      <button className="button-submit" onClick={handleLogout}>
            Logout
        </button>
      <p>Upload your equipment details here:</p>
      <AddEquipmentForm />
      <EquipmentList />
    </div>
  );
}

export default Dashboard; // Default export

