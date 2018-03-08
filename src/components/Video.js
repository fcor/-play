import React, { Component } from 'react'
import BouncingLoader from './BouncingLoader'
import LazyLoad from 'react-lazyload'

class Video extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }

    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad(){
    this.setState({
      loading: false
    })
    this.props.onLoad()
  }

  render() {
    const { src, width } = this.props
    const { loading } = this.state
    return(
      <div className="video">
        {loading &&
           <BouncingLoader />
        }
        <LazyLoad height='100%' offset={100} once>
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
        </LazyLoad>
      </div>
    )
  }
}

Video.defaultProps = {
  onLoad: () => {}
};

export default Video
