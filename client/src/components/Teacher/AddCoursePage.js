import { Formik } from "formik";
import React, { useRef, useState } from "react";
const AddCoursePage = () => {
  // const flag="course"
  const [currentTeacher, setcurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('currentTeacher')))
    const [selFile, setSelFile] = useState("")
    const [selThumbnail, setSelThumbnail] = useState("")
    const fileInputRef= useRef();
    const thumbnailInputRef= useRef();

  const CourseSubmit = async (formdata,{resetForm}) => {
    formdata.file = selFile;
    formdata.thumbnail = selThumbnail;
    console.log(formdata);

    const response = await fetch("http://localhost:5000/course/add", {
      method: 'POST',
      body: JSON.stringify({coursedata:formdata,createdBy: currentTeacher._id}),
      headers: {
        "Content-Type": "application/json",
      },
    });
   console.log(response);
   const userData = await response.json();
   if(response.status === 200){
    console.log('course save Successful');
    sessionStorage.setItem('currentCourse',JSON.stringify(userData));
   }
   // Clear the file inputs
   if (fileInputRef.current) {
     fileInputRef.current.value = null;
   }
   if (thumbnailInputRef.current) {
     thumbnailInputRef.current.value = null;
   }
  resetForm();

  };

  const uploadFile=(e)=>{
    const file=e.target.files[0];
    setSelFile(file.name)  
    const fd = new FormData();
    fd.append("myfile", file); 
    fetch("http://localhost:5000/file/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
      console.log("file uploaded");
      }
    });

  }

  const uploadThumbnail=(e)=>{
    const file = e.target.files[0];
    setSelThumbnail(file.name);
    const fd = new FormData();
    fd.append("myuploadfile", file);
    fetch("http://localhost:5000/file/thumbnailfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
      console.log("thumbnail uploaded");
      }
    });


  }
  return (
    <>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center ">
          <div>
            <Formik
              initialValues={{
                title: " ",
                category: " ",
                description: " ",
                thumbnail: null,
                file: null,
                technology: " ",
                createdBy:currentTeacher._id,
                createdAt: new Date()
              }}
              onSubmit={CourseSubmit}
            >
              {({ values, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-4">
                    <form>
                      <div className="mb-0">
                        <label className="form-label" htmlFor="form6Example1">
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="form-control"
                          onChange={handleChange}
                          value={values.title}
                        />
                      </div>
                      <div className="mb-0">
                        <label className="form-label" htmlFor="form6Example5">
                          Category
                        </label>
                        <input
                          type="text"
                          id="category"
                          className="form-control"
                          onChange={handleChange}
                          value={values.category}
                        />
                      </div>
                      <div className="mb-0">
                        <label className="form-label" htmlFor="form6Example6">
                          Description
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="description"
                          rows="4"
                          onChange={handleChange}
                          value={values.description}
                        ></textarea>
                      </div>
                      <div className="mb-1">
                        <label className="form-label" htmlFor="form6Example5">
                          Thumbnail
                        </label>
                        <input
                          type="file"
                          id="thumbnail"
                          className="form-control"
                          onChange={ uploadThumbnail}
                        //   value={values.thumbnail}
                        ref={thumbnailInputRef}
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
                          onChange={uploadFile}
                          ref={fileInputRef}
                        //   value={values.file}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="form6Example5">
                          Technology
                        </label>
                        <input
                          type="technology"
                          id="technology"
                          className="form-control"
                          onChange={handleChange}
                          value={values.technology}
                        />
                      </div>
                    </form>
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
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddCoursePage;
