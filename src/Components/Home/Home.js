import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Stack, Button, Input } from "@chakra-ui/react";
import { Search2Icon, CloseIcon } from "@chakra-ui/icons";

export default function Home({ userData }) {
  return (
    <>
      <Navbar />
      <div className="input-search">
        <Stack p="4">
          <Input type="tel" placeholder="  Search User" />
        </Stack>
        
          <Button colorScheme="green" variant="solid" type="submit">
            <Search2Icon />
          </Button>
          <div className="clear">
          <Button colorScheme="gray" variant="solid" type="submit" ml="2">
            <CloseIcon />
          </Button>
        </div>
      </div>
      <div className="container">
        {userData.map((i) => {
          return (
            <div className="user-data">
              <h2 key={i.id}>
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
            </div>
          );
        })}
      </div>
    </>
  );
}
