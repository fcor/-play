import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/+play.png'
import Navbar from './Navbar'
import LangBox from './LangBox'
import Hamburger from './Hamburger'

const Menu = ({changeLang, lang, version, handleOverlay}) => {
     if (version === "desktop") {
       return(
        <div className="menu">
          <LangBox lang={lang} changeLang={changeLang} version="desktop"/>
          <LogoBox logo={logo} width="180px" className="logo-desktop"/>
          <Navbar version="desktop" />
        </div>
       )
     } else {
       return(
         <div className="menu-responsive">
           <Hamburger lang={lang} changeLang={changeLang} handleOverlay={handleOverlay} />
           <LogoBox logo={logo} width="140px" />
           <Nav />
         </div>
       )
     }
}

const Nav = () => {
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
  const tagMatch = ( match, location, tag ) => {
    if (match) {
      return true
    } else if( tag === 'motion') {
      const url = location.pathname.slice(1)
      return motion.includes(url)
    } else if( tag === 'space') {
      const url = location.pathname.slice(1)
      return space.includes(url)
    } else if( tag === 'vr') {
      const url = location.pathname.slice(1)
      return vr.includes(url)
    }
  }
  return(
    <div className="plain-navbar">
      <ul>
        <li>
          <NavLink to='/motion'
                   activeClassName = 'selected'
                   isActive = {(match, location) => tagMatch(match, location, 'motion')}
                   >
            Motion
          </NavLink>
        </li>
        <li>
          <NavLink to='/space'
                   activeClassName = 'selected'
                   isActive = {(match, location) => tagMatch(match, location, 'space')}
                   >
            Space
          </NavLink>
        </li>
        <li>
          <NavLink to='/360'
                   activeClassName = 'selected'
                   isActive = {(match, location) => tagMatch(match, location, 'vr')}
                  >
            360°|VR
          </NavLink>
        </li>
      </ul>
    </div>

  )
}

const LogoBox = ({ logo, width, className }) =>
  <div className={className}>
    <Link to="/">
      <img src={logo} alt="+play logo" width={width}/>
    </Link>
  </div>


export default Menu
