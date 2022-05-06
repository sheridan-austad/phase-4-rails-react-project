import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import PetCard from "../pages/PetCard";
import PetList from "../pages/PetList";
import NewPet from "../pages/NewPet";
import Profile from "./Profile";
import OwnerPage from "../pages/OwnerPage";
import SignUpForm from "./SignUpForm";
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();


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


  function onLogin(userObj) {
    setUser(userObj)
    history.push("/profile") 
  }

  // context - user to global 
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
        <Switch>
          <Route path='/pets/new'>
            <NewPet/>
          </Route>
         <Route path='/pets/:petId/appointments/new'>
            {/* <PetList/>  */}
          </Route> 
          <Route path='/pets/:id'>
            <PetCard/>
          </Route>
          <Route path='/pets'>
            <PetList/> 
          </Route>
          <Route path='/pets/new'>
            <NewPet/>
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          {/* CREATE PROFILE */}
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
          {/* CREATE HOME COMPONENT - Mission statement, etc. */}
          {/* Login HERE */}

        </Switch>
        {/* { user.role === "owner" ? <OwnerPage user={user}/> : 
        user.role === "walker" ? <div> Walker Page Not Found </div>: <div>Admin Page Not Found</div>}
         */}
      </>

      // CLEANER WAY TO DO THIS???
    );
  }
}

export default App;
