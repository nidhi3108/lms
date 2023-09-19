import React from "react";
import {Formik} from "formik";
const Login = (props) => {
  const LoginSubmit = (formdata) => {
    console.log(formdata);
  };
  return (
    <>
      <h3 className="text-center mt-4">{props.title}</h3>
      <div className="container w-50 mt-4 border border-secondary rounded">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={LoginSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {/* 2 column grid layout with text inputs for the first and last names */}
              <div className="row mb-4">
                <div className="col">
                  <label className="form-label" htmlFor="form6Example1">
                    {props.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
              </div>
         
              {/* Email input */}
              <div className="mb-4">
                <label className="form-label" htmlFor="form6Example5">
                  {props.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              {/* Number input */}
             
              <div className="mb-4">
                <label className="form-label" htmlFor="form6Example6">
                  {props.password}
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
