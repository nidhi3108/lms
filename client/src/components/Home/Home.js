import React, { useEffect } from 'react'
import Cardcourse from './Cardcourse'
import Testimonial from './Testimonials'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


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

const Home=()=>{

const url = "http://localhost:5000/";
const [backendData, setBackendData] = useState([]);


const showAllCourse= async ()=> {
    const response = await fetch("http://localhost:5000/course/getallcourse");
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setBackendData(data);
    console.log(backendData.length);
}

useEffect(()=>{
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
                (data)=>{return  <Cardcourse  title={data.title} description={data.description} img={url+data.thumbnail}/>}
                )}
       
        
        </div>
     
        <h3>Popular Teachers <NavLink to="/all-latest-teacher" className='float-end'>See All</NavLink></h3> 
        <div className="row">
        <Cardcourse  title="Ashish" description="This is most popular Teacher" img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        <Cardcourse  title="Ashish" description="This is most popular Teacher" img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"/>
        <Cardcourse  title="Ashish" description="This is most popular Teacher" img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"/>
        <Cardcourse  title="Ashish" description="This is most popular Teacher" img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"/>
        </div>
        <h3>Testimonial</h3> 
        <Testimonial/>
        </div>
       
        </>
    )
}
export default Home