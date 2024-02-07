import React from 'react'
import '../styles/social.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
const Social = () => {
  return (
    <div className='social-container'>
        <div className='logo-holder'>
            <GitHubIcon className='social-icon'/>
            <LinkedInIcon className='social-icon'/>
            <InstagramIcon className='social-icon'/>
            <XIcon className='social-icon'/>
        </div>
        <div className='social-line'></div>
    </div>
  )
}

export default Social