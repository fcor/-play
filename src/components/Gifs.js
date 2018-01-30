import React from 'react'
import Gif from './Gif'
import adidas from '../images/adidas.gif'
import moto from '../images/moto.gif'
import mundo from '../images/mundo.gif'
import planoz from '../images/planoz.gif'
import sonar from '../images/sonar.gif'
import topologias from '../images/topologias.gif'
import uber from '../images/uber.gif'
import nike from '../images/nike.gif'
import coca from '../images/coca.gif'
import cuerpos from '../images/cuerpos.gif'
import redbull from '../images/redbull.gif'
import warm from '../images/warm.gif'
import freaky from '../images/freaky.gif'
import samsung from '../images/samsung.jpg'

const Gifs = ({ param }) =>
  <div className="gifs">
    {/* Gifs component for {param} */}
    <Gif img={mundo} left="100px" top="50px" width="250"/>
    <Gif img={planoz} top="120px" right="30px" width="250" />
    <Gif img={topologias} top="350px" left="0px" />
    <Gif img={moto} top="540px" right="50px" width="250"/>
    <Gif img={adidas} top="720px" left="60px" />
    <Gif img={sonar} top="920px" right="50px" width="300" />
    <Gif img={uber} top="1120px" left="90px" />
    <Gif img={nike} top="1450px" right="30px" />
    <Gif img={coca} top="1550px" left="70px" width="300" />
    <Gif img={cuerpos} top="1720px" right="60px" />
    <Gif img={redbull} top="1910px" left="100px" />
    <Gif img={warm} top="2090px" right="90px" />
    <Gif img={samsung} top="2300px" left="30px" width="450" />
    <Gif img={freaky} top="2590px" right="50px" />
  </div>


export default Gifs
