import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firestore configuration
import { collection, getDocs } from "firebase/firestore"; // Import Firestore and read data
import Equipment from "./Equipment.jsx";
import { query, where} from "firebase/firestore";   // import 

function EquipmentList( {user} ) {
  const [equipmentList, setEquipmentList] = useState([]); // State to store equipment data

  useEffect(() => {
    // Function to get equipment data from Firestore
    async function getEquipmentData() {
      try {
        // get the Firestore collection
        const equipmentRef = collection(db, "equipment");

        let q;

        if(user){
          q = query( equipmentRef , where("ownerId","==", user.uid));
        }else {
          q = equipmentRef;

        }

        // Get all documents in the collection
        const querySnapshot = await getDocs(q);
  
        // Create an array to store all the data
        const items = querySnapshot.docs.map((doc) => {
          const data = doc.data(); // Get the fields of the document
          const id = doc.id; // Get the document ID
  
          // Create a new equipment object with the ID and fields
          return {
            id: doc.id,
            name: data.name,
            description: data.description,
            availability: data.availability,
            image: data.image,
          };
        });
        // Update the state with the fetched data
        setEquipmentList(items);

      } catch (error) {
        console.error("Error getting equipment data:", error);
      }
    }
  
    // Call the function
      getEquipmentData();
  
  }, [user]); 
  

  return (
    <div className="equipment-list">
      
      {equipmentList.length > 0 ? (
        equipmentList.map((item) => (
          <Equipment
            key={item.id}
            name={item.name}
            description={item.description}
            availability={item.availability}
            image={item.image}
          />
        ))
      ) : (
        <p>Loading equipment...</p>
      )}
    </div>
  );
}

export default EquipmentList;
