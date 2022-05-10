import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles";
import PetCard from "./PetCard";
import {UserContext} from '../components/User'


function PetList() {
  const [pets, setPets] = useState([]);
  const {user} = useContext(UserContext);
 
  useEffect(() => {
    // if the location is pets fire the call
    // condition ? exprIfTrue : exprIfFalse
    fetch("/api/pets")
      .then((r) => r.json())
      .then(setPets);
  }, []);
// before pets.map 
  const userPets = pets.filter(pet => pet.owner.username === user.username)
  
  return (
    <div className="wrapper">
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
