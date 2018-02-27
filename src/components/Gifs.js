import React from 'react'
import Gif from './Gif'
import gifs from '../utils/gifs'

const home = [  "redbullP",
                "mundo",
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

const motion = ["mundo",
                "coca",
                "adidas",
                "nike",
              ]

const space = ["topologias",
                      "sonar",
                      "warm",
                      "moto",
                    ]

const vr = ["redbullP",
            "planoz",
            "cuerpos",
            "uber",
            "redbull",
            "freaky",
            "samsung",
            "topologias",
          ]

const Gifs = ({ param, lang, height }) => {
  let content
  if (param === 'motion') {
    content = motion
  } else if (param === 'space') {
    content = space
  } else if (param === '360') {
    content = vr
  } else if (param === 'home') {
    content = home
  }
  return(
    <div className="gifs" style={{height: height}}>
      {content.map((item) =>
        <Gif param={param} key={item} gif={gifs(item)} lang={lang}/>
      )}
    </div>
  )
}



export default Gifs
