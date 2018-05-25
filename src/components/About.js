import React from 'react'
import ComingSoon from './ComingSoon'

const About = (props) => {
  return (
    <div className={`${props.version === 'desktop' ? 'about-desktop' : '' }`}>
      <p className={`about-text ${props.version === 'mobile' ? 'mobile' : ''}`}>
        Somos un estudio de creativos que trabaja entre la innovación artística
        y los nuevos avances tecnológicos. Nos gusta llevar las herramientas con
        las que trabajamos al límite para así aterizar en lugares desconocidos
        que juegan con la percepción del ser humano. Estamos a la vanguardia de la
        realidad virtual cinematográfica re-inventando las formas de narrativa
        disponibles. Creamos experiencias viscerales, íntimas e inmersivas,
        que llegan a la conciencia y al estado emocional del espectador.
        Construimos realidades!
      </p>
      <Contact version={props.version}/>
    </div>
  )
}

const Contact = (props) => {
  return (
    <div className="contact-box">
      <div className={`contact-section-1 ${props.version === 'desktop' ? 'desktop' : '' }`}>
        <div className="text-box">
          <p>
            Contáctanos
          </p>
        </div>
      </div>
      <div className="contact-section-2">
        <div className={`contact-subsection  ${props.version === 'desktop' ? 'desktop' : '' }`}>
          <p className="contact-text">muchomasplay@gmail.com</p>
          <p className="contact-text">Bogotá, Colombia</p>
          <p className="contact-text">Calle 82 #14a-17 | 601</p>
        </div>
        <div className={`contact-subsection  ${props.version === 'desktop' ? 'desktop' : '' }`}>
          <p className="contact-text">+57 310 802 3717</p>
          <p className="contact-text">+57 315 308 0124</p>
          <p className="contact-text">+57 310 206 4055</p>
        </div>
      </div>
    </div>
  )
}


export default About
