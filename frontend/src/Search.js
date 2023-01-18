import React, { useState, useEffect } from "react";
import Listings from "./Listings";

function Search() {
  const emptyForm = {keyword: "", location: ""}
  const [form, setForm] = useState(emptyForm);
  const [listings, setListings] = useState([]);

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
              <li key={listing.id}><Listings data={listing} /></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
