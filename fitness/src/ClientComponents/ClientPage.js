import { Link } from "react-router-dom";
import React from "react";

// import ClientLandingPage from "./ClientLandingPage";
import styled from "styled-components";

// import InstructorDashboard from "../InstructorComponents/InstructorDashboard";

const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 10px;
  padding: 0 2%;
`;

const Greet = styled.div`
  background: #ff9233;
  width: 100%;
  height: 5%;
  color: white;
  font-size: 1.5em;
  padding: 1em;
`;

const H1 = styled.h1`
  font-size: 5em;
`;
const P = styled.p`
  font-size: 2em;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2% 10%;
`;

const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  margin: 2em;
  padding: 3em;
`;
const Button = styled.button`
  background: #ff9233;
  padding: 1em 2em;
  margin: 3rem;
  border-radius: 15px;
  &:hover {
    background: white;
  }
`;

const Hr = styled.hr`
  height: 2em;
  border-bottom: 1px solid #1f1209;
  box-shadow: 0 20px 10px -5px #bdbdbd;
`;

const ClientPage = () => {
  return (
    <>
      <Header>
        <Title>Anywhere Fitness</Title>
        <Nav>
          <ul>
            <Link to="">Help</Link>
          </ul>
          <ul>
            <Link to="">About</Link>
          </ul>
        </Nav>
      </Header>
      <Greet>
        The world is our gym.
        <br />
        Welcome!
      </Greet>

      <Info>
        <H1>Browse classes</H1>
        <P>
          Our expert instructors conduct classes literally
          <br />
          anywhere. Take a yoga class on a mountaintop.
          <br />
          Do boot camp on the beach. Go to an
          <br />
          abandoned mansion for mat pilates. The
          <br />
          options are limitless.
        </P>
      </Info>

      <Hr />
      <Footer>
        <Link to="/ClientLogin">
          <Button className="forClients">For Clients</Button>
        </Link>
        <Link to="/Register">
          <Button className="forClients">New?</Button>
        </Link>

        <Link to="/InstructorDashboard">
          <Button className="classSearch">For Instructors</Button>
        </Link>

        <Link to="/Classes">
          <Button className="classSearch">Search Classes</Button>
        </Link>
      </Footer>
    </>
  );
};

export default ClientPage;
