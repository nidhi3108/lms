import React from "react";
import Sidebar from "./Sidebar";

const RecommendedCourse = () => {
  return (
    <>
    <div className="container">
        <div className="row">
     <section className="col-md-3">
    <Sidebar/>
     </section>
    <section className="col-md-9 mt-2">
      <div className="card">
        <h5 className="card-header">Recommeneded Courses</h5>
        <div className="card-body">
          <table className="table border border-radius">
            <thead>
              <tr>
                <th colSpan={3}>My Courses</th>
              </tr>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Created By</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider table-divider-color">
              <tr>
                <th scope="row">PHP</th>
                <td>Nidhi Verma</td>
                <td>
                  <button className="btn btn-primary">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
              
    </section>
                
    </div>
    </div>
    </>
  );
};

export default RecommendedCourse;
