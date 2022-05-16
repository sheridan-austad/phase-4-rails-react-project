import React, {useContext} from 'react';
import Appointment from './Appointment';
import {UserContext} from '../components/User'

const AppointmentList = () => {
    const {user} = useContext(UserContext);

  return (
    <div>
        <h3 className="title"> Here Are Your Appointments!</h3>
        {user.appointments.map((appointment) => <Appointment key={appointment.id} {...appointment}/>)}
    </div>
  )
}

export default AppointmentList