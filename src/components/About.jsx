import React,{useState,useEffect} from 'react'
import '../styles/about.css'
import CircleIcon from '@mui/icons-material/Circle';
import myimage from '../assets/myimage.jpg'
const About = () => {
    const Competencies = ['Software Lifecycle','Agile Methodology','Collaboration','Continuous Learning','Database and Algorithm','OOPS']

    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const aboutBlurClass = scrollPosition < 240 || scrollPosition > 800 ? 'keepblue' : 'showit';
  return (
    <div className='about-container'>  
        <div className={`about-content ${aboutBlurClass}`}>
            <h3 onClick={()=>console.log(scrollPosition)}>ABOUT ME</h3>
            <div className='about-line'></div>
            <p className={aboutBlurClass}> Passionate software developer with 1+ year of experience as a junior developer, experienced in frontend and
                backend development, database design, and user experience. Possesses a strong grasp of <span>software
                development life cycles</span> and <span>agile methodology</span>. Known for being a <span>detail-oriented, organized, and
                meticulous employee</span>, Works at fast pace to meet tight deadlines. Enthusiastic team player ready to
                contribute <span>expertise in high-quality software solutions</span>.
            </p>
            <div className={`about-skills ${aboutBlurClass}`}>
                {Competencies.map((skill)=>(
                    <div className='about-skill-single'>
                        <CircleIcon className='icon'/>
                        <p>{skill}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className={`about-image ${aboutBlurClass}`}>
            <img className={aboutBlurClass} alt='myimage' src={myimage}/>
            <div className='backoutline'></div>
        </div>
    </div>
  )
}

export default About