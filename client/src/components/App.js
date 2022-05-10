import React, { useEffect, useContext} from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import PetCard from "../pages/PetCard";
import PetList from "../pages/PetList";
import NewPet from "../pages/NewPet";
import Profile from "./Profile";
import Home from "./Home";
import Appointment from "../pages/Appointment";
import SignUpForm from "./SignUpForm";
import './App.css';
import {UserContext } from "./User";

function App() {
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) 
  {
    console.log("Returning Login Page");
    return <Login/>;
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
            <PetList/> 
            <Appointment user={user}/>
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
            <Profile/>
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* CREATE HOME COMPONENT - Mission statement, etc. */}
          {/* Login HERE */}

        </Switch>
      </>

    );
  }
}

export default App;
