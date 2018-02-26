import React from 'react'
import { Link } from 'react-router-dom'
import VRScene from './VRScene'
import getProjectDetails from '../utils/projects'
import asoleadora from '../images/asoleadora.gif'

class Project extends React.Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    const { param, lang } = this.props
    const project = getProjectDetails(param)
    const description = (lang) => lang ==='es' ? project.descEs : project.descEn
    return (
      <div className="project-content">
        <div className="navigate">
          <Link to={`/${project.prev}`}>
            <p className="nav-button left" style={{marginRight:'10px'}}>Prev</p>
          </Link>
          <img src={asoleadora} alt="palma" width="72px"/>
          <Link to={`/${project.next}`}>
            <p className="nav-button right" style={{marginLeft:'10px'}}>Next</p>
          </Link>
        </div>
        <div className="title-box">
          <h1>{lang ==='es' ? project.titleEs : project.titleEn}</h1>
          {project.subtitle && <h2>{project.subtitle}</h2>}
          <p className="project-year">{project.year}</p>
          <p className="project-tag">{lang ==='es' ? project.tagEs : project.tagEn}</p>
        </div>
        {description(lang).split('\n').map( (item, i) =>
          <p className="project-description" key={i}>{item}</p>
        )}
        <div className="logos">
          {project.logos.map((item)=>
            <img className="logo" src={item} key={item} alt="logo" />
          )}
        </div>
        <div className="assets">
          { Object.entries(project.assets).map( (item) => {
              if (item[1].type === 'gif' || item[1].type === 'img') {
                return(
                  <div key={item} className="asset-box">
                    <img src={item[1].src} alt="+play" width="600px"/>
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
                    <VRScene img={item[1].src}/>
                  </div>
                )
              }
              else{
                return null
              }
            }
          )
          }
        </div>
      </div>
    )
  }
}

export default Project
