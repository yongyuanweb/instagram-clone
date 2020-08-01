import React from "react";
import "./post.css";
import Avatar from "@material-ui/core/Avatar";
function Posts({ username, imageURL, caption }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avator"
          src="/static/images/avator/1.png"
          alt="username"
        ></Avatar>
        <h3>{username}</h3>
        {/* Header-> Avators +userName */}
        {/*Images*/}
      </div>
      <img class="post_img" src={imageURL}></img>
      {/*UseName +caption */}
      <h4 className="post_text">
        <strong>{username}</strong>:{caption}
      </h4>
    </div>
  );
}

export default Posts;
