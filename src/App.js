import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Media from "react-media"
import './App.css'
import Menu from './components/Menu'
import Gifs from './components/Gifs'
import Project from './components/Project'
import Icons from './components/Icons'

const routes = ["mundo",
                "planoz",
                "topologias",
                "moto",
                "adidas",
                "sonar",
                "uber",
                "nike",
                "coca",
                "cuerpos",
                "redbull",
                "redbullP",
                "warm",
                "samsung",
                "freaky",
              ]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lang: 'es',
      overlay: false
    }
    this.handleLang = this.handleLang.bind(this)
    this.handleOverlay = this.handleOverlay.bind(this)
  }

  handleLang(newLang){
    this.setState(state => {
      if (state.lang === newLang) {
        return null;
      }
      return {
        lang: newLang
      }
    })
  }

  handleOverlay(overlay){
    this.setState(
      ({overlay}) => ({overlay: !overlay}),
    )
  }

  render() {
    const { lang, overlay } = this.state
    return (
      <div>
        <div className={`overlay ${overlay ? 'active' : ''}`}> </div>
        <Media
          query="(min-width: 770px)"
          render={() => <MasPlay lang={lang} handleLang={this.handleLang} version="desktop" />}
        />

        <Media
          query="(min-width: 650px) and (max-width: 769px)"
          render={() => <MasPlay lang={lang} handleLang={this.handleLang} handleOverlay={this.handleOverlay} version="mobile" />}
        />

        <Media
          query="(max-width: 649px)"
          render={() => <MasPlay lang={lang} handleLang={this.handleLang} handleOverlay={this.handleOverlay} version="mobile" />}
        />
    </div>
    )
  }
}

const MasPlay = ({ lang, handleLang, version, handleOverlay }) =>
<div>
  <Router>
    <div className={`contenedor ${(version === 'desktop') ? '' : 'mobile' }`}>
      <Menu changeLang={handleLang} lang={lang} version={version} handleOverlay={handleOverlay}/>
      <div className="contenido">
        <Route render={({ location }) =>
          <TransitionGroup exit={false}>
            <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" render={() => <Gifs version={version} height={'1750px'} lang={lang} param="home"/>} />
                <Route path="/motion" render={() => <Gifs version={version} height={'600px'}  lang={lang} param="motion"/>} />
                <Route path="/space" render={() => <Gifs version={version} height={'600px'} lang={lang} param="space"/>}/>
                <Route path="/360" render={() => <Gifs version={version} height={'1200px'} lang={lang} param="360"/>}/>
                <Route path="/about" component={About}/>
                <Route path="/reel" component={Reel}/>
                {routes.map((item) =>
                  <Route key={item} path={`/${item}`} render={() => <Project param={item} version={version} lang={lang}/>}/>
                )}
                <Route render={() => <h1>Page not found</h1>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        }/>
      </div>
    </div>
  </Router>
  <Footer />
</div>

const About = () =>
  <div className="about-box">
    <ComingSoon />
    {/* <VRScene img={city} /> */}
  </div>

const Reel = () =>
  <div>
    <ComingSoon />
  </div>

const Footer = () =>
  <div className="footer">
    <Icons version="desktop" />
  </div>

const ComingSoon = () =>
<div className="coming-soon">
  Coming Soon!
</div>

export default App;
