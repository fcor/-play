import React from 'react'
// import Video from './Video'
// import about from '../images/about.mp4'
import about2 from '../images/about2.mp4'
import about1 from '../images/about1.mp4'
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
          <source src={about2} type="video/mp4" />
        </video>
      }
      {(props.version === 'desktop' && props.location === '/about') &&
        <video
          preload="auto"
          loop="loop"
          autoPlay
          muted
          playsInline
          style={{width: '98.9vw', marginTop: '30px'}}
          >
          <source src={about1} type="video/mp4" />
        </video>
      }
      <div className={`footer ${(props.location === '/about') ? 'about' : '' }`}>
        <Icons version="desktop" />
      </div>
    </div>
  )
}

export default Footer
