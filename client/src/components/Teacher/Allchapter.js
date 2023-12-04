import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Trash2 } from 'react-feather';

const Allchapter = () => {
  
  const [currentTeacher, setcurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('currentTeacher')))

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
  const deletechapter= async (data)=>{
    console.log(data);
    console.log("delete chapter");
    const response=  await fetch('http://localhost:5000/chapter/delete/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  console.log(response);
  if(response.status===200){
     console.log("chapeter deleted");
  }
  else{
     console.log("some error in chapter deletion");
  }

  showChapter();
  }
  const showAllChapter = () => {
    return backendData.map((data) => (
      <div className="col-md-3">
        <div className="card">
          
        <NavLink to={data.youtubeURL} target="_blank">
          <img
            src={url + data.file}
            className="card-img-top"
            style={{ height: "250px" }}
            alt="Fissure in Sandstone"
          />
          </NavLink>
          <div className="card-body d-flex justify-content-between">
            <div className="chapterData">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-title">{data.description}</p>              
            </div>
            <button onClick={() => deletechapter(data)}>
              <Trash2 style={{color: 'red'}} />
            </button>
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
              <Link to={"/teacher-mycourses/"+currentTeacher._id} className="btn btn-primary me-1" >Back to my courses</Link>
                   
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
