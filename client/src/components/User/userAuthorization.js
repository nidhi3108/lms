import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuthorization = ({children}) => {

    const [currentStudent, setcurrentStudent] = useState(JSON.parse(sessionStorage.getItem('currentStudent')));
    console.log(currentStudent);

    if(currentStudent === null)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oooops!!!',
            text: 'Login to Continue...'
        })
        return <Navigate to='/user-login'/>
    }


  return (
    children
  )
}

export default UserAuthorization