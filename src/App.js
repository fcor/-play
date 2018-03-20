import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Media from "react-media"
import './App.css'
import Menu from './components/Menu'
import Gifs from './components/Gifs'
import Project from './components/Project'
import facebook from './images/fb.png'
import instagram from './images/ig.png'
import vimeo from './images/vimeo.png'

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
    }
    this.handleLang = this.handleLang.bind(this)
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

  render() {
    const { lang } = this.state
    return (
      <div>
        <Media
          query="(min-width: 768px)"
          render={() => <MasPlay lang={lang} handleLang={this.handleLang} version="desktop" />}
        />

        <Media
          query="(min-width: 650px) and (max-width: 767px)"
          render={() => <p> The document is between 650px and 767px wide. </p>}
        />

        <Media
          query="(max-width: 649px)"
          render={() => <MasPlay lang={lang} handleLang={this.handleLang} version="mobile" />}
        />
    </div>
    )
  }
}

const MasPlay = ({ lang, handleLang, version }) =>
<div>
  <Router>
    <div className={`contenedor ${(version === 'desktop') ? '' : 'mobile' }`}>
      <Menu changeLang={handleLang} lang={lang} version={version}/>
      <div className="contenido">
        <Route render={({ location }) =>
          <TransitionGroup exit={false}>
            <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" render={() => <Gifs height={'1750px'} lang={lang} param="home"/>} />
                <Route path="/motion" render={() => <Gifs height={'600px'}  lang={lang} param="motion"/>} />
                <Route path="/space" render={() => <Gifs height={'600px'} lang={lang} param="space"/>}/>
                <Route path="/360" render={() => <Gifs height={'1200px'} lang={lang} param="360"/>}/>
                <Route path="/about" component={About}/>
                <Route path="/reel" component={Reel}/>
                {routes.map((item) =>
                  <Route key={item} path={`/${item}`} render={() => <Project param={item} lang={lang}/>}/>
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
    About component
    {/* <VRScene img={city} /> */}
  </div>

const Reel = () =>
  <div>
    Reel component
  </div>

const Footer = () =>
  <div className="footer">
    <div className="iconos">
      <a  href="https://www.facebook.com/ColectivoMasPlay/" target="_blank"  rel="noopener noreferrer">
        <img className="icono" src={facebook} alt="fb" />
      </a>
      <a href="https://www.instagram.com/mas.play/" target="_blank" rel="noopener noreferrer">
        <img className="icono"  src={instagram} alt="ig" />
      </a>
      <a href="https://www.instagram.com/mas.play/" target="_blank" rel="noopener noreferrer">
        <img className="icono" src={vimeo} alt="vimeo" />
      </a>
    </div>
  </div>

export default App;
