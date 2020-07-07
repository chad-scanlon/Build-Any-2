import React from "react";

import styled from "styled-components";

const ClassContainer = styled.div`
  border: solid black 2px;
  background-color: #ff9233;
  border-radius: 6px;
`;
const Session = (props) => {
  console.log("session", props);

  return (
    <>
      <ClassContainer className="classes">
        <h2>{props.name}</h2>
        <h6>{props.type}</h6>
        <p>
          Starts at {props.startTime} and lasts {props.duration} in{" "}
          {props.location}
        </p>
        <p>{props.intensityLevel} intensity level</p>
        <p>{props.attendees} signed up</p>
        <p>{props.maxClassSize} attendees max</p>
        <button onClick={() => alert("Congratulations! See you in class")}>
          Reserve a spot
        </button>
      </ClassContainer>
    </>
  );
};

export default Session;
