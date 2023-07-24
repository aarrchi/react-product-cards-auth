import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const logoutHandler = () => {
      navigate('/signin');
      sessionStorage.setItem('isLoggedIn', false)
    }
  return (
    <div>
      <h1>This is home page</h1>
      <button className='btn btn-primary' onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Home
