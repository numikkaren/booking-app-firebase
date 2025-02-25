import React, { useState } from "react";
import { db } from "./firebase"; // Import Firestore configuration
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods

function AddEquipmentForm() {
  // state objects for form inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState(true);
  // add image 
  const [image, setImage] = useState("");

  function nameChange(event) {
    setName(event.target.value); // Update name state
  }

  function descriptionChange(event) {
    setDescription(event.target.value); // Update description state
  }

  function availabilityChange(event) {
    setAvailability(event.target.checked); // Update availability state
  }

  function imageChange(event){
    setImage(event.target.value);
  }

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const newEquipment = { name, description, availability, image }; // Combine form data
    try {
      await addDoc(collection(db, "equipment"), newEquipment); // Save data to Firestore
      alert("Equipment has been added successfully!");
      // Reset form fields
      setName("");
      setDescription("");
      setAvailability(true);
      setImage("");
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div className="form-label">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={nameChange}
          required
        />
      </label>
      </div>
      <div className="form-label">
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={descriptionChange}
          required
        />
      </label>
      </div>
      <div className="form-label">
      <label>
        Availability:
        <input
          type="checkbox"
          checked={availability} 
          onChange={availabilityChange}
        />
      </label>
      </div>
      <div className="form-label">
      <label>
        Image URL: 
        <input 
          type="text"
          value={image}
          onChange={imageChange}
          placeholder="Enter image URL"
        />      
      </label>
      </div>
      <button className="button-submit" type="submit">Add Equipment</button>
    </form>
    </div>
  );
}

export default AddEquipmentForm;
