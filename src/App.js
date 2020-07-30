import React from "react";

import "./App.css";
import Posts from "./Posts";
function App() {
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
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}

export default App;
