import React, { useState,useEffect } from "react";

import "./App.css";
import Posts from "./Posts";
import {db} from "./firebase";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{ 
    //onSnapshot updates database whenever the database changed
    db.collection("posts").onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>doc.data()))
      })
  },[]) //run once if [] is leaving blank,run everytime is posts change or update
   
  
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
