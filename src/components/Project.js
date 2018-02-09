import React from 'react'
import { Link } from 'react-router-dom'
import getProjectDetails from '../utils/projects'
import palmaNav from '../images/palmaNav.gif'

const Project = ({ param, lang }) => {
  const project = getProjectDetails(param)
  // console.log(project)
  const description = (lang) => lang ==='es' ? project.descEs : project.descEn
  return (
    <div className="project-content">
      <div className="navigate">
        <Link to={`/${project.prev}`}>
          <p className="nav-button left" style={{marginRight:'10px'}}>Prev</p>
        </Link>
        <img src={palmaNav} alt="palma" width="20px"/>
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
    </div>
  )
}

export default Project
