import React,{useState,useEffect} from 'react'
import '../styles/skills.css'
import image from '../assets/preact.svg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { main_skills, subskills } from '../assets/data/experience';
const Skills = () => {
    const[toggleMenu,settoggleMenu] = useState(false)
    const[activeSkill,setactiveSkill] = useState('Frontend')
    const[skillData,setskillData] = useState([])
    const[skillIndex,setskillIndex] = useState(0)
    const BackgroundImageStyle = { 
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain', // Ensures the background image covers the entire div
        backgroundRepeat: 'no-repeat', // Prevents repetition of the background image
        backgroundPosition: 'center', // Centers the background image
    }

    const handleNext = () => {
        if (skillIndex >= skillData.length - 1) {
            setskillIndex(skillData.length - 1);
        } else {
            setskillIndex(skillIndex + 1);
        }
    };
    
    const handlePrev = () => {
        if (skillIndex <= 0) {
            setskillIndex(0);
        } else {
            setskillIndex(skillIndex - 1);
        }
    };

    const handleSelectOption=(skill)=>{
        setactiveSkill(skill)
        setskillIndex(0)
        settoggleMenu(false)
    }
    useEffect(() => {
      if (subskills) {
        setskillData(subskills[activeSkill])
      }
    }, [activeSkill])
    
    console.log(skillData)
  return (
    <div className='skills-container'> 

        <div className='skill-holder'>
            <div className='skills-title'>
                <h3>My Arsenal</h3>
                {/* <div className='skills-line'></div> */}
            </div>
            <div className='skill-heading'>
                <h4>{activeSkill}</h4>
                <div className={toggleMenu?'skill-main-list':'skill-main-list-closed'}>
                    <div className='skill-list-btn-holder'>
                        <div className='skill-list-btn' onClick={()=>settoggleMenu(!toggleMenu)}>{toggleMenu?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</div>
                    </div>
                     {main_skills.map((skill,i)=><p onClick={()=>handleSelectOption(skill)} className={activeSkill == skill ?'active-list-item':''} key={i}><span>{i+1}.</span>{skill}</p>)}
                </div>
            </div>
            <div className='skill-list-holder' >
                <div className='skill-list-item-image' style={BackgroundImageStyle}>
                </div>
                <div className='skill-list-item-content'>
                    <h4> {skillData[skillIndex]?.title} </h4>
                    <p>{skillData[skillIndex]?.description}</p>
                    <div className='skill-list-next-btn-holder'>
                        <div className='skill-list-prev-btn' onClick={handlePrev} ><NavigateNextIcon/></div>
                        <div className='skill-list-next-btn'onClick={handleNext}><NavigateNextIcon/></div>                        
                    </div>
                    <div className='skill-list-item-count'>{skillIndex + 1}/{skillData.length}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills


const SingleSkill = ()=>{
    return(
        <div className='single-skill-container'>
            <div className='single-skill-content'>

            </div>
        </div>
    )
}