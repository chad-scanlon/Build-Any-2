import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InstructorLogin = () => {
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });
  const { push } = useHistory();
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/instructors/login", cred)
      .then((res) => {
        console.log("login page data: ", res);
        localStorage.setItem("token", res.data.token);
        push(`/Instructor/CreateClass/${res.data.id}`);
      })
      .catch((err) => console.log("this is the error from login: ", err));
  };
  return (
    <div>
      <h1>Instructor Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          onChange={handleChange}
          value={cred.username}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={cred.password}
        />
        <button type="submit">login</button>
      </form>
      <LoginContainer>
        <Link to="/InstructorSign">
          {" "}
          <h2>New Instructor ?</h2>
          <button>Create Account</button>{" "}
        </Link>
      </LoginContainer>
    </div>
  );
};
export default InstructorLogin;
