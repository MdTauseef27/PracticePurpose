import React from "react";
import { Navbars } from "./Component/Navbars";
import { Cardex } from "./Component/Cardex";
import { Mediaex } from "./Component/Mediaex";
import { LoginForm } from "./Component/LoginForm";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container fluid>
      <Navbars />
      <Row>
        <Col lg={6}>
          <Cardex />
        </Col>
        <Col lg={6}>
          <Mediaex />
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
