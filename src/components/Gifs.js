import React from 'react'
import Gif from './Gif'
import gifs from '../utils/gifs'

const params = ["mundo",
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

const Gifs = ({ param }) =>
  <div className="gifs">
    {/* Gifs component for {param} */}
    {params.map((item) =>
      <Gif key={item} gif={gifs(item)}/>
    )}
  </div>


export default Gifs
