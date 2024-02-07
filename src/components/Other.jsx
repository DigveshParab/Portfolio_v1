import React,{useState,useEffect} from 'react'
import '../styles/other.css'
import DataObjectIcon from '@mui/icons-material/DataObject';
import CircleIcon from '@mui/icons-material/Circle';
import { projects } from '../assets/data/experience';

const Other = () => {
  return (
    <div className='other-container'>
        <div className='other-title'>
            <h3>Other Projects</h3>
            <div className='other-line'></div>
        </div>
        <div className='other-cards-holder'>
          {projects.map((proj)=><SingleProjectCard title={proj.title} description={proj.description} skills={proj.skills}/>)}
        </div>
    </div>
  )
}

export default Other


const SingleProjectCard = ({title,description,skills})=>{
  const[toggleTools,settoggleTools] = useState(false)
  return(
    <div className='card-container'>
      {
        toggleTools?
        (
          <>
            <div className='icon-holder-tools'>
              <DataObjectIcon className='card-icon' style={{width:'35px',height:'35px'}}/>
            </div>
            <div className='card-tool-list'>
              {skills.map((skill)=>(
                <div className='card-list-item'>
                <p>{skill}</p>
              </div>
              ))}
              
            </div>
            <div className='card-btn-holder'>
              <p onClick={()=>settoggleTools(false)}>Summary</p>
              <div className='tool-line-horizontal'></div>
              <div className='tool-line-verticle'></div>
            </div>
          </>
        )
        :
        (
          <>
            <div className='icon-holder'>
              <DataObjectIcon className='card-icon' style={{width:'35px',height:'35px'}}/>
            </div>
            <div className='card-title'>
              <h4>{title}</h4>
            </div>
            <div className='card-description'>
              <p>{description}</p>
            </div>
            <div className='card-btn-holder'>
              <p onClick={()=>settoggleTools(true)}>Tools Used</p>
              <div className='tool-line-horizontal'></div>
              <div className='tool-line-verticle'></div>
            </div>
          </>
        )
      }
    </div>
  )
}