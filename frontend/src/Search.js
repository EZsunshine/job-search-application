import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import Listings from "./Listings";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

function Search() {
  const emptyForm = { keyword: "", location: "" };
  const [form, setForm] = useState(emptyForm);
  const [listings, setListings] = useState([]);

  //const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:8000/?keyword=${form.keyword}&location=${form.location}`
    );
    const data = await response.json();
    setListings(data.results);
    //console.log(listings);
    //console.log(listings.results.length);
    setForm(emptyForm);
  }

  useEffect(() => {
    handleFormSubmit();
  }, []);

  // function navigateToJobDescripton(data) {
  //   navigate('/dashboard/job', {state: data})
  // }

  return (
    <>
      <h1>Welcome back! Firstname Lastname</h1>
      <div>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <TextField
            id="outlined-basic"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            type="text"
            name="keyword"
            value={form.keyword}
            placeholder="Job title, keywords, or company"
            size="small"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" }, 
            }}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FmdGoodOutlinedIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            type="text"
            name="location"
            value={form.location}
            placeholder="Location"
            size="small"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            onChange={handleChange}
          />

          <Button variant="contained" type="submit" value="Submit" sx={{m:1 }}>
            Search
          </Button>
        </Box>

        <div style={{margin: 50}}>
          {listings.length > 0 && (
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Grid
                container
                spacing={{ xs: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {listings.map((listing) => (
                  // <Button onClick={() => {navigateToJobDescripton(listing)}}>
                  //   <li key={listing.id}><Listings data={listing} /></li>
                  // </Button>

                  <Grid item xs={2} sm={4} md={4} key={listing.id}>
                    <div>
                      <Listings data={listing} />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
