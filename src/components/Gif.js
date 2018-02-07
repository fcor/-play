import React from 'react'
import { Link } from 'react-router-dom'

class Gif extends React.Component {
  render() {
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
            <div className="gif-text">
              <p className="gif-title">{lang ==='es' ? gif.title : gif.titleEn}</p>
              <p className="gif-year">{gif.year}</p>
              <p className="gif-desc">{lang==='es' ? gif.desc : gif.descEN}</p>
            </div>
            <img src={gif.img}
              alt="gif"
              width={gif.width}
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Gif
