import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ImgLogo from "./Img/main1.jpg";
import "../Component/Stylesheetex.css";
export const Cardex = () => {
  return (
    <Card style={{ width: "30rem", border: "1px solid black" }}>
      <Row>
        <Col sm={3}>
          <Card.Img
            src={ImgLogo}
            className="avatar"
            alt=""
            style={{ border: "1px solid #F47E21", margin: "30px" }}
          />
        </Col>
        <Col sm={9}>
          <Card.Body style={{ margin: "10px" }}>
            <Card.Title>Features Of React</Card.Title>
            <Card.Text>
              React is a open source library created by the facebook.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
