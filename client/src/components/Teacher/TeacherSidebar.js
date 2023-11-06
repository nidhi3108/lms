import React, { useState } from "react";
import {NavLink,Link,Route} from "react-router-dom"
// import Mycourses from "./Mycourses";
const TeacherSidebar = () => {
    const [currentTeacher, setcurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('currentTeacher')))
    console.log(currentTeacher._id);
    return(

        <>
         <div className="card mt-4 border border-secondary">
            <h5 className="card-header">Dashboard</h5>
                        <div className="list-group list-group-flush">
                            <Link to="/teacher-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                            <Link to={"/teacher-mycourses/"+currentTeacher._id} className="list-group-item list-group-item-action">My Course</Link>
                            <Link to="/teacher-addcourse" className="list-group-item list-group-item-action">Add Courses</Link>
                            <Link to="/teacher-myusers" className="list-group-item list-group-item-action">My Users</Link>
                            <Link to="/teacher-profilesetting" className="list-group-item list-group-item-action">Profile Setting</Link>
                            <Link to="/teacher-changepass" className="list-group-item list-group-item-action">Change Password</Link>
                            <Link to="/teacher-logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
                        </div>
                    </div>
        </>
    )
}

export default TeacherSidebar