import React from 'react'
import './Footer.css'
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className='footer'>             
                  <br />
                  <br />
                  <h1 className='contact'>Contact :-</h1>
                  <div className='footer_sub'>
                      <a href="mailto:s11kartik2111087@gmail.com"><AiOutlineMail className='aiicons' /></a>
                      <a href='https://www.linkedin.com/in/kartik-tyagi-a96929205/'><AiOutlineLinkedin className='aiicons' /></a>
                      <a href='https://github.com/KartikAKGEC89'><AiOutlineGithub className='aiicons'/></a>
                  </div>
        </div>        
    </>
  )
}

export default Footer
