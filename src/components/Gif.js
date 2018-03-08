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
    const { gif, lang, param } = this.props
    const { loading } = this.state
    let styles
    if (param === 'home') {
      styles = {top: gif.top, bottom: gif.bottom, left: gif.left, right: gif.right}
    } else {
      if (param === '360' & gif.route === 'topologias') {
        styles = {top: '170px', right: '0'}
      } else {
        styles = {top: gif.topR, bottom: gif.bottomR, left: gif.leftR, right: gif.rightR}
      }
    }
    return(
      <div className="gif" style={styles}>
        <div className="gif-box">
          <Link to={`/${gif.route}`}>
            {!loading && 
              <GifText lang={lang} gif={gif} />
            }
            <Video width={gif.width} src={gif.img} onLoad={this.handleLoad}/>
          </Link>
        </div>
      </div>
    )
  }
}

const GifText = ({ lang, gif }) => {
  const title = lang => lang ==='es' ? gif.title : gif.titleEn
  return (
    <div className={`gif-text ${gif.back ==='white' ? 'white' : ''} ${gif.route ==='cuerpos' ? 'cuerpos' : ''}`}>
      <div className="gif-title-box">
        {title(lang).split('\n').map( (item, i) =>
          <p className="gif-title" key={i}>{item}</p>
        )}
      </div>
      <p className="gif-desc">
        {`${lang==='es' ? gif.desc : gif.descEN} `}
        <span>
          <img src={gif.back ==='white' ? palmaBlack : palmaWhite} alt="p" />
        </span>
        {` ${gif.year}`}
      </p>
    </div>
  )
}

export default Gif
