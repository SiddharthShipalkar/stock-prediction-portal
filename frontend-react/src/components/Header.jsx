import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3' >
      <Link className='navbar-brand text-dark' to="/">Stock Prediction Portal</Link>
      <div>
        <Link className='btn btn-outline-info'to="/login">Login </Link>
        &nbsp;
                <Link className='btn btn-info' to="/register">Register </Link>

      </div>
        

    </nav>
    </>
    
  )
}

export default Header