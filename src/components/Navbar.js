import React from 'react'
import { NavLink } from 'react-router-dom'
import palmaNav from '../images/palmaNav.gif'

const Navbar = ({ version, onClick }) => {
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

  let basicProps = {}
  if (version === 'desktop') {
    basicProps.activeClassName = 'selected'
  }

  let motionMatchProps = {}
  let installationMatchProps = {}
  let vrMatchProps = {}
  if (version === 'desktop') {
    motionMatchProps.isActive = motionMatch
    installationMatchProps.isActive = installationMatch
    vrMatchProps.isActive = vrMatch
  }

  const motionProps = {...basicProps, ...motionMatchProps}
  const installationProps = {...basicProps, ...installationMatchProps}
  const vrProps = {...basicProps, ...vrMatchProps}

  let clickProps= {}
  if (version === 'mobile') {
    clickProps.onClick = onClick
  }

  return(
    <div className={`navbar ${version === 'mobile' ? 'mobile' : ''}`}>
      <ul>
        <li {...clickProps}>
          <NavLink to='/motion' {...motionProps}>
            Motion
          </NavLink>
        </li>
        <li {...clickProps}>
          <NavLink to='/space' {...installationProps}>
            Space
          </NavLink>
        </li>
        <li {...clickProps}>
          <NavLink to='/360' {...vrProps}>
            360°|VR
          </NavLink>
        </li>
        {version === "desktop" &&
            <li>
              <img src={palmaNav} alt="palma" width="25px"/>
            </li>
        }
        <li {...clickProps}>
          <NavLink to='/reel' {...basicProps}>
            {version === "desktop"
              ? <PoolNav>REEL</PoolNav>
              : 'Reel'
            }
          </NavLink>
        </li>
        <li {...clickProps}>
          <NavLink to='/about' {...basicProps}>
          {version === "desktop"
            ? <PoolNav>ABOUT</PoolNav>
            : 'About'
          }
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
