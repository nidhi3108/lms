import React from "react";
import TeacherSidebar from "./TeacherSidebar";

const TeacherChangepassword = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col-md-3">
            <TeacherSidebar/>
          </section>
          <section className="col-md-9 mt-4">
            <div className="card">
              <h5 className="card-header">Change password</h5>
              <div className="card-body">
                <form>
                  {/* Email input */}
                  <div className="mb-2">
                  <label className="form-label" htmlFor="form1Example1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form1Example1"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                  <label className="form-label" htmlFor="form1Example2">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="form1Example2"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                  <label className="form-label" htmlFor="form1Example2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="form1Example2"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TeacherChangepassword;
