import React from "react";
import { NavLink } from 'react-router-dom'
import Cardcourse from '../Home/Cardcourse'
const Allcourses = (props) => {
  return (
    <>
    <div className="container">
     <h3>Latest Courses  <NavLink to="/all-courses" className='float-end'>See All</NavLink></h3> 
        <div className="row">
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        </div>
                
    </div>
    </>
  )
}
  export default Allcourses