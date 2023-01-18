import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function JobHistory(){

    return(
        <>
    <Card sx={{ minWidth: 400, border: '1px solid grey'}}>
      <CardContent>
        <Typography sx={{ fontSize: 21 }} color="text.primary" gutterBottom>
          Job Name
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          Status
        </Typography>
      </CardContent>
    </Card>
        </>
    )
}