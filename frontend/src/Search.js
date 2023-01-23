import React, { useState, useEffect } from "react";
import Listings from "./Listings";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

function Search() {
  const emptyForm = { keyword: "", location: "" };
  const [form, setForm] = useState(emptyForm);
  const [dummy, setDummy] = useState([]);
  const [listings, setListings] = useState([]);

  function display() {
    fetch("http://localhost:8000/?keyword=designer&location=ny")
      .then((r) => r.json())
      .then((data) => {
        setDummy(data.results);
      });
  }
  
  useEffect(() => {
    display();
  },[])

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
    setForm(emptyForm);
  }

  useEffect(() => {
    handleFormSubmit();
  }, []);

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">Welcome back!</Typography>
      </Box>

      <div>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ textAlign: "center" }}
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

          <Button
            variant="contained"
            type="submit"
            value="Submit"
            sx={{ m: 1 }}
          >
            Search
          </Button>
        </Box>

        <div style={{ margin: 50 }}>
          {listings.length <= 0 ? (
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Grid
                container
                spacing={{ xs: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {dummy.map((listing) => (
                  <Grid item xs={2} sm={4} md={4} key={listing.id}>
                    <div>
                      <Listings data={listing} />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Grid
                container
                spacing={{ xs: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {listings.map((listing) => (
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
