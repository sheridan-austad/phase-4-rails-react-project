import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, } from "../styles";
import { UserContext } from "../components/User";
import { useLocation, Redirect, useHistory } from 'react-router-dom'


const NewAppointment = () => {
  const {user} = useContext(UserContext);
  const location = useLocation()
  const locationState = location.state 
    console.log("STATE")
    console.log(location)
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [pet, setPet] = useState("");
//   const [walker, setPet] = useState();
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/api/appointments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                walk_time: time,
                walk_date: date,
                comments,
                walker_name: locationState.walkerName,
                pet_name: pet
            }),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => history.push('/api/appointments'));
            } 
            else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }

    if (!locationState?.walkerName) return <Redirect to="/walkers" />

  return (
      <Wrapper>
      <WrapperChild>
        <h1>New Appointment With: {locationState.walkerName}</h1>
        <form onSubmit={handleSubmit}>
            {/* Dropdown for pet */}
         <FormField>
            <Label htmlFor="date">Pet: </Label>
            <Input
              type="dropdown show"
              id="actions"
              name="pet_name"
              value={pet}
              onChange={(e) => setPet(e.target.value)}
            />
          </FormField> 
          {/* post fetch doesn't send information along */}
          {/* pet and walker have to objects */}
          {/* currentUser.createdappts.create in backend
          currentUser.pets - pet and walker string converted to an object, and then if its there display */}
         <FormField>
            <Label htmlFor="date">Date: </Label>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormField> 
          <FormField>
            <Label htmlFor="walk_time">Time: </Label>
            <Input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="comments">Comments: </Label>
            <Input
              type="text"
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Create Appointment"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewAppointment
