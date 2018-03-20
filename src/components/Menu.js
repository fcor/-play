import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/+play.png'
import Navbar from './Navbar'
import LangBox from './LangBox'
import Hamburguer from './Hamburguer'

const Menu = ({changeLang, lang, version}) => {
     if (version === "desktop") {
       return(
        <div className="menu">
          <LangBox lang={lang} changeLang={changeLang}/>
          <LogoBox logo={logo} width="180px" className="logo-desktop"/>
          <Navbar />
        </div>
       )
     } else {
       return(
         <div className="menu-responsive">
           <LogoBox logo={logo} width="100px" />
           <Hamburguer />
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
