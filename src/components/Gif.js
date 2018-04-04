import React from 'react'
import { Link } from 'react-router-dom'
import Video from './Video'
import palmaBlack from '../images/palmaBlack.png'
import palmaWhite from '../images/palmaWhite.png'

class Gif extends React.Component {
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
    const { gif, lang, param, version } = this.props
    const { loading } = this.state

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
      if (gif.shape === 'square') {
        mobileWidth = '37.5vw'
      } else if (gif.shape === 'rect') {
        mobileWidth = '80vw'
      }
    }

    return(
      <div className={`gif ${version === 'mobile' ? 'mobile' : ''}`} style={styles}>
        <div className="gif-box">
          <Link to={`/${gif.route}`}>
            {!loading &&
              <GifText lang={lang} gif={gif} version={version}/>
            }
            <Video width={`${version === 'desktop' ? gif.width : mobileWidth }`}
                   src={gif.img}
                   onLoad={this.handleLoad}
            />
          </Link>
        </div>
      </div>
    )
  }
}

const GifText = ({ lang, gif, version }) => {
  const title = lang => lang ==='es' ? gif.title : gif.titleEn
  return (
    <div className={`gif-text ${(version === 'desktop' && gif.back) ==='white' ? 'white' : ''}
                              ${gif.route ==='cuerpos' ? 'cuerpos' : ''}
                              ${version === 'mobile' ? 'mobile' : ''}`
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
        <p className="gif-year">{gif.year}</p>
      }
    </div>
  )
}

export default Gif
