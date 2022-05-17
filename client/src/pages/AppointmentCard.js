import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function AppointmentCard({pet_id, owner,  walker, walk_time, walk_date, comments}) {
  
  return (
 <div>
  
    
  
    <Card className="card" elevation={0}>
                
                <CardContent align="center">
                    <Typography variant="h5" component="h3" color="secondary" gutterBottom>
                        Pet: {pet_id}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Owner: {owner?.name}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Walker: {walker?.name}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Walk Time: {walk_time}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                       When: {walk_date}
                    </Typography>
                    <Typography variant="h5" component="h3" color="secondary">
                        Comments About the Walk: {comments}
                    </Typography>

                </CardContent> 

            </Card>
    </div>
  )
}


export default AppointmentCard