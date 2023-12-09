import React, { useState } from "react";
import { Stack, Button, Input, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { useToast } from "@chakra-ui/react";

export default function Home({ userData }) {
  const [inputValue, setInputValue] = useState("");
  const [isClearVisible, setIsClearVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  //filtering user from jason data return filter user or false
  const filterUsers = (users, query) => {
    return users.filter(
      (user) => user.username.toLowerCase() === query.toLowerCase()
    );
  };

  //if search btn clicked it makes clear button visible,sort user by name,chakra error toast
  const toast = useToast();
  const handleSearchBtnClick = () => {
    const filteredUsers = filterUsers(userData, inputValue);
    if (filteredUsers.length === 0) {
      toast({
        title: "User Not Found",
        status: "error",
        variant: "subtle",
        duration: 2500,
        isClosable: 1,
      });
    }
    setFilteredData(filteredUsers);
    setIsClearVisible(true);
  };

  //makes clear button disappear,clear input field,back to normal list of 10 users
  const handleClearBtnClick = () => {
    setIsClearVisible(false);
    setInputValue("");
    setFilteredData([]);
  };

  //if filter data has some value-'true'-display filterData otherwise original userData mean actual fetched json
  const renderUsers = filteredData.length ? filteredData : userData;

  return (
    <>
      <Navbar />
      <div className="input-search">
        <Stack p="4" width="350px">
          <Input
            type="text"
            placeholder="User name"
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
        {/* appear only when search button has clicked  and also not appear when input field clear after search*/}
        {isClearVisible && inputValue && (
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
        {renderUsers.map((user) => (
          <div className="user-data" key={user.id}>
            <h2>
              <span className="name">Name:</span> {user.name}
            </h2>
            <p>
              <span className="detail">User Name:</span> {user.username}
            </p>
            <p>
              <span className="detail">Email:</span> {user.email}
            </p>
            <p>
              <span className="detail">Website:</span> {user.website}
            </p>
            <Link to={`/know-more/${user.id}`}>
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
