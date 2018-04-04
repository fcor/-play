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

const homeMobile = [  "uber",
                      "adidas",
                      "moto",
                      "samsung",
                      "planoz",
                      "cuerpos",
                      "redbullP",
                      "mundo",
                      "freaky",
                      "nike",
                      "topologias",
                      "coca",
                      "warm",
                      "sonar",
                      "redbull",
                    ]

const motion = ["mundo",
                "coca",
                "adidas",
                "nike",
              ]

const motionMobile = ["nike",
                      "mundo",
                      "adidas",
                      "coca",
                    ]

const space = ["topologias",
                      "sonar",
                      "warm",
                      "moto",
                    ]

const spaceMobile = ["topologias",
                      "warm",
                      "moto",
                      "sonar",
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

const vrMobile = ["redbullP",
            "planoz",
            "cuerpos",
            "uber",
            "freaky",
            "redbull",
            "samsung",
            "topologias",
          ]

const Gifs = ({ param, lang, height, version }) => {
  let content
  if (param === 'motion') {
    content = (version === 'desktop') ? motion : motionMobile
  } else if (param === 'space') {
    content = (version === 'desktop') ? space : spaceMobile
  } else if (param === '360') {
    content = (version === 'desktop') ? vr : vrMobile
  } else if (param === 'home') {
    content = (version === 'desktop') ? home : homeMobile
  }

  let styles = {}

  if (version === 'desktop') {
    styles = {
      height: height,
      position: 'relative'
    }
  } else if (version === 'mobile') {
    styles = {
      // height: height,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      // alignContent: 'center'
      // alignItems: 'center',
      // flexDirection: 'column'
    }
  }

  return(
    <div className="gifs" style={styles}>
      {content.map((item) =>
        <Gif key={item} version={version} param={param} gif={gifs(item)} lang={lang}/>
      )}
    </div>
  )
}



export default Gifs
