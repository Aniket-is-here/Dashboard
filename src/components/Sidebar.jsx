import React from "react";
import { IoStatsChartSharp } from "react-icons/io5";
import { HiMusicNote } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import Logo from "../assets/logo.png";
import Player from "./Player";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="upper__container">
        <div className="brand">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <ul>
            <li className="active">
              <IoStatsChartSharp />
              <a href="/#">Overview</a>
            </li>
            <li>
              <HiMusicNote />
              <a href="/songs">Songs</a>
            </li>
            <li>
              <FiUsers />
              <a href="/users">Users</a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="lower__container">
        <div className="music__container">
          <Player />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
