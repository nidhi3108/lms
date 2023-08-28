import React from "react";
import {NavLink,Link} from "react-router-dom"
const Sidebar = () => {

    return(
        <>
         <div className="card mt-4 border border-secondary">
            <h5 className="card-header">User Dashboard</h5>
                        <div className="list-group list-group-flush">
                            <Link to="/user-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                            <Link to="/user-mycourses" className="list-group-item list-group-item-action">My Course</Link>
                            <Link to="/user-favcourse" className="list-group-item list-group-item-action">Favourite Course</Link>
                            <Link to="/user-recomcourse" className="list-group-item list-group-item-action">Recomended Course</Link>
                            <Link to="/user-profilesetting" className="list-group-item list-group-item-action">Profile Setting</Link>
                            <Link to="/user-changepass" className="list-group-item list-group-item-action">Change Password</Link>
                            <Link to="/user-logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
                        </div>
                    </div>
        </>
    )
}

export default Sidebar