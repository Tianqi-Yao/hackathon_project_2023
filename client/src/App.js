import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./components/demoComponent/Demo.js"
import HomePage from "./components/homePageComponent/HomePage.js"
import Api from './components/apiComponent/Api.js'



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
