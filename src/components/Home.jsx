
import React from 'react'
import homevid from '../images/video2.mp4'
import mypic from '../images/me.png'

const Home = () => {
  return (
    <>
       <video autoPlay loop muted playsInline>
         <source src={homevid} type='video/mp4'/>
       </video>
       <div className='container home'>
       <p>
          I am a passionate web developer , excited to learn new technoligies and contribute in the field of web
       </p>
       <div className="hero">
         <img src={mypic}/>
         <h5>Vikash Kumar</h5>
         <h2>Web developer</h2>

       </div>
    </div>
    </>
  )
}

export default Home