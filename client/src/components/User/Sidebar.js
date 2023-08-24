import React from "react";
import {NavLink,Link} from "react-router-dom"
import Mycourses from "./Mycourses";
const Sidebar = () => {

    return(
        <>
         <div className="card mt-4 border border-secondary">
            <h5 className="card-header">Dashboard</h5>
                        <div className="list-group list-group-flush">
                            <Link to="/userdashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                            <Link to="/mycourses" className="list-group-item list-group-item-action">My Course</Link>
                            <Link to="/favcourse" className="list-group-item list-group-item-action">Favourite Course</Link>
                            <Link to="/recomcourse" className="list-group-item list-group-item-action">Recomended Course</Link>
                            <Link to="/profilesetting" className="list-group-item list-group-item-action">Profile Setting</Link>
                            <Link to="/changepass" className="list-group-item list-group-item-action">Change Password</Link>
                            <Link to="/logout" className="list-group-item list-group-item-action">Logout</Link>
                        </div>
                    </div>
        </>
    )
}

export default Sidebar