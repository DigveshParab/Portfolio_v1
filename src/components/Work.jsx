import React,{useState,useEffect} from 'react'
import '../styles/work.css'
import CircleIcon from '@mui/icons-material/Circle';
import { experience } from '../assets/data/experience';

const Work = () => {
    const[activeTabWork,setactiveTabWork] = useState('simplit')
    const[expData,setexpData]= useState([])
    useEffect(()=>{
        if (activeTabWork == 'simplit') {
            setexpData([experience[0]])
        }
        else if (activeTabWork == 'free'){
            setexpData([experience[1]])
        }
        else if (activeTabWork == 'part'){
            setexpData([experience[2]])
        }
        else if (activeTabWork == 'student'){
            setexpData([experience[3]])
        }
        
    },[activeTabWork])
  return (
    <div className='work-container'>
        <div className='work-title'>
            <h3>Where I'vs Worked</h3>
            <div className='work-line'></div>
        </div>
        <div className='work-record-holder'>
            <div className='work-tabs'>
                <span onClick={()=>setactiveTabWork('simplit')} className={activeTabWork == 'simplit'?'active-class-work':'inactive-class-work'}>Simplit</span>
                <span onClick={()=>setactiveTabWork('free')} className={activeTabWork == 'free'?'active-class-work':'inactive-class-work'}>Freelancing</span>
                <span onClick={()=>setactiveTabWork('part')} className={activeTabWork == 'part'?'active-class-work':'inactive-class-work'}>PartTime</span>
                <span onClick={()=>setactiveTabWork('student')} className={activeTabWork == 'student'?'active-class-work':'inactive-class-work'}>College Project</span>
            </div>
            <div className='work-details'>
                {expData && expData.map((exp)=>(
                    <>
                        <h4>{exp.title} <span>@ {exp.place}</span></h4>
                        <span>{exp.start} - {exp.end}</span>
                        {exp.points.map((point)=>(
                            <div className='work-points-holder'>
                                <p><CircleIcon style={{width:'12px',height:'12px',color:'rgb(62, 147, 147)',marginRight:'.5em',marginTop:'.2em'}}/> {point}</p>
                            </div>
                        ))}
                    </>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Work