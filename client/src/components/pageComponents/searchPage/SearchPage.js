import "./SearchPage.css";
import { useState } from "react";
import SearchBar from "../../reusableComponent/searchBar/SearchBar";
import Navbar from "../../reusableComponent/navbar/Navbar";

const SearchPage = () => {
  return (
    <div className="search-page">
      <Navbar />
      <main className="search-page-content">
        <div className="search-page-title-container">
          <h1 className="search-page-title">Customized Food Map with </h1>
          <h1 className="search-page-subtitle">Nutritional Info.</h1>
        </div>
        <SearchBar />
      </main>
    </div>
  );
};

export default SearchPage;
