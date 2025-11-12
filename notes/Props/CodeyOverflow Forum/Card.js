import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";

function Card(props) {
  return (
    <div>
      <Header
        username={props.commentObject.username}
        profileImg={props.commentObject.profileImg}
      />
      <Body comment={props.commentObject.comment} />
    </div>
  );
}

export default Card;
