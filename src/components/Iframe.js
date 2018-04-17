import React, { Component } from 'react'
import BouncingLoader from './BouncingLoader'


class Iframe extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.ifr.onload = () => {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const { src, version, content } = this.props
    const { loading } = this.state
    let width, height

    if (content === 'vr') {
      if (version === 'desktop') {
        width = "600"
        height = "400"
      } else if (version === 'mobile') {
        const ww = window.innerWidth
        width = `${0.8*ww}`
        height = `${width/1.5}`
      }
    } else if (content === 'video') {
      if (version === 'desktop') {
        width = "600"
        height = "337"
      } else if (version === 'mobile') {
        const ww = window.innerWidth
        width = `${0.8*ww}`
        height = `${width/1.77}`
      }
    }
    return(
      <div className="iframe-box">
        {loading &&
           // <BouncingLoader />
           null
        }
        <iframe className="iframe"
          title="VR"
          src={src}
          width={width}
          height={height}
          allowFullScreen
          allowvr="yes"
          style={{ visibility : `${loading ? 'hidden' : 'visible'}`}}
          ref={(ifr) => { this.ifr = ifr; }}>
        </iframe>

      </div>
    )
  }
}

export default Iframe
