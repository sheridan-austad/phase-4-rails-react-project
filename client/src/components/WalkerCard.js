import React , {useContext} from 'react'
import { Button } from "../styles";
import {UserContext} from './User';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function WalkerCard({name, bio, avatar}) {
  const {user} = useContext(UserContext);
  console.log(user)

  const url = avatar === null ? "" : avatar.url;

  return (
    <div>
        <Card className="card" elevation={0}>
                
                <CardContent align="center">
                <img src={url} alt="avatar"/>

                    <Typography variant="h5" component="h3" color="secondary">
                        Name: {name}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Bio: {bio}
                    </Typography>
                </CardContent> 

                    <Button>Create Appointment With This Walker</Button>

            </Card>
    </div>
  );
}

export default WalkerCard