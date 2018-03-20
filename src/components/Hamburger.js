import React from 'react'
import LangBox from './LangBox'

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
      <div>
        <div className={`hamburger-menu ${active ? 'active' : ''}`} onClick={this.handleClick}>
          <div>
            <div className={`bar-menu b1 ${animation}`}></div>
            <div className={`bar-menu b2 ${animation}`}></div>
            <div className={`bar-menu b3 ${animation}`}></div>
          </div>
        </div>
        <div className={`menu-responsive-box ${active ? 'active' : ''}`}>
          <LangBox lang={lang} changeLang={changeLang} version="mobile" />
        </div>
        </div>
    )
  }
}

export default Hamburger
