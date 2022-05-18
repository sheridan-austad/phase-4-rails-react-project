// import React , {useContext} from 'react'
import { Button } from "../styles";
// import {UserContext} from './User';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function WalkerProfile({walker}) {
//   const {user} = useContext(UserContext);
//   if (!user) return <h2> Please Login to View Profile</h2>;
  console.log(walker?.name)
  return (
    <div>
        <h1>Please Choose a Walker</h1>
        <Card className="card" elevation={0}>
                
                <CardContent align="center">
                    <Typography variant="h5" component="h3" color="secondary" gutterBottom>
                        Photo: {walker?.avatar}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Name: {walker?.name}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Bio: {walker?.bio}
                    </Typography>
                </CardContent> 

                    <Button>Make an Appointment With This Walker</Button>

            </Card>
    </div>
  );
}

export default WalkerProfile