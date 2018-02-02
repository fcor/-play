import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'
import Menu from './components/Menu'
import Gifs from './components/Gifs'
import Project from './components/Project'
import palma from './images/palma.png'

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
                "warm",
                "samsung",
                "freaky",
              ]

class App extends Component {
  render() {
    return (
      <Router>
        <div className="contenedor">
          <Menu />
          <div className="contenido">
            <Route render={({ location }) =>
              <TransitionGroup>
                <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
                  <Switch location={location}>
                      <Route exact path="/" render={() => <Gifs param="home"/>} />
                      <Route path="/motion" render={() => <Gifs param="motion"/>} />
                      <Route path="/installation" render={() => <Gifs param="installation"/>}/>
                      <Route path="/360" render={() => <Gifs param="360"/>}/>
                      <Route path="/about" component={About}/>
                      <Route path="/reel" component={Reel}/>
                      {routes.map((item) =>
                        <Route path={`/${item}`} render={() => <Project param={item}/>}/>
                      )}
                      <Route render={() => <h1>Page not found</h1>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            }/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const About = () =>
  <div>
    About component
  </div>

const Reel = () =>
  <div>
    Reel component
  </div>

const Footer = () =>
  <div className="footer">
    <img src={palma} alt="footer" width="62"/>
  </div>

export default App;
