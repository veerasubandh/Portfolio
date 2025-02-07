import 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="project-title">
            <h1>PROJECTS</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="project-container">
            {mywork_data.map((project,index)=>{
                return(
                    <img key={index} src={project.w_img}/>

                )
            })}
        </div>
        <div className="project-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Projects
