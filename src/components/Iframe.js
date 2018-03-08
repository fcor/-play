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
      console.log("Iframe loaded! ")
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const { src, width, height } = this.props
    const { loading } = this.state
    return(
      <div className="iframe-box">
        {loading &&
           <BouncingLoader />
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
