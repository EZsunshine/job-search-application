import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";


export default function JobHistory(){
// add an object with {jobname: status}, then update the status of the job using usestate
const [myJobHistory, setMyJobHistory] = useState([])
// Store job history

    return(
        <>
    <Card sx={{ minWidth: 400, border: '1px solid grey'}}>
      <CardContent>
        <Typography sx={{ fontSize: 21 }} color="text.primary" gutterBottom>
          Job Name at Company
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          <select>
            <option value="noresponse">No response</option>
            <option value="interviewing">Interviewing</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
            </select>
        </Typography>
      </CardContent>
    </Card>
        </>
    )
}