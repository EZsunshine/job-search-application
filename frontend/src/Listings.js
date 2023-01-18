import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

function Listings({ data }) {
  return (
    <Card sx={{ minWidth: 400, border: '1px solid grey'}}>
      <CardContent>
        <Typography sx={{ fontSize: 21 }} color="text.primary" gutterBottom>
          {data.title} up to {data.salary_max}
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {data.location.display_name}
        </Typography>
        <Typography sx={{ fontSize: 16 }}>{data.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default Listings;
