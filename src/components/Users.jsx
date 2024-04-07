import React from "react";
import Navbar from "./Navbar";
import UserList from "./UserList";

function Users(){
    return(
        <div className="metrics">
            <Navbar title="Users"/>
            <UserList/>
        </div>
    )
}


export default Users;