import React from "react";
import { Media } from "react-bootstrap";
import ImgLogo1 from "../Component/Img/main1.jpg";
export const Mediaex = () => {
  return (
    <Media style={{ border: "1px solid black" }}>
      <img
        width={25}
        height={25}
        src={ImgLogo1}
        alt=""
        style={{ border: "1px solid #F47E21" }}
      />
      <Media.Body style={{ marginLeft: "30px" }}>
        <h5>Robert Steve</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus abcdehgjk
          scelerisque ante sollicitudin commodo. Cras purus odio, vest vulputate
          at, tempus viverra turpis.
        </p>
      </Media.Body>
    </Media>
  );
};
