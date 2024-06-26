import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon2.png'


export const Navbar = () => {

     const[menu,setmenu]=useState("shop")
     const {getTotalCartItems}= useContext(ShopContext);
     const menuref = useRef();

    const dropdown_toggle = (e) =>{
        menuref.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
     
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
            <p>ShopEase</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuref} className='nav-menu'>
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration: 'none' }} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration: 'none' }} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration: 'none' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><img src={cart_icon} alt='cart-icon'/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
export default Navbar
