import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6";
const Navbar = ({cart,setcart}) => {
  return (
      <div className='mainContainer'>
        <nav>
        <div className='logo'>
          <div className='foodlogo'>🍔</div>
          <div className='logoName'>Foodie & Sweets Corner</div>
        </div>
        <ul className='listItems'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={""}><FaCartShopping /></Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar