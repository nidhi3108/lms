import React from 'react'
import Cardcourse from './Cardcourse'

const Home=()=>{
    return(
        <>
        <h3>Latest Courses</h3> 
        <div className="container">
        <div className="row">
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        <Cardcourse  title="React" description="This is most popular course to learn" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"/>
        </div>
        </div>
       
        </>
    )
}
export default Home