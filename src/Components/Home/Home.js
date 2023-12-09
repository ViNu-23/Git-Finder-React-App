import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Stack, Button, Input, Badge } from "@chakra-ui/react";
import { Search2Icon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home({ userData }) {
  const [isClearVisible, setIsClearVisible] = useState(false);

  const [inputValue, setInputValue] = useState("");

//if search btn clicked it makes clear button visible
  const handleSearchBtnClick = () => {
      setIsClearVisible(true);
  };

  // if click on 'clear button' it will disappear and it clear input field also
  const handleClearBtnClick = () => {
    setIsClearVisible(false);
    setInputValue("");
  };

  return (
    <>
      <Navbar />
      <div className="input-search">
        <Stack p="4" width="350px">
          <Input
            type="text"
            placeholder="Search User"
            width="auto"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Stack>

        {/* search button appear only when something typed in input field. ref:'inputValue' */}
        {inputValue && (
          <Button
            colorScheme="green"
            variant="solid"
            type="submit"
            onClick={handleSearchBtnClick}
          >
            Search
          </Button>
        )}
        {/* display only when search button has clicked  and also not appear when input field clear after search*/}
        {inputValue && isClearVisible && (
          <div className="clear">
            <Button
              colorScheme="gray"
              variant="solid"
              type="submit"
              ml="2"
              onClick={handleClearBtnClick}
              mr="6"
            >
              Clear
            </Button>
          </div>
        )}
      </div>

      <div className="container">
        {userData.map((i) => (
          <div className="user-data" key={i.id}>
            <h2>
              <span className="name">Name:</span> {i.name}
            </h2>
            <p>
              <span className="detail">User Name:</span> {i.username}
            </p>
            <p>
              <span className="detail">Email:</span> {i.email}
            </p>
            <p>
              <span className="detail">Website:</span> {i.website}
            </p>
            <Link to={`/know-more/${i.id}`}>
              <Badge colorScheme="green" p="1" className="know-more">
                Read more
              </Badge>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
