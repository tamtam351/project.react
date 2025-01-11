import React,{useState} from 'react';
import './Nabvar.css';
import LOGO from '../../assets/logo.png'; // Correct the logo import path
import { FaCartShopping } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu]=useState("shop")
  return (
    <div className='navbar'>
     
      <div className="nav-logo">
        <img src={LOGO} alt="Logo" />
      </div>
     
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("shop")}> <Link to="/" style={{textDecoration:"none"}}>Shop</Link> {menu =='shop' ? <hr/>:<></>}</li>
        <li onClick={()=>setMenu("mens")}> <Link to="/mens" style={{textDecoration:"none"}}>Men</Link> {menu =='mens' ? <hr/>:<></>}</li>
        <li onClick={()=>setMenu("womens")}><Link to="womens" style={{textDecoration:"none"}}>Women</Link> {menu =='womens' ? <hr/>:<></>}</li>
        <li onClick={()=>setMenu("kids")}> <Link to="/kids" style={{textDecoration:"none"}}>kids</Link>{menu =='kids' ? <hr/>:<></>}</li>
      </ul>

      <div className='nav-login-cart'>
        <button>Login</button>
        <FaCartShopping className='cart' />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;


