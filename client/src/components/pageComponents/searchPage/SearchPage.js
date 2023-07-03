import "./SearchPage.css";
import { useState } from "react";
import SearchBar from "../../reusableComponent/searchBar/SearchBar";

const SearchPage = () => {
  return (
    <div className="search-page">
      <h1 className="search-page-title">search</h1>
      <SearchBar />
    </div>
  );
};

export default SearchPage;
