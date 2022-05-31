import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from "../styles";
import React, { useState, useContext } from "react";
import { UserContext } from "../components/User";
import { useHistory } from 'react-router-dom'


function AppointmentCard({ appointment }) {
    const itemDeletedEvent = new Event("ItemDeleted")
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();


    function deleteAppt() {
        setErrors([]);
        setIsLoading(true);

        console.log("Deleting appointment " + appointment.appointment?.id)
        fetch(`/api/appointments/${appointment.appointment?.id}`, {
            method: 'delete'
        }).then((r) => {
            if (r.ok) {
                setUser(currentUser => {

                    //Get the index of this card's appointment within the current user's appointment list
                    const index = currentUser.appointments.indexOf(appointment)

                    //Create a copy of the current user's appointment list
                    const appointmentsCopy = [...currentUser.appointments]

                    //Remove the item at the specified index
                    appointmentsCopy.splice(index, 1)

                    //Create a copy of the current user, and set the copy's appointments to the new appointment list with the item deleted
                    const userCopy = { ...currentUser, appointments: appointmentsCopy }

                    //Return the userCopy object to become the new currentUser
                    return userCopy
                })
                history.push('/api/appointments');
            }
            else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
        // creating the deleteButton function
        // getting a reference to the delete button in the document
        const deleteButton = document.querySelector(`#deleteBtn${appointment.appointment?.id}`)
        console.log(deleteButton);
        deleteButton.textContent = "DELETING...";
        // telling the program that an item has been deleted
        document.dispatchEvent(itemDeletedEvent)

    }

    console.log("AppointmentID")
    console.log(appointment.appointment?.id)
    return (
        <div>
            <Card className="card" elevation={0}>

                <CardContent align="center">
                    <Typography variant="h5" component="h3" color="secondary" gutterBottom>
                        Pet: {appointment.appointment?.pet_id || appointment?.pet_id}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Owner: {appointment.owner?.name}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Walker: {appointment?.walker?.name}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Walk Time: {appointment.appointment?.walk_time || appointment?.walk_time}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        When: {appointment.appointment?.walk_date || appointment?.walk_date}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Comments About the Walk: {appointment.appointment?.comments || appointment?.comments}
                    </Typography>

                    <Button id={`deleteBtn${appointment.appointment?.id}`} onClick={deleteAppt}>DELETE</Button>
                </CardContent>

            </Card>
        </div>
    )
}


export default AppointmentCard