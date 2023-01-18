import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Listings({data}) {
  return (
    <Card sx={{minWidth: 400}}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      ${data.title} up to ${data.salary_max}
        </Typography>
        
      </CardContent>
    <div>
      <h4>
        
      </h4>
      <h5>${data.location.display_name}</h5>
      <p>${data.description}</p>
    </div>
    </Card>
  );
}

export default Listings;
