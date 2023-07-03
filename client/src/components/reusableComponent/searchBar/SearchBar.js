import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <h1>search bar</h1>
      <input type="text" placeholder="Search for anything..." />
    </div>
  );
};

export default SearchBar;
