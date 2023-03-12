import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
       <div className="left">
        Products Store
       </div>
       <div className="right">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products </Link>
        <Link to={"/cart"}>Cart {0} </Link>
       </div>
    </div>
  )
}

export default Navbar