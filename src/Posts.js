import React from "react";
import "./post.css";
import Avatar from "@material-ui/core/Avatar";
function Posts() {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avator"
          src="/static/images/avator/1.png"
          alt="username"
        ></Avatar>
        <h3>UseName</h3>
        {/* Header-> Avators +userName */}
        {/*Images*/}
      </div>
      <img
        class="post_img"
        src="https://s3.ap-south-1.amazonaws.com/clecotech/static_images/react-one.jpg"
      ></img>
      {/*UseName +caption */}
      <h4 className="post_text">
        <strong>UserName</strong>:Caption
      </h4>
    </div>
  );
}

export default Posts;
