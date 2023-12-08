import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Notfound from "./Components/Notfound/Notfound";
import KnowMore from "./Components/Knowmore/KnowMore";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  const [user, setUser] = useState([]);
  async function getData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUser(response.data);
    } catch (error) {
      console.log(`Network issue ${error}`);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home userData={user} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/know-more/:id"
              element={<KnowMore userData={user} />}
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}
