import React from "react";

// import InstructorClasses from "./InstructorClasses";

import InstructorLogin from "./InstructorLogin";
import styled from "styled-components";

const DashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: orange;
`;
const InstructorDashboard = () => {
  return (
    <>
      <DashContainer>
        <h1>InstructorDashboard</h1>
      </DashContainer>

      <InstructorLogin />
    </>
  );
};
export default InstructorDashboard;
