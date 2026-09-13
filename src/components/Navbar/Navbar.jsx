import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6";
import CartSidebar from '../CartSidebar/CartSidebar';
const Navbar = ({cart,setCart}) => {
  let [show,setShow] = useState(false)
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
          <li><Link to={""} onClick={()=>setShow(true)}><FaCartShopping />
          <span>{cart.length}</span></Link></li>
        </ul>
    </nav>
    {
      show && <CartSidebar show = {show} setShow={setShow} cart={cart} setCart={setCart}/>
    }
    </div>
  )
}

export default Navbar