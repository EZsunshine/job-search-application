import { useState } from "react";
import { Button } from "@mui/material";
import JobHistory from "./JobHistory";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

import Grid from "@mui/material/Grid";

function Account() {
    const [accData, setAccData] = useState([1, 2])


    return ( 
        <>

            Account Data/Settings
            <br />
            <Button variant="contained" component="label">
                Upload Resume
            <input hidden accept="image/*" multiple type="file" />
            </Button>

            <br></br>

            Account Data/Job History
            <div>
                {accData.length > 0 && (
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Grid
                  container
                  spacing={{ xs: 2}}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {accData.map((data) => (
                        <li key={data.id}><JobHistory /></li>
                    ))}
                                <Grid item xs={2} sm={4} md={4} key={JobHistory.id}>
                  <div>

                  </div>
                </Grid>

            </Grid>
          </Box>
                )}
            </div>
        </>
     );
}

export default Account;