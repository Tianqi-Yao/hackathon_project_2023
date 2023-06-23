import "./App.css";
import Demo from "./components/demoComponent/Demo.js";
// import HomePage from "./components/homePageComponent/HomePage.js"
import HomePage from "./components/pageComponents/homePage/HomePage";
import SearchPage from "./components/pageComponents/searchPage/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Demo /> */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/SearchPage" element={<SearchPage />}></Route>
          <Route path="/demo" element={<Demo />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
