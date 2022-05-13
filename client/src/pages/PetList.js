import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles";
import PetCard from "./PetCard";
import {UserContext} from '../components/User'


function PetList() {
  const [pets, setPets] = useState([]);
  const {user} = useContext(UserContext);
 
  // useEffect(() => {
    // if the location is pets fire the call
    // condition ? exprIfTrue : exprIfFalse
  //   fetch("/api/pets")
  //     .then((r) => r.json())
  //     .then(setPets);
  // }, []);
// before pets.map 
  // const user.pets = pets.filter(pet => pet.owner.username === user.username)
  
  return (
    <div className="wrapper">
      {user.pets.length > 0 ? (
        user.pets.map((pet) => (
          <PetCard key={pet.id} {...pet}/>
        ))
      ) : (
        <>
          <h2>No Animals Are Listed Under Your Name</h2>
          <Button as={Link} to="/pets/new">
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
