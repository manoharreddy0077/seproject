import React from 'react'
import Register from './Register'
import Login from './Login'
import './AuthContainer.css'


const AuthContainer = () => {
  return (
    <div className='user'>
      <Register/>
      <Login/>
    </div>
  )
}

export default AuthContainer;
