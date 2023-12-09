import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams, Link } from "react-router-dom";
import "./Knowmore.css";
import { Button } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";

export default function KnowMore({ userData }) {
  const { id } = useParams();

  const selectedUser = userData.find((user) => user.id === parseInt(id, 10));

  if (!selectedUser) {
    return (
      <>
        <Navbar />
        <div>User not found</div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="know">
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{selectedUser.name}</td>
            </tr>
            <tr>
              <th>User Name:</th>
              <td>{selectedUser.username}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{selectedUser.email}</td>
            </tr>
            <tr>
              <th>Website:</th>
              <td>{selectedUser.website}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{selectedUser.phone}</td>
            </tr>
            {/* Accessing nested fields */}
            <tr>
              <th>Street:</th>
              <td>{selectedUser.address.street}</td>
            </tr>
            <tr>
              <th>Suite:</th>
              <td>{selectedUser.address.suite}</td>
            </tr>
            <tr>
              <th>City:</th>
              <td>{selectedUser.address.city}</td>
            </tr>
            <tr>
              <th>Zipcode:</th>
              <td>{selectedUser.address.zipcode}</td>
            </tr>
            <tr>
              <th>Latitude:</th>
              <td>{selectedUser.address.geo.lat}</td>
            </tr>
            <tr>
              <th>Longitude:</th>
              <td>{selectedUser.address.geo.lng}</td>
            </tr>
            <tr>
              <th>Company Name:</th>
              <td>{selectedUser.company.name}</td>
            </tr>
            <tr>
              <th>Catch Phrase:</th>
              <td>{selectedUser.company.catchPhrase}</td>
            </tr>
            <tr>
              <th>BS:</th>
              <td>{selectedUser.company.bs}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/" className="return-button">
          <Button
            rightIcon={<AiFillHome />}
            colorScheme="teal"
            variant="outline"
          >
            Return
          </Button>
        </Link>
      </div>
    </>
  );
}
