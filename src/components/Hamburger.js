import React from 'react'
import LangBox from './LangBox'
import Navbar from './Navbar'
import Icons from './Icons'
import palmaNav from '../images/palmaNav.gif'

class Hamburger extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: null,
      // on: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(
      ({active}) => ({active: !active}),
    )
    this.props.handleOverlay()
  }

  render() {
    const { lang, changeLang } = this.props
    const { active } = this.state
    let animation
    if (active === null) {
      animation = ''
    } else if (active === true) {
      animation = 'active'
    } else if (active === false) {
      animation = 'inactive'
    }
    return(
      <div className="hamburger-align">
        <div className={`hamburger-menu ${active ? 'active' : ''}`} onClick={this.handleClick}>
          <div>
            <div className={`bar-menu b1 ${animation}`}></div>
            <div className={`bar-menu b2 ${animation}`}></div>
            <div className={`bar-menu b3 ${animation}`}></div>
          </div>
        </div>
        <SideMenu active={active} lang={lang} changeLang={changeLang} onClickMobile={this.handleClick} />
      </div>
    )
  }
}

const SideMenu = ({ active, lang, changeLang, onClickMobile }) =>
  <div className={`menu-responsive-box ${active ? 'active' : ''}`}>
    <LangBox lang={lang} changeLang={changeLang} version="mobile" />
    <div className="side-content">
      <img src={palmaNav} alt="palma" width="25px"/>
      <Navbar version="mobile" onClick={onClickMobile}/>
      <Icons version="mobile"/>
    </div>
    <div className="side-footer">
      WWW.MUCHOMASPLAY.COM
    </div>
  </div>

export default Hamburger
