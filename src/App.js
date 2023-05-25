import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Article />} />
          <Route path="/search/:search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
