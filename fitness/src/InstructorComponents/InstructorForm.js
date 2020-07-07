import React, { useState } from "react";
import { Button, Navbar, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import icon from "../imageFolder/orangeExclamation.png";
import { Link } from "react-router-dom";

import img from "../imageFolder/instructorForm.jpg";

export default function InstructorForm() {
  let textField = { height: "3rem", fontSize: "x-large" };
  let textFieldGroup = { width: "70%", margin: "3rem auto" };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    code: "",
    website: "",
  });

  const changeHandeler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    console.log(
      `Name: ${formState.name}, Email: ${formState.email}, Authentication Code: ${formState.code}, Website: ${formState.website}`
    );
    setFormState({
      name: "",
      email: "",
      code: "",
      website: "",
    });
  };

  const buttonColor = () => {
    if (
      formState.name.length >= 1 &&
      formState.email.length >= 1 &&
      formState.code.length >= 1 &&
      formState.website.length >= 1
    ) {
      const filledText = "#FF6900";
      return filledText;
    } else {
      return "#BDBDBD";
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="header">
        <Navbar
          expand="lg"
          variant="light"
          bg="#FF6900"
          style={{ backgroundColor: "#FF6900", padding: "1rem" }}
        >
          <Link
            to="/InstructorDashboard"
            style={{ width: "100%", color: "black", margin: ".5rem auto" }}
          >
            Anywhere Fitness
          </Link>
        </Navbar>
      </div>
      <div>
        <img
          style={{
            width: "50%",
            margin: "0",
            display: "inline",
            float: "left",
            height: "55rem",
            // backgroundSize:'cover'
          }}
          src={img}
        />

        <form
          style={{ display: "inline", float: "right", width: "50%" }}
          onSubmit={submitHandeler}
        >
          <h1 style={{ paddingTop: "10rem", fontSize: "4.5rem" }}>
            Instructor Sign Up
          </h1>

          <Form.Group style={textFieldGroup} controlId="name">
            <Form.Control
              onChange={changeHandeler}
              name="name"
              value={formState.name}
              type="name"
              placeholder="Name"
              style={textField}
            />
          </Form.Group>

          <Form.Group style={textFieldGroup} controlId="email">
            <Form.Control
              onChange={changeHandeler}
              name="email"
              value={formState.email}
              type="email"
              placeholder="Email"
              style={textField}
            />
          </Form.Group>

          <Form.Group style={textFieldGroup} controlId="code">
            {["bottom"].map((placement) => (
              <OverlayTrigger
                placement={placement}
                delay={{ hide: 4500 }}
                overlay={
                  <Tooltip>
                    Recieved from invite email. For more information and to
                    request an authentication code, please visit our{" "}
                    <a href="/">help</a> page.
                  </Tooltip>
                }
              >
                <img
                  className="codeInfo"
                  src={icon}
                  style={{ marginLeft: "100%" }}
                />
              </OverlayTrigger>
            ))}
            <Form.Control
              onChange={changeHandeler}
              name="code"
              value={formState.code}
              type="text"
              placeholder="Authentication Code"
              style={textField}
            />
          </Form.Group>

          <Form.Group style={textFieldGroup} controlId="website">
            <Form.Control
              onChange={changeHandeler}
              name="website"
              value={formState.website}
              type="text"
              placeholder="Website"
              style={textField}
            />
          </Form.Group>

          <Button
            style={{
              width: "70%",
              height: "3rem",
              fontSize: "x-large",
              margin: "auto",
              backgroundColor: buttonColor(),
            }}
            type="submit"
          >
            Confirm
          </Button>
        </form>
      </div>
    </div>
  );
}
