import { useEffect, useState } from "react";

function Appointment() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    
    fetch("/api/appointments")
      .then((r) => r.json())
      .then(setAppointments);
  }, []);
  
  // const setAppointments = appointments.map(appointments => appointments === appointments)

  return (
    <div>Appointments are here!</div>
  )
}

export default Appointment