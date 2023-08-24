import React from "react";
import Mycourses from "./Mycourses";
import Sidebar from "./Sidebar";

import {Routes as Switch,Route} from "react-router-dom"

const UserDashboard = () => (
    <>
        <div className="container  mt-4">
            <div className="row">
                <div className="col-md-3">
                <Sidebar/>
                </div>
                <div className="col-md-9 mt-4">
               Dashboard
                    </div>
            </div>
        </div>
    </>
);

export default UserDashboard;
