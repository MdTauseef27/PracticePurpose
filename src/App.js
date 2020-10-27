import React from "react";
import { Navbars } from "./Component/Navbars";
import { Cardex } from "./Component/Cardex";
import { Mediaex } from "./Component/Mediaex";
import { Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div>
      <Navbars />
      <Row>
        <Col sm={6}>
          <Cardex />
        </Col>
        <Col sm={6}>
          <Mediaex />
        </Col>
      </Row>
    </div>
  );
}

export default App;
