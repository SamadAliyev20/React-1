import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
   <header>
    <div className="container">
        <div className="row">
            <div className="col-lg-2 col-3 left">
            <Link to="/">Code</Link>
            </div>
            <div className="col-lg-10 col-12 text-end right align-items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/exp">Expensive Products</Link>
            </div>
        </div>
    </div>
   </header>
  )
}

export default Header