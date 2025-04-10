// added user

import React, {useState} from "react";
import AddEquipmentForm from "../Components/AddEquipmentForm.jsx";
import EquipmentList from "../Components/EquipmentList.jsx";
import { logout } from "../firebase.js";
import { useNavigate } from "react-router-dom";

function Dashboard( {user} ) {
 
    const navigate = useNavigate();
    const [ activeTab, setActiveTab ] = useState("equipments");

    function handleLogout(){
        logout();
        navigate("/");   //Redirect to Home page
    }

  return (
 
    <div className="dashboard-wrapper">
       {/* Left Panel - Navigate panel */}    
      <div className="dashboard-left">
        <p>Dashboard - left panel</p>        
        <button onClick={ () => setActiveTab("equipments")}>Equipments</button>
        <button onClick={ () => setActiveTab("bookings") }>Bookings</button>
        <button onClick={ () => setActiveTab("payment")}>Payment</button>
        <button onClick={ () => setActiveTab("profile")}>Profile</button>
      </div>
      {/* Right Panel - Content */}
      <div className="dashboard-right">         

        {activeTab === "equipments" ? (
          <>
          <h1>Dashboard - Equipment Upload page</h1>
          <button className="button-submit" onClick={handleLogout}>
            Logout
          </button>
          <p>Upload your equipment details here:</p>
         
          <EquipmentList user = {user} /> 
          </>
        )  : null}

        {activeTab === "bookings" ? (
          <>
           <AddEquipmentForm user ={user} />
          </>
        )  : null }

        {activeTab === "payment" ? (
          <>
          <h2>Payment Tab</h2>
          </>
        ) : null }

        {activeTab === "profile" ? (
          <>
          <h2>Profile Tab</h2>
          </>
        ) : null }
 
      </div>
      </div>
  );
}

export default Dashboard; // Default export     

