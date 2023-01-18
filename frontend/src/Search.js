import React, { useState, useEffect } from "react";
import Listings from "./Listings";

function Search() {
  const [form, setForm] = useState({ keyword: "", location: "" });
  const [listings, setListings] = useState([]);

  function handleChange(e) {
    const  value = e.target.value;
    setForm({ ...form, [e.target.name]: value});
    console.log("this is the form: ", form)
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const { keyword, location } = e.target;
    console.log({...form});
    const response = await fetch(
      `http://localhost/8000?keyword=${keyword}&location=${location}`
    );
    const data = await response.json();
    setListings(data);
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
          placeholder="keyword"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>

      <div>
        {listings.length > 0 && (
          <ul>
            {listings.map((listing) => (
              < Listings job={listing.title} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
