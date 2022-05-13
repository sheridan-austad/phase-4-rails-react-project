import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function Appointment({pet_id, owner_id,  walker_id, walk_time, walk_date, comments}) {
  
  return (
 <div>
  
    <h3 className="title">Here Are Your Appointments!</h3>
  
    <Card className="card" elevation={0}>
                
                <CardContent align="center">
                    <Typography variant="h5" component="h3" color="secondary" gutterBottom>
                        Pet: {pet_id}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        owner: {owner_id}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        walker: {walker_id}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        walk time: {walk_time}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                       date: {walk_date}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        comments: {comments}
                    </Typography>

                </CardContent> 

            </Card>
    </div>
  )
}


export default Appointment