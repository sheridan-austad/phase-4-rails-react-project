import React, {useContext} from 'react';
import AppointmentCard from './AppointmentCard';
import {UserContext} from '../components/User'
import { Button } from "../styles";
import { Link } from "react-router-dom";

const AppointmentList = () => {
    const {user} = useContext(UserContext);

    console.log("USER APPOINTMENTS");
    console.log(user.appointments)
    console.log("FINISHED")

  return (
    <div>
        <h3 className="title"> Here Are Your Appointments!</h3>
      <div>
        <Button as={Link} to="/walkers">
         New Appointment
        </Button>
      </div>
        {user.appointments.map((appointment) => {
          //console.log(appointment);
        return (<AppointmentCard key={appointment.id} {...appointment}/>)
      })}
    </div>
  )
}

export default AppointmentList