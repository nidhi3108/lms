import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import AddCoursePage from "./AddCoursePage";
import { baseUrl } from "../../utils/constants";


const TeacherAddcourse = () => (
  <>
    <div className="container  mt-2">
      <div className="row">
        <div className="col-md-3">
          <TeacherSidebar />
        </div>
        <div className="col-md-9 mt-4 card mt-4 border border-secondary">
          <h5 className="card-header"> Add Course</h5>
          <AddCoursePage/>
        </div>
      </div>
    </div>
  </>
);

export default TeacherAddcourse;
