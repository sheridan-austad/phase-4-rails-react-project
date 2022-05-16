import React , {useContext} from 'react'
import PetList from '../pages/PetList'
import {UserContext} from './User'

function Profile() {
  const {user} = useContext(UserContext);
  if (!user) return <h2> Please Login to View Profile</h2>;
  return (
    <div>
      {user && <h2>Welcome back {user.name}!</h2>}
      {user && <h2>{user.avatar}!</h2>}
     <PetList /> 
     {/* inside petlist - do we need to pass pets or pass it into petlist by itself
     if user or if walker or inside the petlist component // */}
    </div>
  );
}

export default Profile