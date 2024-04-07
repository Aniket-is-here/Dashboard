import React from "react";
import avatar from "../assets/user_icon.png";

function Navbar({title}) {
  return (
    <div className="navbar">
      <h1>{title}</h1>
      <div className="info">
        
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
