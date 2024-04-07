import React from "react";
import Navbar from "./Navbar";
import SongList from "./SongLists";

function Songs(){
    return(
        <div className="metrics">
        <Navbar title="Songs"/>
        <SongList/>
        </div>
    )
}


export default Songs;