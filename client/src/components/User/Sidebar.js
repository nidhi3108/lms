import React, { useState } from "react";
import {NavLink,Link,Route,useNavigate} from "react-router-dom"

const Sidebar = () => {
    const navigate = useNavigate();
    const [currentStudent, setcurrentStudent] = useState(JSON.parse(sessionStorage.getItem('currentStudent')))
    console.log(currentStudent._id);
    console.log("2 bar render hua page");
    const signOut = () => {
        sessionStorage.removeItem("currentStudent");
        localStorage.clear();
        // navigate("../teacher-login");
      };
    return(
        <>
         <div className="card mt-4 border border-secondary">
            <h5 className="card-header">User Dashboard</h5>
                        <div className="list-group list-group-flush">
                            <Link to="/user-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                            <Link to="/user-mycourses" className="list-group-item list-group-item-action">My Course</Link>
                            <Link to="/user-favcourse" className="list-group-item list-group-item-action">Favourite Course</Link>
                           
                            <Link to="/user-profilesetting" className="list-group-item list-group-item-action">Profile Setting</Link>
                            <Link to="/user-changepass" className="list-group-item list-group-item-action">Reset Password</Link>
                            <Link to="/user-login" className="list-group-item list-group-item-action text-danger" onClick={signOut}>Logout</Link>
                        </div>
                    </div>
        </>
    )
}

export default Sidebar