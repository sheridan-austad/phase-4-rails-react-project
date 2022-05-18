import React , {useContext} from 'react'
import { Button } from "../styles";
import {UserContext} from './User';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function WalkerProfile({name, bio}) {
  const {user} = useContext(UserContext);
  const avatarURL = user.avatar === null ? "" : user.avatar.url;

//   if (!user) return <h2> Please Login to View Profile</h2>;
  console.log(user)
  return (
    <div>
        <h1>Please Choose a Walker</h1>
        <Card className="card" elevation={0}>
                
                <CardContent align="center">

                <img src={avatarURL} alt="avatar"/>

                    <Typography variant="h5" component="h3" color="secondary">
                        Name: {name}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Bio: {bio}
                    </Typography>
                </CardContent> 

                    <Button>Make an Appointment With This Walker</Button>

            </Card>
    </div>
  );
}

export default WalkerProfile