import React,{useState,useEffect} from 'react'
import '../styles/navbar.css'
const Navbar = () => {
  const [activeTab,setactiveTab] = useState('')
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
  useEffect(()=>{
    if (scrollPosition ==0){
      setactiveTab('')
    }
  },[scrollPosition])
  const navbarClass = scrollPosition > 40 ? 'classB' : 'classA';

    return (
    <div className={navbarClass}>
      <a href='#about' onClick={()=>setactiveTab('about')} className={activeTab == "about"?"active-tab":""}>About</a>
      <a href='#work' onClick={()=>setactiveTab('work')} className={activeTab == "work"?"active-tab":""}>Work</a>
      <a href='#projects' onClick={()=>setactiveTab('projects')} className={activeTab == "projects"?"active-tab":""}>Project</a>
      <a href='#skills' onClick={()=>setactiveTab('skills')} className={activeTab == "skills"?"active-tab":""}>Skills</a>
      <a href='#other' onClick={()=>setactiveTab('other')} className={activeTab == "other"?"active-tab":""}>Other</a>
      <a href='#contact' onClick={()=>setactiveTab('contact')} className={activeTab == "contact"?"active-tab":""}>Contact</a>
    </div>
  )
}

export default Navbar