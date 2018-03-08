import React from 'react'
import { Link } from 'react-router-dom'
import VRScene from './VRScene'
import Video from './Video'
import Image from './Image'
// import Lazyload from 'react-lazyload'
import getProjectDetails from '../utils/projects'
import asoleadora from '../images/asoleadora.gif'

class Project extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    const { param, lang } = this.props
    const project = getProjectDetails(param)

    return (
      <div className="project-content">
        <TitleBox lang={lang}
                  titleEn={project.titleEn}
                  titleEs={project.titleEs}
                  subtitle={project.subtitle}
                  year={project.year}
                  tagEn={project.tagEn}
                  tagEs={project.tagEs}
        />
        <Navigate prev={project.prev} next={project.next} />
        <Description lang={lang}
                     descEn={project.descEn}
                     descEs={project.descEs}
        />
        <Assets assets={project.assets} />
        <Logos assets={project.logos} />
        <Navigate prev={project.prev} next={project.next} />
      </div>
    )
  }
}

const Navigate = props =>
  <div className="navigate">
    <Link to={`/${props.prev}`}>
      <p className="nav-button left" style={{marginRight:'10px'}}>Prev</p>
    </Link>
    <img src={asoleadora} alt="sol" style={{marginTop:'6px'}} width="55px"/>
    <Link to={`/${props.next}`}>
      <p className="nav-button right" style={{marginLeft:'10px'}}>Next</p>
    </Link>
  </div>

const TitleBox = ({ lang, titleEn, titleEs, subtitle, year, tagEn, tagEs }) =>{
  const title = lang => lang ==='es' ? titleEs : titleEn
  return(
    <div className="title-box">
      <div className="title">
        {title(lang).split('\n').map( (item, i) =>
          <h1 key={i}>{item}</h1>
        )}
      </div>
      <p className="project-tag">{lang ==='es' ? tagEs : tagEn}</p>
      <p className="project-year">{year}</p>
    </div>
  )
}

const Description = ({ lang, descEn, descEs }) => {
  const description = (lang) => lang ==='es' ? descEs : descEn
  return(
    <div className="description-box">
      {description(lang).split('\n').map( (item, i) =>
        <p className='project-description' key={i}>
          {item}
        </p>
        )}
    </div>
  )
}

const Logos = props =>
  <div className="logos">
    {props.assets.map((item)=>
      <img className="logo" src={item} key={item} alt="logo" />
    )}
  </div>

const Assets = props =>
  <div className="assets">
    { Object.entries(props.assets).map( (item) => {
        if (item[1].type === 'gif') {
          return(
            <div key={item} className="asset-box">
              <Video src={item[1].src} width={"600"} />
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
              <Image src={item[1].src} alt="+play" width={"600px"} />
            </div>
          )
        }
        else{
          return null
        }
      })
    }
  </div>

export default Project
