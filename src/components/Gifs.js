import React from 'react'
import gif from '../images/3.gif'
import gif2 from '../images/planoz.gif'

const Gifs = ({ param }) =>
  <div className="gifs">
    {/* Gifs component for {param} */}
    <Gif img={gif2} top="20px" right="540px" />
    {/* <div className='border'>
      <img src={gif} alt="gif" width="400"/>
    </div> */}
  </div>

const Gif = ({ img, width, left, top, right, bottom }) =>
  <div className="gif" style={{top: top, bottom: bottom, left: left, right: right}}>
    <img src={img}
      alt="gif"
      width={width}
    />
  </div>

export default Gifs
