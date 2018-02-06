import React from 'react'
import { Link } from 'react-router-dom'

class Gif extends React.Component {
  render() {
    const { gif, lang } = this.props
    return(
      <div className="gif" style={{top: gif.top, bottom: gif.bottom, left: gif.left, right: gif.right}}>
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
