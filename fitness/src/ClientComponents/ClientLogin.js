import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";
import yoga from "./images/yoga.jpg";

const Head = styled.div`
  display: flex;
  flex-direction: column;
  background: #ff9233;
  align-items: center;
  padding: 1%;
`;

const Title = styled.div`
  font-size: 3em;
`;

const Buttons = styled.div`
  display: flex;
  width: 10%;
  flex-direction: row;
  justify-content: space-around;
  padding: 1em;
`;

const ClientLog = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2em;
  line-height: 4em;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  font-size: 2em;
  line-height: 4em;
`;

const HomeButton = styled.button`
  &:hover {
    background: black;
    color: white;
  }
`;

const BackButton = styled.button`
  &:hover {
    background: black;
    color: white;
  }
`;
const Input = styled.input`
  width: 80%;
  height: 20%;
`;
const Button = styled.button`
  width: 80%;
  height: 10%;
`;

const ClientLogin = () => {
  // const { push } = useHistory();
  // const [post, setPost] = useState();
  // const [clientState, setClientState] = useState({
  //   id: Date.now(),
  //   username: "",
  //   password: "",
  // });

  // const formSchema = Yup.object().shape({
  //   name: Yup.string().min(2, "Requires at least 2 characters"),
  //   password: Yup.string().min(4, "Requires a minimum of 4 characters"),
  // });

  // const [errors, setErrors] = useState({
  //   username: "",
  //   password: "",
  // });

  // const validateChange = (e) => {
  //   if (e.target.name === "name" || e.target.name === "password") {
  //     Yup.reach(formSchema, e.target.name)
  //       .validate(e.target.value)
  //       .then((isValid) => {
  //         setErrors({ ...errors, [e.target.name]: "" });
  //       })
  //       .catch((err) => {
  //         console.log(err.errors);
  //         setErrors({ ...errors, [e.target.name]: err.errors[0] });
  //       });
  //   }
  // };

  // const handleChange = (e) => {
  //   e.persist();
  //   setClientState({ ...clientState, [e.target.name]: e.target.value });
  //   validateChange(e);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .post("/clients/login", clientState)
  //     .then((res) => {
  //       console.log(res.data);
  //       localStorage.setItem("token", res.data.payload);
  //       setPost(res.data);
  //       setClientState({
  //         username: "",
  //         password: "",
  //       });
  //       push("/Classes");
  //     });
  //   // .catch((err) => {
  //   //   console.log(err);
  //   // });
  // };
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
      .post("/clients/login", cred)
      .then((res) => {
        console.log("client login page data: ", res);
        localStorage.setItem("token", res.data.payload);
        push("/Classes");
      })
      .catch((err) => console.log("this is the error from login: ", err));
  };

  return (
    <>
      <div>
        <Head>
          <Title>Anywhere Fitness</Title>
          <Buttons>
            <Link to="/">
              <HomeButton className="home">Home</HomeButton>
            </Link>
            <Link to="/ClientLandingPage">
              <BackButton className="back">Back</BackButton>
            </Link>
          </Buttons>
        </Head>
        <Body>
          <Image>
            <img src={yoga} />
          </Image>
          <ClientLog>
            <form onSubmit={handleSubmit}>
              <div className="userName">
                <label htmlFor="username">
                  User Name:
                  <Input
                    type="text"
                    name="username"
                    placeholder="Enter User Name"
                    value={cred.name}
                    onChange={handleChange}
                  />
                  {/* {errors.username.length > 2 ? (
                    <p className="error">{errors.name}</p>
                  ) : null} */}
                </label>
              </div>
              <div className="password">
                <label htmlFor="password">
                  Password:
                  <Input
                    type="password"
                    placeholder="Enter User Password"
                    value={cred.password}
                    name="password"
                    onChange={handleChange}
                  />
                  {/* {errors.password.length > 2 ? (
                    <p className="error">{errors.password}</p>
                  ) : null} */}
                </label>
              </div>

              <div className="submit">
                {/* <input data-cy="submit" type="submit" /> */}
                <Button>Sign In</Button>
              </div>
            </form>
            {/* <Client /> */}
          </ClientLog>
        </Body>
        {/* <div className="head">
          <div className="title">Anywhere Fitness</div>
        </div>
        <Client /> */}
      </div>
    </>
  );
};

export default ClientLogin;
