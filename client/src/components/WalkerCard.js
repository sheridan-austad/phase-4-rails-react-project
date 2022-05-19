import React , {useContext} from 'react'
import { Button } from "../styles";
import {UserContext} from './User';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function WalkerCard({ name, bio, avatar, id }) {
  const {user} = useContext(UserContext);
  console.log(user)
// setting the url to the avatar
// ternary for if there is no avatar don't show one, if there is show the url
  const url = avatar === null ? "" : avatar.url;

  return (
    <div>
      {/* displaying the card with the image, name, and bio of the walker */}
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

                {/* button to create an appointment with the walker of your choice */}
               
                <Button as={Link} to={{pathname: '/appointments/new', state: { walkerName: name, walkerId: id 
                    }}}> Create Appointment With This Walker </Button>        

            </Card>
    </div>
  );
}

export default WalkerCard