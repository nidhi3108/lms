import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Authorize = ({children}) => {

    const [currentTeacher, setcurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('currentTeacher')));
    console.log(currentTeacher);

    if(currentTeacher === null)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oooops!!!',
            text: 'Login to Continue...'
        })
        return <Navigate to='/teacher-login'/>
    }


  return (
    children
  )
}

export default Authorize