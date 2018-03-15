import React, { Component } from 'react'
import BouncingLoader from './BouncingLoader'
import LazyLoad from 'react-lazyload'

class GifAsset extends Component {
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
    const { src, width } = this.props
    const { loading } = this.state
    return(
      <div className="video">
        {loading &&
           <BouncingLoader />
        }
        <LazyLoad height='100%' offset={100} once>
          <img
            width={width}
            src={src}
            alt="+Play"
            onLoadedDataCapture={this.handleLoad}
            style={{ visibility : `${loading ? 'hidden' : 'visible'}`}}
          />
        </LazyLoad>
      </div>
    )
  }
}


export default GifAsset
