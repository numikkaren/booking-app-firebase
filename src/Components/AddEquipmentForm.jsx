import React, { useState } from "react";
import { db } from "../firebase.js"; // Import Firestore configuration
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

function AddEquipmentForm({user}) {
  // state objects for form inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState(true);
  // add image 
  //const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  function nameChange(event) {
    setName(event.target.value); // Update name state
  }

  function descriptionChange(event) {
    setDescription(event.target.value); // Update description state
  }

  function availabilityChange(event) {
    setAvailability(event.target.checked); // Update availability state
  }

  // function imageChange(event){
  //   setImage(event.target.value);
  // }

  function imageChange (event) {
      setImageFile(event.target.files[0]);     // store the file object
  }

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let imageURL = "";

    if (imageFile){
        const storageRef = ref(storage, `images/${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        imageURL = await getDownloadURL(storageRef);  // get the URL after upload
    }

    const newEquipment = { 
      name,
      description, 
      availability, 
      image: imageURL,                   
      ownerId: user.uid,
      createdAt: new Date().toISOString()
      
     }; // Combine form data
    try {
      await addDoc(collection(db, "equipment"), newEquipment); // Save data to Firestore
      alert("Equipment has been added successfully!");
      // Reset form fields
      setName("");
      setDescription("");
      setAvailability(true);
      setImageFile(null);
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
  <label htmlFor="imageUpload">Upload Image:</label>

  <input
    type="file"   // file Picker  
    id="imageUpload"
    accept="image/*"
    style={{ display: "none" }}    // hide default style
    onChange={imageChange}
  />

  <label htmlFor="imageUpload" className="button-submit">
    Upload Photo
  </label>

  {imageFile && <p>Selected: {imageFile.name}</p>}
</div>


      <button className="button-submit" type="submit">Add Equipment</button>
    </form>
    </div>
  );
}

export default AddEquipmentForm;
