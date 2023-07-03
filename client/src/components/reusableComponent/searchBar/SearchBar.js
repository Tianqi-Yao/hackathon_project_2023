import "./SearchBar.css";
import { useState } from "react";
import locationIcon from "../../../assets/images/location.svg";
import searchIcon from "../../../assets/images/search.svg";
import micIcon from "../../../assets/images/mic.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search for anything..."
      />
      <img src={searchIcon} alt="Search Icon" className="search-icon" />
      <img src={micIcon} alt="Mic Icon" className="mic-icon" />
      <img src={locationIcon} alt="Location Icon" className="location-icon" />
    </div>
  );
};

export default SearchBar;
