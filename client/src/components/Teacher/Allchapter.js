import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Trash2 } from 'react-feather';

const Allchapter = () => {
  const [backendData, setBackendData] = useState([]);
  const {id}=useParams();
  console.log(id);
  const url = "http://localhost:5000/";

  const showChapter = async () => {
    const response = await fetch("http://localhost:5000/chapter/getall/"+id);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setBackendData(data);
    console.log(backendData.length);
  };

  const showAllChapter = () => {
    return backendData.map((data) => (
      <div className="col-md-3">
        <div className="card">
          <img
            src={url + data.file}
            className="card-img-top"
            style={{ height: "250px" }}
            alt="Fissure in Sandstone"
          />
          <div className="card-body d-flex justify-content-between">
            <div className="chapterData">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-title">{data.description}</p>              
            </div>
            <Link to={"/teacher-addchapter"} className=" me-1"style={{height: "fit-content"}} >
              <Trash2 style={{color: 'red'}}/>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    showChapter();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col mt-2"> 
            <div className="card">
                <div className="head d-flex justify-content-between">
               
              <h5 >My Chapter</h5>
              <Link to="/teacher-mycourses" className="btn btn-primary me-1" >Back to my courses</Link>
                   
              </div>
              <div className="card-body">
                <div className="row">{showAllChapter()}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Allchapter;
