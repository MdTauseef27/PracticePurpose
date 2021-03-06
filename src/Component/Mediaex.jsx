import React, { useState, useEffect } from "react";
import { Media } from "react-bootstrap";
import ImgLogo1 from "../Component/Img/main1.jpg";
import CommentLogo from "../Component/Img/Comment.svg";
import PinLogo from "../Component/Img/Push.svg";
import LikesLogo from "../Component/Img/Like.svg";
export const Mediaex = () => {
  const [Likes, SetLikes] = useState(0);
  const [Likes1, SetLikes1] = useState(0);
  const [Likes2, SetLikes2] = useState(0);

  useEffect(() => {
    SetLikes(Likes, Likes1);
  }, [Likes, Likes1]);
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
          <h5>Robert Steven</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla nulla.
            abcdehgjkscelerisque anteds. sollicitudin commodo. asndld aksjnddk
            kjasndk ks bdk kejhbdik ohhoublksj.
          </p>
          <button>
            <img src={CommentLogo} alt=""></img>
          </button>

          {"     "}
          <button>
            <img src={PinLogo} alt=""></img>
          </button>
          {"     "}
          <button onClick={(e) => SetLikes(Likes + 1)}>
            <img src={LikesLogo} alt=""></img>
            {Likes}
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
            abcdehgjkscelerisque anteds. sollicitudin commodo. asmknd aksjdnk
            jask kjsdkd ksakehdh wheroih dsnlk.
          </p>
          <button>
            <img src={CommentLogo} alt=""></img>
          </button>

          {"     "}
          <button>
            <img src={PinLogo} alt=""></img>
          </button>
          {"     "}
          <button onClick={() => SetLikes1(Likes1 + 1)}>
            {" "}
            <img src={LikesLogo} alt=""></img>
            {Likes1}
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
            abcdehgjkscelerisque anteds. sollicitudin commodo. kjsadnbkjsa
            jsdnlaj a sdk dck mnasd kas d kjns.
          </p>
          <button>
            <img src={CommentLogo} alt=""></img>
          </button>

          {"     "}
          <button>
            <img src={PinLogo} alt=""></img>
          </button>
          {"     "}
          <button onClick={() => SetLikes2(Likes2 + 1)}>
            <img src={LikesLogo} alt=""></img>
            {Likes2}
          </button>
        </Media.Body>
      </Media>
    </div>
  );
};
