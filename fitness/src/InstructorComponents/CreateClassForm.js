import React, { useState, useContext } from "react";

import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { InitialContext } from "../contexts/InitialContext";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30%;
  padding: 1%;
  margin-left: 35%;
`;

const StyledButton = styled.button`
  background-color: orange;
  height: 30px;
  margin-top: 5px;
`;

const StyledInput = styled.input`
  height: 50px;
`;

const CreateClass = (props) => {
  const { id } = props.match.params;

  const { sessions, setSessions } = useContext(InitialContext);

  const [formState, setFormState] = useState({
    id: Date.now(),
    name: "",
    type: "",
    startTime: "",
    duration: "",
    intensityLevel: "",
    location: "",
    attendees: "",
    maxClassSize: "",
    instructor_id: id,
  });
  const { push } = useHistory();
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleCreate = (e, instructorID, setSessions, formState) => {
    e.preventDefault();
    console.log("form submitting");
    axiosWithAuth()
      .post(`/instructors/${instructorID}/classes`, formState)
      .then((res) => console.log(res));
    console.log("form state in handleCreate function", formState);
    // setSessions(classes);
  };

  return (
    <>
      <form onSubmit={(e) => handleCreate(e, id, setSessions, formState)}>
        <h1>Add a class</h1>
        <StyledContainer>
          <StyledInput
            placeholder="Name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formState.name}
          />
          <StyledInput
            placeholder="Type"
            type="text"
            name="type"
            onChange={handleChange}
            value={formState.type}
          />
          <StyledInput
            placeholder="Start Time"
            type="text"
            name="startTime"
            onChange={handleChange}
            value={formState.startTime}
          />
          <StyledInput
            placeholder="Duration"
            type="text"
            name="duration"
            onChange={handleChange}
            value={formState.duration}
          />
          <StyledInput
            placeholder="Easy, Medium, Hard"
            type="text"
            name="intensityLevel"
            onChange={handleChange}
            value={formState.intensityLevel}
          />
          <StyledInput
            placeholder="Location"
            type="text"
            name="location"
            onChange={handleChange}
            value={formState.location}
          />
          <StyledInput
            placeholder="Attendees"
            type="text"
            name="attendees"
            onChange={handleChange}
            value={formState.attendees}
          />
          <StyledInput
            placeholder="Max Class Size"
            type="text"
            name="maxClassSize"
            onChange={handleChange}
            value={formState.maxClassSize}
          />

          <StyledButton type="submit">Add</StyledButton>
        </StyledContainer>
      </form>
    </>
  );
};

export default CreateClass;
