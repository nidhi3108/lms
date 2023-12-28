import React, { useEffect } from 'react'
import Cardcourse from './Cardcourse'
import Testimonial from './Testimonials'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import CardPopularTeachercourse from './CardPopularTeacher'

// let mapData = [
//     {
//         "title":"React",
//         "description":"This is react course",
//         "imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
//     },
//     {
//         "title":"React",
//         "description":"This is react course",
//         "imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
//     },
//     {
//         "title":"React",
//         "description":"This is react course",
//         "imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
//     },
//     {
//         "title":"React",
//         "description":"This is react course",
//         "imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
//     },
   
// ];


const AboutUs=()=>{
//here firstly fetched enrolled courses of a student them compare and show acc to color
//id currentstudent deatisl is null then normally show all the course but if the current stuednt is not null 
//them show all courses by comparing with fethced coures


const url = "http://localhost:5000/";
const [backendData, setBackendData] = useState([]);
const [backendTeacherData, setbackendTeacherData] = useState([])


const showAllCourse= async ()=> {
    const response = await fetch("http://localhost:5000/course/getallcourse");
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setBackendData(data);
    console.log(backendData.length);
}

const showAllTeacher = async ()=>{
    const response = await fetch("http://localhost:5000/teacher/getallTeacher");
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setbackendTeacherData(data);
    console.log(setbackendTeacherData.length);
  }
  

  
  
useEffect(()=>{
      showAllTeacher();
      showAllCourse();
},[]) 


    useEffect(() => {
        document.title="Home Page";
        
    });
    return(
        <>
        <div className="container mt-4">
        <h3>Latest Courses <NavLink to="/all-latest-courses" className='float-end'>See All</NavLink></h3> 
        <div className="row">
            {backendData.slice(0, 4).map( 
                (data)=>{return  <Cardcourse  title={data.title} description={data.description} img={url+data.thumbnail} id={data._id}/>}
                )}
        </div>
        <h3>Popular Teachers <NavLink to="/all-latest-teacher" className='float-end'>See All</NavLink></h3> 
        <div className="row">
       {backendTeacherData.slice(0, 4).map(
                (data)=>{return  <CardPopularTeachercourse  title={data.name} img={url+data.thumbnail} id={data._id}/>}
                )}       
        </div>
        <h3>Testimonial</h3> 
        <Testimonial/>
        </div>
       
        </>
    )
}
export default AboutUs