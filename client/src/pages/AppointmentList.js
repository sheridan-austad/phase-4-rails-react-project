import React, {useState,  useEffect, useContext} from 'react';
import Appointment from './Appointment';
import {UserContext} from '../components/User'
// import PetCard from "./PetCard";
// import { Button } from "../styles";
// import { Link } from "react-router-dom";

const AppointmentList = () => {
    // const [appointments, setAppointments] = useState([]);
    const {user} = useContext(UserContext);

    // const userPets = user.pets
    //       console.log(userPets)
  return (
    <div>
        {/* <div className="wrapper">
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
      )} */}
    {/* </div> */}
        <h3 className="title">Here Are Your Appointments!</h3>
        {user.appointments.map((appointment) => <Appointment key={appointment.id} {...appointment}/>)}
    </div>
  )
}

export default AppointmentList