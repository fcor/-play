import React from 'react'

class Gif extends React.Component {
  render() {
    const { img, width, left, top, right, bottom } = this.props
    return(
      <div className="gif" style={{top: top, bottom: bottom, left: left, right: right}}>
        <div className="gif-box">
          <div className="gif-text">
            Hola, aca va el link
          </div>
          <img src={img}
            alt="gif"
            width={width}
          />
        </div>
      </div>
    )
  }
}

export default Gif
