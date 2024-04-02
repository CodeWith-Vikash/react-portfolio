import React from 'react'
import contactvid from '../images/video3.mp4'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const Contact = () => {
  return (
    <> 
       <video autoPlay loop muted playsInline>
         <source src={contactvid} type='video/mp4'/> 
       </video>
       <div className='container contact'>
         <div className="contact-heading">
         <h2>Connect with me </h2>
         <p>Let's work togethor</p>
         </div>
         <div className="contactform">
            <div className="contactopt">
                <h4>Phone</h4>
                <b>8873478342</b>
            </div>
            <div className="contactopt">
               <h4>Email</h4>
               <b><a href="mailto:vp3637637@gmail.com">vp3637637@gmail.com</a></b>
            </div>
            <div className="contactopt">
               <h4>Social</h4>
               <div className="social">
                 <a href="https://www.linkedin.com/in/code-with-vikash"><FaLinkedin size="2rem"/></a>
                 <a href="https://twitter.com/codeWithVikash"><FaSquareXTwitter size="2rem"/></a>
                <a href="https://github.com/CodeWith-Vikash"><FaGithub size="2rem"/></a>
               </div>
            </div>
         </div>
       </div>
    </>
  )
}

export default Contact