import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import { Button } from "../styles";
import PetCard from "./PetCard";
// import Stack from '@mui/material/Stack';


function PetList({user}) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("/api/pets")
      .then((r) => r.json())
      .then(setPets);
  }, []);

  const userPets = pets.filter(pet => pet.owner.username === user.username)
  console.log("username")
  console.log(user)
  return (
    <div className="wrapper">
      {userPets.length > 0 ? (
        userPets.map((pet) => (
          <PetCard key={pet.id} {...pet}/>

          // <Recipe key={pet.id}>
          //   <Box>
          //     <h2>{pet.title}</h2>
          //     <p>
          //       <em>Time to Complete: {pet.minutes_to_complete} minutes</em>
          //       &nbsp;·&nbsp;
          //       {/* <cite>By {recipe.user.username}</cite> */}
          //     </p>
          //     <ReactMarkdown>{pet.instructions}</ReactMarkdown>
          //   </Box>
          // </Recipe>
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
  );
}

// const Wrapper = styled.section`
//   max-width: 800px;
//   margin: 40px auto;
// `;

// const Recipe = styled.article`
//   margin-bottom: 24px;
// `;

export default PetList;
