import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ImgLogo from "./Img/main1.jpg";
import "../Component/Stylesheetex.css";
export const Cardex = () => {
  return (
    <Card style={{ width: "35rem" }}>
      <Row>
        <Col sm={3}>
          <Card.Img src={ImgLogo} className="avatar" alt="" />
        </Col>
        <Col sm={9}>
          <Card.Body>
            <Card.Title>Features Of React</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
