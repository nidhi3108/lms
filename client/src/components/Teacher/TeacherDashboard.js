import React from "react";

import {Routes as Switch,Route} from "react-router-dom"
import TeacherSidebar from "./TeacherSidebar";
import NavBarTeacher from "../Home/NavbarTeacher";
import { baseUrl } from "../../utils/constants";


const TeacherDashboard = () => (
    <>
    {/* <NavBarTeacher/> */}
         <div className="container  mt-2">
            <div className="row">
                <div className="col-md-3">
                <TeacherSidebar/>
                </div>
                <div className="col-md-9 mt-4">
               Teacher Dashboard
                    </div>
            </div>
        </div>
    </>
);

export default TeacherDashboard;
