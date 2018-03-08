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
        <img
          src={src}
          alt={alt}
          width={width}
          onLoadCapture={this.handleLoad}
          style={{ visibility : `${loading ? 'hidden' : 'visible'}`}}
        />

      </div>
    )
  }
}

export default Image
