import React, { useState } from "react";
import SearchButton from "./SearchButton.js";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={event => {
              event.preventDefault();
              props.search(searchInput);
            }}
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton SearchButton={props.SearchButton} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
