import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useEffect, useState, useContext } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { InitialContext } from "../contexts/InitialContext";
import CreateClass from "./CreateClassForm";

const InstructorClasses = () => {
  const { sessions, setSessions } = useContext(InitialContext);
  console.log(sessions);

  const [signout, setSignout] = useState(false);
  const { push } = useHistory();
  const { id } = useParams();

  const signOut = () => {
    if (signout === false) {
      return push("/InstructorLogin");
    } else {
      return console.log("you are still logged in");
    }
  };

  const handleDelete = async (id, sessions, setSessions) => {
    const classes = await axiosWithAuth().delete(`/classes/${id}`);
    console.log(classes);
    const classData = sessions.filter((sesh) => sesh.id !== id);
    console.log("classData in instructor classes,", classData);
    setSessions(classData);
  };
  return (
    <>
      <div>
        <h1>Instructor classes: </h1>
        <Link to="/Instructor/CreateClass:/id">
          {" "}
          <button>Create Class</button> <CreateClass />
        </Link>

        <button onClick={signOut}>Sign out</button>
        {sessions.map((item, key) => (
          <div key={item.id}>
            <Card
              style={{
                width: "18rem",
                margin: " 0 auto",
                background: "rgba(97, 136, 207, 0.534)",
              }}
            >
              <Card.Body>
                <Card.Title>Name: {item.name}</Card.Title>
                <ListGroup> Location: {item.location}</ListGroup>
                <ListGroup> Type: {item.type}</ListGroup>
                <ListGroup> Intensity Level: {item.intensityLevel}</ListGroup>
                <ListGroup> Start Time: {item.startTime}</ListGroup>
                <ListGroup> Duration: {item.duration}</ListGroup>
                <ListGroup> Max Class Size: {item.maxClassSize}</ListGroup>
                <ListGroup> Attendees: {item.attendees}</ListGroup>
                <Button>Click for more information</Button>
                <button
                  onClick={() => handleDelete(item.id, sessions, setSessions)}
                >
                  Delete Class
                </button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default InstructorClasses;
