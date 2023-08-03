import "./SearchPage.css";
import { useState } from "react";
import SearchBar from "../../reusableComponent/searchBar/SearchBar";
import Navbar from "../../reusableComponent/navbar/Navbar";
import Loading from "../../reusableComponent/loading/Loading";
import { connect } from "react-redux";
import { actions } from "../../../actions";
import questionIcon from "../../../assets/images/question-icon.svg";

const SearchPage = (props) => {
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(true);
  const handleSampleQuestion = () => {};

  return (
    <div className="search-page">
      <Navbar />
      <main className="search-page-content">
        <div className="search-top-content">
          <div className="search-page-title-container">
            <h1 className="search-page-title">Customized Food Map with </h1>
            <h1 className="search-page-subtitle">Nutritional Info.</h1>
          </div>
          <SearchBar />
        </div>
        <div className="search-bottom-content">
          {!loading ? (
            <div className="sample-questions-container">
              <div className="sample-questions-title">You may ask...</div>
              <div
                className="question-container"
                onClick={handleSampleQuestion}
              >
                <div className="question">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <img
                  className="question-icon"
                  src={questionIcon}
                  alt="Question Icon"
                />
              </div>
              <div
                className="question-container"
                onClick={handleSampleQuestion}
              >
                <div className="question">
                  Lorem ipsum dolor sit amet consectetur. Amet vitae enim magna
                  egestas.
                </div>
                <img
                  className="question-icon"
                  src={questionIcon}
                  alt="Question Icon"
                />
              </div>
              <div
                className="question-container"
                onClick={handleSampleQuestion}
              >
                <div className="question">
                  Lorem ipsum dolor sit amet consectetur. Amet magna egestas.
                </div>
                <img
                  className="question-icon"
                  src={questionIcon}
                  alt="Question Icon"
                />
              </div>
              <div
                className="question-container"
                onClick={handleSampleQuestion}
              >
                <div className="question">
                  Sit faucibus vivamus tellus nibh rutrum amet. Vel sit enim
                  nunc elit eget vivamusel nibh.
                </div>
                <img
                  className="question-icon"
                  src={questionIcon}
                  alt="Question Icon"
                />
              </div>
            </div>
          ) : analyzing ? (
            <Loading term={"Analyzing"} />
          ) : (
            <Loading term={"Loading"} />
          )}
        </div>
      </main>
      <footer>© 2023 all rights reserved.</footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchInput: state.home.searchInput,
});

const mapDispatchToProps = (dispatch) => ({
  getSearchInput: (input) => dispatch(actions.getSearchInput(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
