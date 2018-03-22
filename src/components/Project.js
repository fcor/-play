import React from 'react'
import { Link } from 'react-router-dom'
import VRScene from './VRScene'
import Video from './Video'
import Image from './Image'
import GifAsset from './GifAsset'
// import Lazyload from 'react-lazyload'
import getProjectDetails from '../utils/projects'
import asoleadora from '../images/asoleadora.png'

class Project extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    const { param, lang, version } = this.props
    const project = getProjectDetails(param)

    return (
      <div className={`project-content ${version === 'mobile' ? 'mobile' : ''}`}>
        <TitleBox lang={lang}
                  titleEn={project.titleEn}
                  titleEs={project.titleEs}
                  subtitle={project.subtitle}
                  year={project.year}
                  tagEn={project.tagEn}
                  tagEs={project.tagEs}
                  version={version}
        />
        <Navigate prev={project.prev} next={project.next} version={version} />
        <Description lang={lang}
                     descEn={project.descEn}
                     descEs={project.descEs}
                     version={version}
        />
        <Assets assets={project.assets} version={version} />
        <Logos assets={project.logos} version={version} />
        <Navigate prev={project.prev} next={project.next} />
      </div>
    )
  }
}

const Navigate = props =>
  <div className="navigate">
    <Link to={`/${props.prev}`}>
      <p className={`nav-button left ${props.version === 'mobile' ? 'mobile' : ''}`} style={{marginRight:'10px'}}>Prev</p>
    </Link>
    <img src={asoleadora} alt="sol" style={{marginTop:'0px'}} width="55px"/>
    <Link to={`/${props.next}`}>
      <p className={`nav-button right ${props.version === 'mobile' ? 'mobile' : ''}`} style={{marginLeft:'10px'}}>Next</p>
    </Link>
  </div>

const TitleBox = ({ lang, titleEn, titleEs, subtitle, year, tagEn, tagEs, version }) =>{
  const title = lang => lang ==='es' ? titleEs : titleEn
  return(
    <div className="title-box">
      <div className={`title ${version === 'mobile' ? 'mobile' : ''}`}>
        {title(lang).split('\n').map( (item, i) =>
          <h1 key={i}>{item}</h1>
        )}
      </div>
      <p className={`project-tag ${version === 'mobile' ? 'mobile' : ''}`}>
        {lang ==='es' ? tagEs : tagEn}
      </p>
      <p className={`project-year ${version === 'mobile' ? 'mobile' : ''}`}>{year}</p>
    </div>
  )
}

const Description = ({ lang, descEn, descEs, version }) => {
  const description = (lang) => lang ==='es' ? descEs : descEn
  const words = ['Dirección de arte:',
                 'Dirección:',
                 'Animación 3D:',
                 'Animación 2D:',
                 'Edición y Finalización:',
                 'Música:',
                 'Direction:',
                 'Art Direction:',
                 '3D Animation:',
                 '2D Animation:',
                 'Editing:',
                 'Music:',
                 'Producción, diseño y desarrollo:',
                 'Production, design and development:',
                 'Productora:',
                 'Producer:',
                 'Productores:',
                 'Directores:',
                 'Fotografia:',
                 'Producers:',
                 'Directors',
                 'Photography:',
                 'Producción:',
                 'Productor:',
                 'Cámara:',
                 'Dirección de arte y vestuario:',
                 'Producción Musical:',
                 'Mix & Master:',
                 'Production:',
                 'Producers:',
                 'Camera:',
                 'Musical Producers:',
                 'Mix & Master:',
                 'Client'
               ]
  const reg = new RegExp('(' + words.join('|') + ')', 'ig')
  return(
    <div className="description-box">
      {description(lang).split('\n').map( (item, i) =>
        <p className={`project-description ${version === 'mobile' ? 'mobile' : ''}`} key={i}
          dangerouslySetInnerHTML={{__html: item.replace(reg, '<b>$1</b>')}} />
          // {item}
        // </p>
        )}
    </div>
  )
}

const Logos = props =>
  <div className="logos">
    {props.assets.map((item)=>
      <img className="logo"
           width={`${props.version === 'mobile' ? '50%' : '100%'}`}
           src={item}
           key={item}
           alt="logo" />
    )}
  </div>

const Assets = props => {
  let width
  if (props.version === "desktop") {
    width = "600px"
  } else if (props.version === "mobile") {
    width = "80vw"
  }
  return(
    <div className="assets">
      { Object.entries(props.assets).map( (item) => {
          if (item[1].type === 'mp4') {
            return(
              <div key={item} className="asset-box">
                <Video src={item[1].src} width={width} />
              </div>
            )
          } else if (item[1].type === 'video') {
            return(
              <div key={item} className="asset-box">
                <div dangerouslySetInnerHTML={{__html:item[1].src}} />
              </div>
            )
          } else if (item[1].type === '360') {
            return(
              <div key={item} className="asset-box">
                <VRScene url={item[1].src}/>
              </div>
            )
          } else if (item[1].type === 'img') {
            return(
              <div key={item} className="asset-box">
                <Image src={item[1].src} alt="+play" width={width} />
              </div>
            )
          } else if (item[1].type === 'gif') {
            return(
              <div key={item} className="asset-box">
                <GifAsset src={item[1].src} alt="+play" width={width} />
              </div>
            )
          }
          else{
            return null
          }
        })
      }
    </div>
  )
}


export default Project
