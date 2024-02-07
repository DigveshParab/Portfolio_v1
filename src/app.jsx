import About from './components/About'
import Contact from './components/Contact'
import Email from './components/Email'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Other from './components/Other'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Social from './components/Social'
import Work from './components/Work'
import './styles/holder.css'

export function App() {
  const resume_url = 'https://github.com/Diggi19/Digvesh_Parab_Resume/blob/main/Software_Developer_Resume_Digvesh_Parab.pdf'
  const handlePdfDownload = (url)=>{
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download',fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  
  return (
    <div className='app-container'>
      {/* navbar */}
      <div className='navbar-holder'>
        <Navbar/>
        <div className='resume-shadow'>
          <p>RESUME</p>
        </div>
        <div className='resume-holder' onClick={()=>handlePdfDownload(resume_url)}>
          <p>RESUME</p>
        </div>
      </div>
      {/* social */}
      <div className='social-holder'>
        <Social/>
      </div>
      {/* email */}
      <div className='email-holder'>
        <Email/>
      </div>
      {/* intro */}
      <div id='intro' className='intro-holder'>
        <Intro/>
      </div>
      {/* about me */}
      <div id='about' className='about-holder'>
        <About/>
      </div>
      {/* work */}
      <div id='work' className='work-holder'>
        <Work/>
      </div>
      {/* projects */}
      <div id='projects' className='project-holder'>
        <Projects/>
      </div>
      {/* other projects */}
      <div id='other' className='other-holder'>
        <Other/>
      </div>
      {/* skills */}
      <div id='skills' className='skills-holder'>
        <Skills/>
      </div>
      {/* contact */}
      <div id='contact' className='contact-holder'>
        <Contact/>
      </div>
      <div className='credits-holder'>
        <p>Designed by Digvesh Parab</p>
      </div>
    </div>
  )
}
