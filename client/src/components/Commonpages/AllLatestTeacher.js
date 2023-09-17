import React from "react";
import { NavLink } from 'react-router-dom'
import CardPopularTeachercourse from '../Home/CardPopularTeacher'
const AllLatestTeacher = (props) => {
  return (
    <>
    <div className="container mt-4">
     <h3>Popular Teachers</h3> 
     <div className="row">
        <CardPopularTeachercourse  title="Ashish" description="This is most popular Teacher" img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"/>
        <CardPopularTeachercourse  title="Ashish" description="This is most popular Teacher" img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"/>
        <CardPopularTeachercourse  title="Ashish" description="This is most popular Teacher" img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"/>
        <CardPopularTeachercourse  title="Ashish" description="This is most popular Teacher" img="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"/>
        </div>
             {/* pagination */}
             <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <a className="page-link" href="#">
        Previous
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        Next
      </a>
    </li>
  </ul>
</nav>

    </div>
    </>
  )
}
  export default AllLatestTeacher