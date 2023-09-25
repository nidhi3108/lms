import React, { useState } from "react";
const Register = (props) => {
  const flag = props.flag;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    interest: "",
    password: "",
    flag: "",
  });
  let name, value;
  const handleInputChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("success handlesubmit");
  };
  return (
    <>
      <h3 className="text-center mt-4">{props.title}</h3>
      <div className="container w-50 mt-4 border border-secondary rounded">
        <form onSubmit={handleSubmit}>
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <div className="col">

              {/* name  */}
              <div className="">
                <label className="form-label" htmlFor="form6Example1">
                  {props.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          {/* email  */}
          <div className="mb-4">
            <label className="form-label" htmlFor="form6Example5">
              {props.email}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          {/* phone no input */}
          <div className="mb-4">
            <label className="form-label" htmlFor="form6Example6">
              {props.phone}
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* addresss */}
          <div className=" mb-4">
            <label className="form-label" htmlFor="form6Example4">
              {props.address}
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-control"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
 {/* interest  */}
          {/* <div className=" mb-4">
            <label className="form-label" htmlFor="form6Example4">
              {props.interest}
            </label>
            <input
              type="text"
              name="interest"
              id="interest"
              className="form-control"
              value={formData.interest}
              onChange={handleInputChange}
            />
          </div> */}

          {flag == "student" ? (
            <div className=" mb-4">
              <label className="form-label" htmlFor="form6Example4">
                {props.interest}
              </label>
              <input
                type="text"
                name="interest"
                id="interest"
                className="form-control"
                value={formData.interest}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <div className=" mb-4">
              <label className="form-label" htmlFor="form6Example4">
                {props.qualification}
              </label>
              <input
                type="text"
                name="qualification"
                id="qualification"
                className="form-control"
                value={formData.qualification}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* password  */}
          <div className=" mb-4">
            <label className="form-label" htmlFor="form6Example4">
              {props.password}
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="form-control"
              value={formData.password}
              onChange={handleInputChange}
            />
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

export default Register;
