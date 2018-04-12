import React from 'react'
import Video from './Video'
import about from '../images/about.mp4'
import Icons from './Icons'


const Footer = (props) =>{

  return(
    <div className='footer-box'>
      {(props.version === 'mobile' && props.location === '/about') &&
        <video
          preload="auto"
          loop="loop"
          autoPlay
          muted
          playsInline
          style={{width: '100vw'}}
          >
          <source src={about} type="video/mp4" />
        </video>
      }
      <div className={`footer ${(props.version === 'mobile' && props.location === '/about') ? 'about-mob' : '' }`}>
        <Icons version="desktop" />
      </div>
    </div>
  )
}

export default Footer
