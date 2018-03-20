import React from 'react'
import { Link } from 'react-router-dom'
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
           <LogoBox logo={logo} width="100px" />
           <Hamburger lang={lang} changeLang={changeLang} handleOverlay={handleOverlay} />
         </div>
       )
     }
}


const LogoBox = ({ logo, width, className }) =>
  <div className={className}>
    <Link to="/">
      <img src={logo} alt="+play logo" width={width}/>
    </Link>
  </div>


export default Menu
