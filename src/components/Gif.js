import React from 'react'
import { Link } from 'react-router-dom'
import Video from './Video'
import Image from './Image'
import palmaBlack from '../images/palmaBlack.png'
import palmaWhite from '../images/palmaWhite.png'

class Gif extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      isTouched: false
    }

    this.handleLoad = this.handleLoad.bind(this)
    this.handleTouch = this.handleTouch.bind(this)
  }

  handleLoad(){
    this.setState({
      loading: false
    })
  }

  handleTouch(e){
    // e.preventDefault()
    this.setState(
      ({isTouched}) => ({isTouched: !isTouched}),
    )
  }

  render() {
    const { gif, lang, param, version } = this.props
    const { loading, isTouched } = this.state

    let styles = {}
    let mobileWidth

    if (version === 'desktop') {
      let position = {}
      const absolute = {
        position: 'absolute'
      }
      if (param === 'home') {
        position = {top: gif.top, bottom: gif.bottom, left: gif.left, right: gif.right}
      } else {
        if (param === '360' & gif.route === 'topologias') {
          position = {top: '170px', right: '0'}
        } else {
          position = {top: gif.topR, bottom: gif.bottomR, left: gif.leftR, right: gif.rightR}
        }
      }
      styles = {...absolute, ...position}
    } else if (version === 'mobile') {
      // if (gif.shape === 'square') {
      //   mobileWidth = '37.5vw'
      // } else if (gif.shape === 'rect') {
      //   mobileWidth = '80vw'
      // }
      mobileWidth = '80vw'
    }

    let media

    if (version === 'desktop') {
      media = <Video width={gif.width}
                     src={gif.img}
                     onLoad={this.handleLoad}
              />
    } else if (version === 'mobile') {
      if (gif.type === 'video') {
        media = <Video width={mobileWidth}
                       src={gif.imgMov}
                       onLoad={this.handleLoad}
                />
      } else {
        media = <Image width={mobileWidth}
                       src={gif.imgMov}
                       alt="img"
                       version="mobile"
                       onLoad={this.handleLoad}
                />
      }
    }

    return(
      <div className={`gif ${version === 'mobile' ? 'mobile' : ''}`} style={styles}>
        <div className="gif-box" onTouchStart={this.handleTouch} onTouchEnd={this.handleTouch}>
          <Link to={`/${gif.route}`}>
            {!loading &&
              <GifText lang={lang} gif={gif} version={version} isTouched={isTouched}/>
            }
            {media}
          </Link>
        </div>
      </div>
    )
  }
}

const GifText = ({ lang, gif, version, isTouched }) => {
  const title = lang => lang ==='es' ? gif.title : gif.titleEn
  return (
    <div className={`gif-text ${(gif.back) ==='white' ? 'white' : ''}
                              ${gif.route ==='cuerpos' ? 'cuerpos' : ''}
                              ${version === 'mobile' ? 'mobile' : ''}
                              ${isTouched ? 'touched' : ''}`
                            }>
      <div className={`gif-title-box ${version === 'mobile' ? 'mobile' : ''}`}>
        {title(lang).split('\n').map( (item, i) =>
          <p className={`gif-title  ${version === 'mobile' ? 'mobile' : ''}`} key={i}>{item}</p>
        )}
      </div>
      {version === 'desktop' &&
        <p className="gif-desc">
          {`${lang==='es' ? gif.desc : gif.descEN} `}
          <span>
            <img src={gif.back ==='white' ? palmaBlack : palmaWhite} alt="p" />
          </span>
          {` ${gif.year}`}
        </p>
      }
      {version === 'mobile' &&
        <div>
          <p className="gif-year">{gif.year}</p>
          <p className="gif-desc-mobile">{`${lang==='es' ? gif.desc : gif.descEN} `}</p>
        </div>
      }
    </div>
  )
}

export default Gif
