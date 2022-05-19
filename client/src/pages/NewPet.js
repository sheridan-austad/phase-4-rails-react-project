import React, { useState,  useRef, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, } from "../styles";
import { UserContext } from "../components/User";

function NewPet() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const photo = useRef(null);
  const {setUser} = useContext(UserContext);
  // const [photo, setPhoto] = useState(null);


  function handleSubmit(e) {
    console.log("Hello, I'm submitting now")
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    const formData = new FormData(e.target)
    formData.append("name", name)
    formData.append("age", age)
    formData.append("species", species)
    formData.append("breed", breed)
    formData.append("bio", bio)
    // formData.append("photo", e.target.querySelector("#photo").value)
    // debugger

    fetch("/api/pets", {
      method: "POST",
      body: formData
      })
      .then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((pet) => setUser(currentUser => (
          {...currentUser, pets: [...currentUser.pets, pet]}
          )));
        history.push("/profile");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Please fill out the form to add a pet</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name: </Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="age">Age: </Label>
            <Input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="species">Species: </Label>
            <Input
              type="text"
              id="species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="breed">Breed: </Label>
            <Input
              type="text"
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="bio">Bio: </Label>
            <Input
              type="text"
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="mediaUrl">Picture of Your Pet: </Label>
            <Input
              type="file"
              name="photo"
              ref={photo}
              onChange={(e) => photo.current=(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Add Pet"}
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

export default NewPet;
