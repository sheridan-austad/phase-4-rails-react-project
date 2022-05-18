import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles";
import PetCard from "./PetCard";
import {UserContext} from '../components/User'


function PetList() {
  const [pets, setPets] = useState([]);
  const {user} = useContext(UserContext);
 
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

export default PetList;
