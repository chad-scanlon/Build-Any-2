import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axiosWithAuth from "./utils/axiosWithAuth";
import { InitialContext } from "./contexts/InitialContext";
import Classes from "./ClientComponents/Classes";
import ClientLandingPage from "./ClientComponents/ClientLandingPage";
import ClientLogin from "./ClientComponents/ClientLogin";
import ClientPage from "./ClientComponents/ClientPage";
import Register from "./ClientComponents/Register";
import Session from "./ClientComponents/Session";
import InstructorClasses from "./InstructorComponents/InstructorClasses";
import InstructorCreate from "./InstructorComponents/InstructorCreate";
import InstructorDashboard from "./InstructorComponents/InstructorDashboard";
import InstructorForm from "./InstructorComponents/InstructorForm";
import InstructorLogin from "./InstructorComponents/InstructorLogin";
import CreateClass from "./InstructorComponents/CreateClassForm";

function App() {
  const [sessions, setSessions] = useState([]);
  const [reservedClasses, setReservedClasses] = useState([]);
  const reserveClass = (clas) => {
    setReservedClasses([...reservedClasses, clas]);
  };
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/clients")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("/classes")
      .then((res) => {
        // console.log(res.data);
        setSessions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <InitialContext.Provider value={{ sessions, setSessions }}>
            <Switch>
              {/* <Route exact path="/ClientLandingPage">
                <Link to="/ClientLandingPage">
                  <button>Anywhere Fitness</button>
                </Link>
              </Route> */}
              <Route exact path="/">
                <ClientLandingPage />
              </Route>
              <Route exact path="/ClientLogin">
                <ClientLogin />
              </Route>
              <Route exact path="/Register">
                <Register />
              </Route>
              <Route exact path="/Classes">
                <Classes />
              </Route>
              <Route exact path="/InstructorForm">
                <InstructorForm />
              </Route>
              <Route exact path="/InstructorLogin">
                <InstructorLogin />
              </Route>
              <Route exact path="/InstructorClasses">
                <InstructorClasses />
              </Route>
              <Route
                exact
                path="/Instructor/CreateClass/:id"
                render={(props) => <CreateClass {...props} />}
              />
              <Route exact path="/InstructorSign">
                <InstructorCreate />
              </Route>
              <Route exact path="/InstructorDashboard">
                <InstructorDashboard />
              </Route>
            </Switch>
            <Link to="/">
              <button className="home-button">Home</button>
            </Link>
          </InitialContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;
