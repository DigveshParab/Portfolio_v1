import React,{useState,useEffect} from 'react'
import '../styles/projects.css'
import gecis_img from '../assets/gecis_proj_img.png'
import govt_img from '../assets/govt_proj_img.png'
const Projects = () => {
  return (
    <div className='project-container'>
        <div className='project-title'>
            <h3>Things I've Built</h3>
            <div className='project-line'></div>
        </div>
        <ProjectComponentRight />
        <ProjectComponentLeft />
        
    </div>
  )
}

export default Projects



const ProjectComponentRight = ()=>{
  const[imgActive,setimgActive] = useState(false)

  return(
    <div className={imgActive?'project-item-hold-zoom':'project-item-hold'}>
            <div onClick={()=>setimgActive(!imgActive)} className={imgActive?'project-image-active':'project-image'}>
              <img src={gecis_img}/>
            </div>
            <div className={imgActive?'project-content-inactive':'project-content'}>
              <h5>Featured Project 1</h5>
              <h4>GECMIS</h4>
              <p>Developed an academic task handling system for Goa College of Engineering, focusing on responsive design and optimized solutions for diverse academic tasks, enhancing user experience.</p>
              <div className='project-tools'>
                <a href='#skills'>React.js</a>
                <a href='#skills'>Django</a>
                <a href='#skills'>AWS</a>
                <a href='#skills'>Postgres</a>
              </div>
            </div>
        </div>
  )
}
const ProjectComponentLeft = ()=>{
  const[imgActive,setimgActive] = useState(false)

  return(
    <div className={imgActive?'project-item-hold-zoom':'project-item-hold'}>
            <div onClick={()=>setimgActive(!imgActive)} className={imgActive?'project-image-active':'project-image'}>
              <img src={govt_img} />
            </div>
            <div className={imgActive?'project-content-inactive':'project-content-left'}>
              <h5>Featured Project 1</h5>
              <h4>Budget Analysis Application</h4>
              <p>Played a key role in developing the frontend of a application for the Goa government. The application enables users to toggle between budget actuals and forecasting across government departments.</p>
              <div className='project-tools'>
                <a href='#skills'>React.js</a>
                <a href='#skills'>Django</a>
              <a href='#skills'>Python</a>
                <a href='#skills'>Postgres</a>
              </div>
            </div>
        </div>
  )
}