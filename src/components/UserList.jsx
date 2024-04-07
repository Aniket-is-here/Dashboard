import React from "react";
import user1 from "../assets/user_icon.png";


function UserList(){
    return (
        <div className="userlist">
            <div className="userinfo">
                <div className="user">
                    <img src={user1} alt="" />
                    <div>
                        <h4>Aniket</h4>
                        <span>User 1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList;