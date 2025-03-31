// App is the main layout component for my entire website. Components that should
// appear on every page : like Header and footer 
// call to AppRoutes, which decided wich page to show
// It is like the house frame 

import React, {useEffect, useState} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import AppRoutes from "./Routes.jsx"; 
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

    const [ user, setUser] = useState(null);
    const [ loading, setLoading] = useState (true);

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <Router>
     <div className="app-container">
       <Header />
        <main>
          <div className="container">
             <AppRoutes user={user} />
           </div>
        </main>
       <Footer />
    </div>
    </Router>
  );
}

export default App;
