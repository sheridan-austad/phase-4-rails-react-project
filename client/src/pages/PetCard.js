import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function PetCard({image_url,name, age, species, breed, bio}) {

    return ( 

            <Card className="card" elevation={0}>
                
                <CardContent align="center">
                    <Typography variant="h5" component="h3" color="secondary" gutterBottom>
                        Pet: {image_url}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                         Name: {name}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Age:{age}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Species: {species}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Breed: {breed}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Bio: {bio}
                    </Typography>

                </CardContent> 

            </Card>
    )
}

export default PetCard


// Container - filter by animal - update 
// Container - filter by walker - update 
// don't have any pets until you click on new pet
// appointments on the top in the navbar - only that apply to current user - api/me,  would also apply to pets