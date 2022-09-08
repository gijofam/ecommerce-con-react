import React from 'react'
import { Link } from 'react-router-dom'

const LogOut = () => {

  const handleClick = () => {
    localStorage.removeItem('token')
  }
  return (
    <div className='log-out'>
        <div className='log-out__icon'>
        <i className='bx bxs-user'></i>
        </div>
        <h4></h4>
        <Link onClick={handleClick} to='/login' className='log-out__link'>
          <h5 className='log-out__link-content'>Log out</h5>
        </Link>
    </div>
  )
}

export default LogOut