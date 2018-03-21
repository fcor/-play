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
    this.setState({
      loading: false
    })
  }

  render() {
    const { src, width, alt, version } = this.props
    const { loading } = this.state
    const style = {
      width: width,
      visibility : `${loading ? 'hidden' : 'visible'}`
    }
    return(
      <div className="image">
        {loading &&
           <BouncingLoader />
        }
        <LazyLoad height='100%' offset={100} once>
          <img
            src={src}
            alt={alt}
            onLoadCapture={this.handleLoad}
            style={style}
          />
      </LazyLoad>
      </div>
    )
  }
}

export default Image
