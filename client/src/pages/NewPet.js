import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
// import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewPet({ pet }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [bio, setBio] = useState("");
  const [image_url, setImage] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        species,
        breed,
        bio,
        image_url
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
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
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="breed">Breed: </Label>
            <Input
              type="text"
              id="breed"
              value={breed}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="bio">Bio: </Label>
            <Input
              type="text"
              id="bio"
              value={bio}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="image_url">Picture of your pet: </Label>
            <Input
              type="url"
              id="image_url"
              value={image_url}
              onChange={(e) => setName(e.target.value)}
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
      {/* <WrapperChild>
        <h1>{name}</h1>
        <p>
          <em>Time to Complete: {age} minutes</em>
          &nbsp;·&nbsp;
          <cite>By {pet}</cite>
        </p>
        <ReactMarkdown>{species}</ReactMarkdown>
      </WrapperChild> */}
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
