import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'
import Menu from './components/Menu'
import Gifs from './components/Gifs'
import Proyect from './components/Proyect'
import palma from './images/palma.png'

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

const Footer = () =>
  <div className="footer">
    <img src={palma} alt="footer" width="62"/>
  </div>

export default App;
