import React from 'react'
import { Nav } from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom';


const SecureRoute = () => {
    const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));

  return (
    <div>
      {isLoggedIn? <Outlet/> : <Navigate to= '/signin' /> }
    </div>
  )
}

export default SecureRoute
