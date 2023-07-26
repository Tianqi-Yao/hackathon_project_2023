import "./SearchBar.css";
import { useState } from "react";
import locationIcon from "../../../assets/images/location.svg";
import searchIcon from "../../../assets/images/search.svg";
import micIcon from "../../../assets/images/mic.svg";
import smallSearchIcon from "../../../assets/images/search-small.svg";
import smallMicIcon from "../../../assets/images/mic-small.svg";
import smallLocationIcon from "../../../assets/images/location-small.svg";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ size }) => {
  const navigate = useNavigate();
  return (
    <div className={`search-bar${size ? `-${size}` : ""}`}>
      <input
        className={`search-bar-input${size ? `-${size}` : ""}`}
        type="text"
        placeholder="Search for anything..."
        onKeyDown={(e) => {
          e.key === "Enter" && navigate("/map");
        }}
      />

      {size ? (
        <>
          <img
            src={smallSearchIcon}
            alt="Search Icon"
            className="search-icon-small"
          />
          <img src={smallMicIcon} alt="Mic Icon" className="mic-icon-small" />
          <img
            src={smallLocationIcon}
            alt="Location Icon"
            className="location-icon-small"
          />
        </>
      ) : (
        <>
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <img src={micIcon} alt="Mic Icon" className="mic-icon" />
          <img
            src={locationIcon}
            alt="Location Icon"
            className="location-icon"
          />
        </>
      )}
    </div>
  );
};

export default SearchBar;
