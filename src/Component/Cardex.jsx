import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ImgLogo from "./Img/main1.jpg";
import "../Component/Stylesheetex.css";
export const Cardex = () => {
  return (
    <div>
      <Card
        style={{
          width: "30rem",
          height: "8rem",
          border: "1px solid black",
          marginTop: "5px",
        }}
      >
        <Row>
          <Col sm={3}>
            <Card.Img src={ImgLogo} className="avatar" alt="" />
          </Col>
          <Col sm={9}>
            <Card.Body style={{ margin: "10px" }}>
              <Card.Title>Features Of React</Card.Title>
              <Card.Text>
                React is a open source library created by the facebook.
                <button>submit</button>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Card
        style={{
          width: "25rem",
          height: "8rem",
          border: "1px solid black",
          marginTop: "5px",
        }}
      >
        <Row>
          <Col sm={3}>
            <Card.Img src={ImgLogo} className="avatar" alt="" />
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

      <Card
        style={{
          width: "25rem",
          height: "8rem",
          border: "1px solid black",
          marginTop: "5px",
        }}
      >
        <Row>
          <Col sm={3}>
            <Card.Img src={ImgLogo} className="avatar" alt="" />
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
    </div>
  );
};
