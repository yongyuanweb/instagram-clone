import React, { useState } from "react";

import "./App.css";
import Posts from "./Posts";
function App() {
  const [posts, setPosts] = useState([
    {
      username: "Yongyuan Ma",
      caption: "First Post for the app",
      imageURL:
        "https://s3.ap-south-1.amazonaws.com/clecotech/static_images/react-one.jpg",
    },
    {
      username: "Yongyuan Ma",
      caption: "Second Post for the app",
      imageURL:
        "https://s3.ap-south-1.amazonaws.com/clecotech/static_images/react-one.jpg",
    },
  ]);
  return (
    <div className="app">
      {/*Header */}
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram-img"
        ></img>
      </div>

      <h1>This is Instagram Clone</h1>
      {posts.map((post) => (
        <Posts
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
}

export default App;
