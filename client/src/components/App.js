import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import PetList from "../pages/PetList";
// import NewRecipe from "../pages/NewRecipe";
import OwnerPage from "../pages/OwnerPage";
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        // set to user in context - authentication
        // global versus local state
      }
    });
  }, []);

  console.log(user)

  if (!user) 
  {
    console.log("Returning Login Page");
    return <Login onLogin={setUser} />;
  }
  else
  {
    console.log("Returning Full Page")
    return (
      <>
        <NavBar user={user} setUser={setUser} />
        { user.role === "owner" ? <OwnerPage user={user}/> : 
        user.role === "walker" ? <div> Walker Page Not Found </div>: <div>Admin Page Not Found</div>}
      </>

      // CLEANER WAY TO DO THIS???
    );
  }
}

export default App;
