import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/+play.png'

const Menu = () =>
 <div className="menu">
   <div className="logo-box">
     <Link to="/">
       <img src={logo} alt="+play logo" width="250px"/>
     </Link>
   </div>
   <div className="navbar">
     <ul>
       <li>
        <NavLink to='/motion'>Motion</NavLink>
       </li>
       <li>
         <NavLink to='/installation'>Installation</NavLink>
       </li>
       <li>
         <NavLink to='/360'>360°|VR</NavLink>
       </li>
       <li>
         <NavLink to='/about'>ABOUT</NavLink>
       </li>
     </ul>
   </div>
   <p>WWW.MUCHOMASPLAY.COM</p>
 </div>

export default Menu
