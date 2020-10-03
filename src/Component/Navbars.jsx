import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../Component/Home";
import { Navbar, FormControl, Button, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/esm/Switch";
import { Services } from "./Services";
import { Technology } from "./Technology";
import { Blogs } from "./Blogs";
import { Aboutus } from "./Aboutus";
export const Navbars = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand> Navbars </Navbar.Brand>{" "}
        <Nav className="mr-auto">
          <Nav.Link href="homes"> Home </Nav.Link>{" "}
          <Nav.Link href="services"> Services </Nav.Link>{" "}
          <Nav.Link href="technology"> Technology </Nav.Link>{" "}
          <Nav.Link href="blogs"> Blogs </Nav.Link>{" "}
          <Nav.Link href="aboutus"> About us </Nav.Link>{" "}
        </Nav>{" "}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info"> Search </Button>{" "}
        </Form>{" "}
      </Navbar>
      <Router>
        <Switch>
          <Route path="/homes">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/technology">
            <Technology />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/aboutus">
            <Aboutus />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
