import React, { useState } from "react";
import { Media } from "react-bootstrap";
import ImgLogo1 from "../Component/Img/main1.jpg";
import CommentLogo from "../Component/Img/Comment.svg";
import PinLogo from "../Component/Img/Push.svg";
import LikesLogo from "../Component/Img/Like.svg";
export const Mediaex = () => {
  const [Likes, SetLikes] = useState(0);
  return (
    <div>
      <Media style={{ border: "1px solid black", marginTop: "5px" }}>
        <img
          width={15}
          height={32}
          src={ImgLogo1}
          alt=""
          style={{ border: "1px solid #F47E21" }}
        />
        <Media.Body style={{ marginLeft: "30px" }}>
          <h5>Robert Steve</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla nulla.
            abcdehgjkscelerisque anteds. sollicitudin commodo.
          </p>
          <button>
            <img src={CommentLogo} alt=""></img>
          </button>
          <button>
            <img src={PinLogo} alt=""></img>
          </button>
          <button>
            <img src={LikesLogo} alt=""></img>
          </button>
        </Media.Body>
      </Media>

      <Media style={{ border: "1px solid black", marginTop: "5px" }}>
        <img
          width={15}
          height={32}
          src={ImgLogo1}
          alt=""
          style={{ border: "1px solid #F47E21" }}
        />
        <Media.Body style={{ marginLeft: "30px" }}>
          <h5>Robert Steve</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla nulla.
            abcdehgjkscelerisque anteds. sollicitudin commodo.
          </p>
          <img src={CommentLogo} alt=""></img>
          <img src={PinLogo} alt=""></img>
          <img src={LikesLogo} alt=""></img>
        </Media.Body>
      </Media>

      <Media style={{ border: "1px solid black", marginTop: "5px" }}>
        <img
          width={15}
          height={32}
          src={ImgLogo1}
          alt=""
          style={{ border: "1px solid #F47E21" }}
        />
        <Media.Body style={{ marginLeft: "30px" }}>
          <h5>Robert Steve</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla nulla.
            abcdehgjkscelerisque anteds. sollicitudin commodo.
          </p>
          <img src={CommentLogo} alt=""></img>
          <img src={PinLogo} alt=""></img>
          <img src={LikesLogo} alt=""></img>
          <button>Submit</button>
        </Media.Body>
      </Media>
    </div>
  );
};
