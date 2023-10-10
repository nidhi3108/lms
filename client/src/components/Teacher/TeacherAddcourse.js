import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

const TeacherAddcourse = () => (
  <>
    <div className="container  mt-2">
      <div className="row">
        <div className="col-md-3">
          <TeacherSidebar />
        </div>
        <div className="col-md-9 mt-4 card mt-4 border border-secondary">
          <h5 className="card-header"> Add Course</h5>
          <section>
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center ">
                <div>
                  <form>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row mb-4">
                      <div className="mb-0">
                        <label className="form-label" htmlFor="form6Example1">
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="form-control"
                          // onChange={handleChange}
                          // value={values.name}
                        />
                      </div>
                      <div className="mb-0">
                        <label className="form-label" htmlFor="form6Example5">
                          Category
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          //   onChange={handleChange}
                          //   value={values.email}
                        />
                      </div>
                      <div className="mb-0">
                        <label className="form-label" htmlFor="form6Example6">
                          Description
                        </label>
                        <textarea
                          class="form-control"
                          id="textAreaExample"
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="mb-1">
                        <label className="form-label" htmlFor="form6Example5">
                          Thumbnail
                        </label>
                        <input
                          type="file"
                          id="file"
                          className="form-control"
                          //   onChange={handleChange}
                          //   value={values.email}
                        />
                      </div>
                      <div className="mb-1">
                        <label className="form-label" htmlFor="form6Example5">
                          File
                        </label>
                        <input
                          type="file"
                          id="file"
                          className="form-control"
                          //   onChange={handleChange}
                          //   value={values.email}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="form6Example5">
                          Technology
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          //   onChange={handleChange}
                          //   value={values.email}
                        />
                      </div>
                      {/* Submit button */}
                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default TeacherAddcourse;
