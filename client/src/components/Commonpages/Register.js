import React, { useState } from "react";
const Register = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    address:'',
    interest: '',
    password: '',
  });
 let name,value;
  const handleInputChange = (e) => {
    name=e.target.name
    value=e.target.value
    console.log("error in  phle setform handlechange");
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("error in handlechange");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
    console.log("error in handlesubmit");
  }
  return (
    <>
     <h3 className="text-center mt-4">{props.title}</h3>
      <div className="container w-50 mt-4 border border-secondary rounded">
        <form  onSubmit={handleSubmit}>
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <div className="col">
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
          <div className="mb-4">
          <label className="form-label" htmlFor="form6Example5">
              {props.email}
            </label>
            <input type="email" name="email" id="email" className="form-control"
            value={formData.email}
            onChange={handleInputChange}
             />
           
          </div>
          {/* Number input */}
          <div className="mb-4">
          <label className="form-label" htmlFor="form6Example6">
              {props.phone}
            </label>
            <input type="text" name="phone" id="phone" className="form-control" 
            value={formData.phone}
            onChange={handleInputChange}
            />
          
          </div>
          <div className=" mb-4">
          <label className="form-label" htmlFor="form6Example4">
              {props.address}
            </label>
            <input type="text" name="address" id="address" className="form-control"
            value={formData.address}
            onChange={handleInputChange}
            />
            
          </div>
          <div className=" mb-4">
          <label className="form-label" htmlFor="form6Example4">
              {props.interest}
            </label>
            <input type="password" name="interest" id="interest" className="form-control" 
            value={formData.interest}
            onChange={handleInputChange}
            />
            
          </div>
          <div className=" mb-4">
          <label className="form-label" htmlFor="form6Example4">
              {props.password}
            </label>
            <input type="password" name="password" id="password" className="form-control" 
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