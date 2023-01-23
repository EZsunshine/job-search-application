import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import React from "react";
import SavedJobsListings from "./SavedJobsListings";

function SavedJobs() {
  var { jobs } = useSelector((state) => state.favorite);

  console.log(jobs)


  return (
    <>
      <div style={{ margin: 50 }}>
        {jobs.length > 0 && (
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Grid
              container
              spacing={{ xs: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {jobs.map((listing) => (
                <Grid item xs={2} sm={4} md={4} key={listing.id}>
                  <div>
                    <SavedJobsListings data={listing} />
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

export default SavedJobs;
