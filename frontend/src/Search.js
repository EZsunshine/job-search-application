import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Listings from "./Listings";
import Button from "@mui/material/Button";

function Search() {
  const emptyForm = {keyword: "", location: ""}
  const [form, setForm] = useState(emptyForm);
  const [listings, setListings] = useState([]);

  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value});
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

function navigateToJobDescripton() {
  navigate('/dashboard/job')
}

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="keyword"
          value={form.keyword}
          placeholder="keyword"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          value={form.location}
          placeholder="location"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>

      <div>
        {listings.length > 0 && (
          <ul>
            {listings.map((listing) => (
              <Button onClick={navigateToJobDescripton}>
                <li key={listing.id}><Listings data={listing} /></li>
              </Button>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
