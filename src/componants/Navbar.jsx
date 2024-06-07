import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div  className='navbar'>
      <div className='links'>
          <h4 className='logo'>SCENT <span className='logo2'>IFY</span></h4>
          <Link to="/about">About</Link>
          <Link to="contact">Contactus</Link>
          <Link to="home">Home</Link>
          <Link to="/">Shop</Link>
          
          <Link to="/cart" > < FaShoppingBag size={32}/> </Link>

      </div>
    </div>
  )
}

export default Navbar
