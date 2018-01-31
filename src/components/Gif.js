import React from 'react'
import { Link } from 'react-router-dom'

class Gif extends React.Component {
  render() {
    const { img, width, left, top, right, bottom, title, year, desc, route } = this.props
    return(
      <div className="gif" style={{top: top, bottom: bottom, left: left, right: right}}>
        <div className="gif-box">
          <Link to={`/${route}`}>
            <div className="gif-text">
              <p className="gif-title">{title}</p>
              <p className="gif-year">{year}</p>
              <p className="gif-desc">{desc}</p>
            </div>
            <img src={img}
              alt="gif"
              width={width}
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Gif
