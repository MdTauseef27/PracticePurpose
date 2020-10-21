import React from "react";
import "./Stylesheet.css";
import { Row, Col, Container, Button } from "react-bootstrap";
export const Tab2 = () => {
  return (
    <div>
      <Container fluid style={{ paddingTop: "30px" }}>
        <Row>
          <Col sm={2}>
            <h1
              style={{
                marginTop: "60px",
                marginLeft: "30px",
                paddingTop: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "30px",
              }}
            >
              Hello Friends
            </h1>
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
            <Button>Cancel</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
