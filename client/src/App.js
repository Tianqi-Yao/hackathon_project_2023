import "./App.css";
import DemoPage from "./components/tempComponents/demoComponent/Demo.js";
import MapPage from "./components/pageComponents/mapPageComponent/MapPage.js"
import HomePage from "./components/pageComponents/homePage/HomePage";
import SearchPage from "./components/pageComponents/searchPage/SearchPage";
import ApiPage from "./components/tempComponents/apiComponent/Api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Demo /> */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/map" element={<MapPage />}></Route>
          <Route path="/SearchPage" element={<SearchPage />}></Route>
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
