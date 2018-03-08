import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
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
    console.log("Image loaded! ");
    this.setState({
      loading: false
    })
  }

  render() {
    const { src, width, alt } = this.props
    const { loading } = this.state
    return(
      <div className="image">
        {loading &&
           <BouncingLoader />
        }
        <LazyLoad offset={100} once>
          <img
            src={src}
            alt={alt}
            width={width}
            onLoadCapture={this.handleLoad}
            style={{ visibility : `${loading ? 'hidden' : 'visible'}`}}
          />
      </LazyLoad>
      </div>
    )
  }
}

export default Image
