import React from "react";

import {Routes as Switch,Route} from "react-router-dom"
import TeacherSidebar from "./TeacherSidebar";

const TeacherMyUsers = () => (
    <>
         <div className="container  mt-2">
            <div className="row">
                <div className="col-md-3">
                <TeacherSidebar/>
                </div>
                <div className="col-md-9 mt-4">
                   My Users
                    </div>
            </div>
        </div>
    </>
);

export default TeacherMyUsers;
