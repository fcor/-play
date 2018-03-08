import React, { Component } from 'react'
import BouncingLoader from './BouncingLoader'

class Image extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }

    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad(){
    console.log("Video loaded! ");
    this.setState({
      loading: false
    })
  }

  render() {
    const { src, width } = this.props
    const { loading } = this.state
    return(
      <div className="video">
        {loading &&
           <BouncingLoader />
        }
        <video
          width={width}
          preload="auto"
          loop="loop"
          autoPlay
          onLoadedDataCapture={this.handleLoad}
          style={{ visibility : `${loading ? 'hidden' : 'visible'}`}}
          >
          <source src={src} type="video/mp4" />
        </video>

      </div>
    )
  }
}

export default Image
