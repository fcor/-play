import React from 'react'
import facebook from '../images/fb.png'
import instagram from '../images/ig.png'
import vimeo from '../images/vimeo.png'

const Icons = ({ version }) =>
  <div className={`iconos ${version === 'mobile' ? 'mobile' : ''}`}>
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

export default Icons
