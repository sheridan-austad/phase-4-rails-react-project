import React, {useContext}from 'react'
import { useLocation } from 'react-router-dom'
import {UserContext} from './User'

const NewAppointment = () => {

  const {user} = useContext(UserContext);
    const location = useLocation()
    const{walkerName, walkerId} = location.state 
    console.log("STATE")
    console.log(location)
  return (
    <div>New appointment for walker {walkerName}</div>
  )
}

export default NewAppointment