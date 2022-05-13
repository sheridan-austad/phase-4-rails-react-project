import React, {useState,  useEffect, useContext} from 'react';
import Appointment from './Appointment';
import {UserContext} from '../components/User'
import PetCard from "./PetCard";
import { Button } from "../styles";
import { Link } from "react-router-dom";

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const {user} = useContext(UserContext);

    useEffect(() => {
        fetch("/api/appointments")
         .then((r) => r.json())
         .then(appt => setAppointments(appt));
        }, []); 
        
    
    let userappointments = [];
    if(user.role === 'owner')
    {userappointments = appointments.filter(appointment => appointment.owner.username === user.username);
    } else if (user.role === 'walker')
    {userappointments = appointments.filter(appointment => appointment.walker.username === user.username);
    } 

    const userPets = appointments.filter(pet => pet.owner.username === user.username)

  return (
    <div>
        <div className="wrapper">
      {userPets.length > 0 ? (
        userPets.map((pet) => (
          <PetCard key={pet.id} {...pet}/>
        ))
      ) : (
        <>
          <h2>No animals are listed under your name</h2>
          <Button as={Link} to="/new">
            Add an animal
          </Button>
        </>
      )}
    </div>
        <Appointment key={appointments}/>
    </div>
  )
}

export default AppointmentList