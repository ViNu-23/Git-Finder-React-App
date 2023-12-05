import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
