import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import palmaNav from '../images/palmaNav.gif'

const Navbar = () => {
  const motion = ["mundo",
                  "coca",
                  "adidas",
                  "nike",
                ]

  const space = ["topologias",
                        "sonar",
                        "warm",
                        "moto",
                      ]

  const vr = ["redbullP",
              "planoz",
              "cuerpos",
              "uber",
              "redbull",
              "freaky",
              "samsung",
            ]

  const motionMatch = (match, location) => {
    if (match) {
      return true
    } else {
      const url = location.pathname.slice(1)
      return motion.includes(url)
    }
  }
  const installationMatch = (match, location) => {
    if (match) {
      return true
    } else {
      const url = location.pathname.slice(1)
      return space.includes(url)
    }
  }
  const vrMatch = (match, location) => {
    if (match) {
      return true
    } else {
      const url = location.pathname.slice(1)
      return vr.includes(url)
    }
  }

  return(
    <div className="navbar">
      <ul>
        <li>
          <NavLink activeClassName="selected"
                   to='/motion'
                   isActive={motionMatch}>
            Motion
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected"
                   to='/space'
                   isActive={installationMatch}>
            Space
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected"
                   to='/360'
                   isActive={vrMatch}>
            360°|VR
          </NavLink>
        </li>
        <li>
          <img src={palmaNav} alt="palma" width="25px"/>
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
  )
}

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

export default Navbar
