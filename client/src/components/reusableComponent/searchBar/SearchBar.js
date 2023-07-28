import "./SearchBar.css";
import { useState } from "react";
import locationIcon from "../../../assets/images/location.svg";
import searchIcon from "../../../assets/images/search.svg";
import micIcon from "../../../assets/images/mic.svg";
import smallSearchIcon from "../../../assets/images/search-small.svg";
import smallMicIcon from "../../../assets/images/mic-small.svg";
import smallLocationIcon from "../../../assets/images/location-small.svg";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../../actions";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      props.getSearchInput(input);
      navigate("/map");
    }
  };

  return (
    <div className={`search-bar${props.size ? `-${props.size}` : ""}`}>
      <input
        className={`search-bar-input${props.size ? `-${props.size}` : ""}`}
        type="text"
        placeholder="Search for anything..."
        onKeyDown={handleSearch}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {props.size ? (
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

const mapStateToProps = (state) => ({
  searchInput: state.home.searchInput,
});

const mapDispatchToProps = (dispatch) => ({
  getSearchInput: (input) => dispatch(actions.getSearchInput(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
