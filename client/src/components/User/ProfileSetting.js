import React from "react";
import Sidebar from "./Sidebar";

const ProfileSetting = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col-md-3">
            <Sidebar />
          </section>
          <section className="col-md-8 mt-4 border border-radius">
            <div className="card">
              <h5 className="card-header">Change Profile</h5>
              <div className="card-body">
                <form>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-3">
                    <div className="col">
                      <div className="">
                      <label className="form-label" htmlFor="form3Example1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                        />

                      </div>
                    </div>
                  </div>
                  {/* Email input */}
                  <div className=" mb-3">
                  <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                    />

                  </div>
                  {/* Password input */}
                  <div className="mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                    />
                    
                  </div>
                  <button className="btn btn-primary">Save</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProfileSetting;
