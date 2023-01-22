import { useSelector } from "react-redux";
import { Card, Typography } from '@mui/material';


function SavedJobs() {
    const {total} = useSelector((state) => state.favorite)
    
    return ( 
        <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center', border: "1px solid grey", maxWidth: 200}}
    >
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Saved: {total}
      </Typography>
    </Card>
     );
}

export default SavedJobs;