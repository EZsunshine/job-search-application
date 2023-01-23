import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import React from "react";
import AppliedJobsListings from "./SavedJobsListings";

function AppliedJobs() {
    var {applied} = useSelector((state) => state.applied)

    return ( 
        <>
      <div style={{ margin: 50 }}>
        {applied.length > 0 && (
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Grid
              container
              spacing={{ xs: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {applied.map((listing) => (
                <Grid item xs={2} sm={4} md={4} key={listing.id}>
                  <div>
                    <AppliedJobsListings data={listing} />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </div>
    </>
     );
}

export default AppliedJobs;