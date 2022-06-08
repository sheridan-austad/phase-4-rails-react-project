import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, FormField, Input, Label } from "../styles";
import React, { useState, useContext } from "react";
import { UserContext } from "../components/User";
import { useHistory } from 'react-router-dom'


function AppointmentCard({ appointment }) {

    appointment = appointment?.appointment || appointment
    // allowing the delete function to work
    const itemDeletedEvent = new Event("ItemDeleted")
    // setting state and history for future functions
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [comment, setComment] = useState(appointment.comments);
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    // console.log("this is an appointment")
    // console.log(appointment)
    const [apptID] = useState(appointment?.id);

    console.log(`Appointment ID: ${apptID}`)

    function deleteAppt() {
        setErrors([]);
        setIsLoading(true);

        // console.log("Deleting appointment " + appointment.appointment?.id)
        fetch(`/api/appointments/${apptID}`, {
            method: 'delete'
        }).then((r) => {
            // debugger
            console.log("DELETE FINISHED")
            if (r.ok) {
                setUser(currentUser => {
                    // filter all the appt whos id is not the one we want to remove
                    const newAppts = currentUser.appointments.filter((appt) => {
                        const otherId = appt.id || appt.appointment?.id
                        const different = apptID !== otherId
                        console.log("Comparing " + apptID + " to " + otherId)
                        // debugger
                        return different;
                    });

                    return { ...currentUser, appointments: newAppts }
                })
            }
            else {
                // only kicks in if there is a problem
                r.json().then((err) => setErrors(err.errors));
            }
        });
        // creating the deleteButton function
        // getting a reference to the delete button in the document
        const deleteButton = document.querySelector(`#deleteBtn${apptID}`)
        // console.log(deleteButton);
        deleteButton.textContent = "DELETING...";
        // telling the program that an item has been deleted
        document.dispatchEvent(itemDeletedEvent)

    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/api/appointments/${apptID}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ comments: comment })
        }).then((r) => {
            if (!r.ok) {
                r.json().then((err) => setErrors(err.errors));
            }
        })
            .catch(error => console.log(error))
    }
console.log(appointment.appointment?.walk_time || appointment?.walk_time)
    return (
        <div>
            {/* creating the card */}
            <Card className="card" elevation={0}>

                <CardContent align="center">
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h5" component="h3" color="secondary" gutterBottom>
                            Pet: {appointment?.pet_id}
                        </Typography>
                        <Typography variant="h5" component="h3" color="secondary">
                            Owner: {appointment.owner_id}
                        </Typography>
                        <Typography variant="h5" component="h3" color="secondary">
                            Walker: {appointment?.walker_id}
                        </Typography>
                        <Typography variant="h5" component="h3" color="secondary">
                            Walk Time: {appointment.appointment?.walk_time || appointment?.walk_time}
                        </Typography>
                        <Typography variant="h5" component="h3" color="secondary">
                            When: {appointment?.walk_date}
                        </Typography>
                        <FormField>
                            <Typography variant="h5" component="h3" color="secondary">
                                Comments About the Walk:
                                <Input
                                    type="text"
                                    id="comments"
                                    autoComplete="off"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />&nbsp;
                            </Typography> &nbsp; &nbsp;
                            {/* creating the edit button for comments */}
                            <Button>Update Comment</Button> &nbsp; &nbsp; &nbsp;
                        </FormField>
                        {/* creating the delete button for the appointments */}
                    </form><br></br>
                    <Button id={`deleteBtn${apptID}`} onClick={deleteAppt}>Delete Appointment</Button>
                </CardContent>

            </Card>
        </div>
    )
}


export default AppointmentCard