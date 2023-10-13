import { Formik } from "formik";
import React, { useState } from "react";
const AddCoursePage = () => {
    const [selFile, setSelFile] = useState("")
    const [selThumbnail, setSelThumbnail] = useState("")
  const CourseSubmit = (formdata) => {
      const formData = new FormData();
      formData.append("file", formData.file);
      formData.append("thumbnail", formData.thumbnail);
      console.log(formdata);
  };

  const uploadFile=(e)=>{
    const file=e.target.files[0];
    setSelFile(file.name)   

  }

  const uploadThumbnail=(e)=>{
    const file = e.target.files[0];
    setSelThumbnail(file.name);


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
