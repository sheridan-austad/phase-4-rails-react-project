import React from 'react'
import PetList from '../pages/PetList'

const Profile = ({ user }) => {
  return (
    <div>
    <PetList user={user} />
    </div>
  )
}

export default Profile