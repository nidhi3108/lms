import React from "react";
const Login = (props) => {
  return (
    <>
    <h3 className="text-center mt-4">{props.title}</h3>
      <div className="container w-50 mt-4 border border-secondary rounded">
        <form>
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <div className="col">
              <label className="form-label" htmlFor="form6Example1">
                  {props.name}
                </label>
                <input
                  type="text"
                  id="form6Example1"
                  className="form-control"
                />
              </div>
            </div>
          {/* Text input */}
          {/* <div className=" mb-4">
          <label className="form-label" htmlFor="form6Example3">
          {props.company}
            </label>
            <input type="text" id="form6Example3" className="form-control" />
           
          </div> */}
          {/* Text input */}
          {/* <div className=" mb-4">
          <label className="form-label" htmlFor="form6Example4">
          {props.address}
            </label>
            <input type="text" id="form6Example4" className="form-control" />
            
          </div> */}
          {/* Email input */}
          <div className="mb-4">
          <label className="form-label" htmlFor="form6Example5">
          {props.email}
            </label>
            <input type="email" id="form6Example5" className="form-control" />
           
          </div>
          {/* Number input */}
          {/* <div className="mb-4">
          <label className="form-label" htmlFor="form6Example6">
          {props.phone}
            </label>
            <input type="text" id="form6Example6" className="form-control" />
          
          </div> */}
           <div className="mb-4">
          <label className="form-label" htmlFor="form6Example6">
          {props.password}
            </label>
            <input type="password" id="form6Example6" className="form-control" />
          
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
