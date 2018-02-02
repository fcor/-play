import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/+play.png'
import palma from '../images/palma.png'

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
        <NavLink activeClassName="selected" to='/motion'>Motion</NavLink>
       </li>
       <li>
         <NavLink activeClassName="selected" to='/installation'>Installation</NavLink>
       </li>
       <li>
         <NavLink activeClassName="selected" to='/360'>360°|VR</NavLink>
       </li>
       <li>
         <img src={palma} alt="palma" width="50px"/>
       </li>
       <li>
         <NavLink activeClassName="selected" to='/reel'>
           <PoolNav>REEL</PoolNav>
         </NavLink>
       </li>
       <li>
         <NavLink activeClassName="selected" to='/about'>
           <PoolNav>ABOUT</PoolNav>
         </NavLink>
       </li>
     </ul>
   </div>
   <p className="url">WWW.MUCHOMASPLAY.COM</p>
 </div>

 const PoolNav = ({children}) =>
 <div className="pool-box">
   { children === 'REEL'
      ? <svg xmlns="http://www.w3.org/2000/svg" width="71.721" height="29.828">
         <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M15.063 12.945L.5 19.316l19.114 10.012L71.221 7.326 57.069.5"/><path d="M10.605 22.155c-.663-2.915-5.408-1.807-5.341 2.897M14.514 24.673c-.663-2.915-5.408-1.807-5.341 2.897" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10"/>
        </svg>
      : <svg xmlns="http://www.w3.org/2000/svg" width="85.101" height="35.131">
         <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M15.063 18.248L.5 24.619l19.114 10.012L84.601 8.079 68.193.5"/><path d="M10.806 27.562c-.663-2.915-5.408-1.807-5.341 2.897M14.714 30.079c-.663-2.915-5.408-1.807-5.341 2.897" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10"/>
        </svg>
   }
   <p className="pool-text">{children}</p>
 </div>

export default Menu
