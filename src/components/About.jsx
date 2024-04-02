import React from 'react'
import aboutvid from '../images/video1.mp4'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
      <>
        <video autoPlay loop muted playsInline>
         <source  src={aboutvid} type='video/mp4'/>
      </video>
    <div className='container about'>
      <div className="about-data">
      <h2>About me</h2>
      <p>Passionate and driven web developer with a strong foundation in front-end and back-end technologies, adept at crafting responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript</p> <p>Experienced in utilizing frameworks such as React and Node.js to create dynamic web applications. Committed to staying updated with industry trends and continuously enhancing skills to deliver high-quality solutions.</p>
      <div className="btns">
        <NavLink to='/Projects'><button className='firstbtn'>See my projects</button></NavLink>
        <NavLink to='/Contact'><button className='secondbtn'>Get in touch</button></NavLink>
      </div>
      </div>
    </div>
      </>
  )
}

export default About