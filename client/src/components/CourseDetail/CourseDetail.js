import React from "react";
import { Youtube } from "react-feather";
import { NavLink, useParams } from "react-router-dom";
import Cardcourse from "../Home/Cardcourse";
const CourseDetail = () => {
  let { course_id } = useParams();
  return (
    <>
      <div className="container mt-5 w-75">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer. This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer.
                </p>
                <p className="fw-bold">
                  Course By: <NavLink to="/teacher-detail/1">Teacher 1</NavLink>
                </p>
                <p className="fw-bold">Durationn: 3 Hours 30 minute</p>
                <p className="fw-bold">Total Enrolled: 456 Students</p>
                <p className="fw-bold">Rating: 4/5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4 border border-secondary ">
          <ul className="list-group list-group-flush">
            <div className="card-header ">Course Videos</div>
            <li className="list-group-item ">
              Introduction
              <button
                type="button"
                className="btn btn-sm btn-danger float-end"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <Youtube />
                {/* <model start here */}
                {/* Modal */}
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog model-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title text-black"
                          id="staticBackdropLabel"
                        >
                          Video 1
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div class="ratio ratio-16x9">
                          <iframe
                            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                            title="YouTube video"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* model end here */}
              </button>

            </li>
            <li className="list-group-item ">
              Setup Project
              <button className="btn btn-sm btn-danger float-end">
                <Youtube />
              </button>
            </li>
            <li className="list-group-item ">
              Complete it
              <button className="btn btn-sm btn-danger float-end">
                <Youtube />
              </button>
            </li>
            <li className="list-group-item ">
              Deployment
              <button className="btn btn-sm btn-danger float-end">
                <Youtube />
              </button>
            </li>
          </ul>
        </div>
        <h3 className="mt-4">Related Course</h3>
        <div className="row">
          <Cardcourse
            title="React"
            description="This is most popular course to learn"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
          />
          <Cardcourse
            title="React"
            description="This is most popular course to learn"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
          />
          <Cardcourse
            title="React"
            description="This is most popular course to learn"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
          />
          <Cardcourse
            title="React"
            description="This is most popular course to learn"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
          />
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
