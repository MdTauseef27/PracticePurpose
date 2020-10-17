import React from "react";
import "./Stylesheet.css";
import { Row, Col, Container, Button } from "react-bootstrap";
export const Tab2 = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={2}>
            <h1>Hello Friends</h1>
          </Col>
          <Col sm={2}>
            <h2 className="primary">hiiiiiiiiiiiii</h2>
          </Col>
          <Col sm={2}>
            <h3 id="heading">byeeeeeeeeee</h3>
          </Col>
          <Col sm={2}>
            <h4 className="header">React</h4>
          </Col>
          <Col sm={2}>
            <p className="header">Well Come To The world Of React</p>
          </Col>
          <Col sm={2}>
            <p>okkkkkkkkkk</p>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
