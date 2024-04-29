import React, {useEffect} from 'react'
import Cardcourse from './Cardcourse'
import Testimonial from './Testimonials'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import CardPopularTeachercourse from './CardPopularTeacher'
import {baseUrl} from '../../utils/constants'




const AboutUsTeacher = () => {


  const url = baseUrl;
  const [backendData, setBackendData] = useState([]);
  const [backendTeacherData, setbackendTeacherData] = useState([])


  const showAllCourse = async () => {
    const response = await fetch(`${baseUrl}/course/getallcourse`);
    console.log(response.status);
    const data = await response.json();
    console.log("show all course data :: ", data);
    setBackendData(data);
    console.log(backendData.length);
  }

  const showAllTeacher = async () => {
    const response = await fetch(`${baseUrl}/teacher/getallTeacher`);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setbackendTeacherData(data);
    console.log(setbackendTeacherData.length);
  }


  useEffect(() => {

    showAllTeacher()
    showAllCourse()
  }, [])


  useEffect(() => {
    document.title = "Home Page";

  });
  return (
    <>
      <div className="container mt-4">
        <h3>Latest Courses <NavLink to="/all-latest-courses" className='float-end'>See All</NavLink></h3>
        <div className="row">
          {backendData.slice(0, 4).map(
            (data) => {
              return <Cardcourse title={data.title} description={data.description} img={baseUrl+"/"+ data.thumbnail}
                                 id={data._id}/>
            }
          )}
        </div>
        <h3>Popular Teachers <NavLink to="/all-latest-teacher" className='float-end'>See All</NavLink></h3>
        <div className="row">
          {backendTeacherData.slice(0, 4).map(
            (data) => {
              return <CardPopularTeachercourse title={data.name} img={baseUrl +"/"+ data.thumbnail} id={data._id}/>
            }
          )}
        </div>
        <h3>Testimonial</h3>
        <Testimonial/>
      </div>

    </>
  )
}
export default AboutUsTeacher
