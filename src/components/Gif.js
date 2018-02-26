import React from 'react'
import { Link } from 'react-router-dom'
import palmaBlack from '../images/palmaBlack.png'
import palmaWhite from '../images/palmaWhite.png'

class Gif extends React.Component {
  render() {
    const title = lang => lang ==='es' ? gif.title : gif.titleEn
    const { gif, lang, param } = this.props
    let styles
    if (param === 'home') {
      styles = {top: gif.top, bottom: gif.bottom, left: gif.left, right: gif.right}
    } else {
      styles = {top: gif.topR, bottom: gif.bottomR, left: gif.leftR, right: gif.rightR}
    }
    return(
      <div className="gif" style={styles}>
        <div className="gif-box">
          <Link to={`/${gif.route}`}>
            <div className={`gif-text ${gif.back ==='white' ? 'white' : ''}`}>
              <div className="gif-title-box">
                {title(lang).split('\n').map( (item, i) =>
                  <p className="gif-title" key={i}>{item}</p>
                )}
              </div>
              <p className="gif-desc">
                {`${lang==='es' ? gif.desc : gif.descEN} `}
                <span>
                  <img src={gif.back ==='white' ? palmaBlack : palmaWhite} />
                </span>
                {` ${gif.year}`}
              </p>
            </div>
            <video width={gif.width} preload="auto" loop="loop" autoPlay>
              <source src={gif.img} type="video/mp4" />
            </video>
          </Link>
        </div>
      </div>
    )
  }
}

export default Gif
