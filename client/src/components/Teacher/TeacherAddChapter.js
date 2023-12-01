import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const TeacherAddChapter= () => {
  const [currentTeacher, setcurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('currentTeacher')))
  const [youtubeURL, setYoutubeURL] = useState("");


  let selectedCourseId = localStorage.getItem("selectedCourse");
const flag ="chapter";
  const [selFile, setSelFile] = useState("")
  const fileInputRef= useRef();
const ChapterSubmit = async (formdata,{resetForm}) => {
  formdata.file = selFile;
  formdata.courseId = selectedCourseId;
  console.info("Add chapter form data >>>>> ",formdata);

  const response = await fetch("http://localhost:5000/chapter/add", {   
    method: 'post',
    body: JSON.stringify(formdata),
    headers:{
        'Content-Type': 'application/json'
    }
  });
 console.log("chapter data saved in backend ::: response => ",response);
 localStorage.removeItem("selectedCourse");



 // Clear the file inputs
 if (fileInputRef.current) {
   fileInputRef.current.value = null;
 }
resetForm();

};
const handleInputChange = (e) => {
  setYoutubeURL(e.target.value);
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

    return (
        <>
          <div className="head d-flex justify-content-around mt-3">
               
               <h5 >Add Chapter</h5>
               <Link to={"/teacher-mycourses/"+currentTeacher._id} className="btn btn-primary me-1" >Back to my courses</Link>
                    
               </div>
        <div className="container w-50 mt-3" style={{border:"1px solid black"}}>
        <div className="row d-flex justify-content-center align-items-center ">
      
          <div>
            <Formik
              initialValues={{
                title: " ",
                description: " ",
                thumbnail: null,
                file: null,
                technology: " ",
                // createdBy:currentCourse._id,
                createdAt: new Date()
              }}
              onSubmit={ChapterSubmit}
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
                      <div>
      <label>
        Paste YouTube Video URL:
        <input
          type="text"
          value={youtubeURL}
          onChange={handleInputChange}
          placeholder="Paste YouTube video URL here"
        />
      </label>
      <a href={youtubeURL} target="_blank" rel="noopener noreferrer">
        {youtubeURL && "Click here to view the video"}
      </a>
    </div>
                    </form>
                    {/* Submit button */}
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-3"
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
    )
}
export default TeacherAddChapter