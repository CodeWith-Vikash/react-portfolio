import React from 'react'
import { FcTodoList } from "react-icons/fc";
import { MdNextPlan } from "react-icons/md";
import { SiMusicbrainz } from "react-icons/si";
import { MdQuiz } from "react-icons/md";
import { MdSpeakerNotes } from "react-icons/md";


const Projects = () => {
  return (
    <div className='container projects'>
       <div className="project">
          <FcTodoList size='3rem'/>
          <h3>To do list</h3>
          <a href="https://codewith-vikash.github.io/dynamic-todo/"><MdNextPlan size='2rem' className='visit'/></a>
       </div>

       <div className="project">
          <MdSpeakerNotes size='3rem'/>
          <h3>Notes app</h3>
          <a href="https://codewith-vikash.github.io/notes-app/"><MdNextPlan size='2rem' className='visit'/></a>
       </div>

       <div className="project">
          <MdQuiz size='3rem'/>
          <h3>Quiz game</h3>
          <a href="https://codewith-vikash.github.io/kbc-game/"><MdNextPlan size='2rem' className='visit'/></a>
       </div>

       <div className="project">
          <SiMusicbrainz size='3rem'/>
          <h3>Music player</h3>
          <a href="https://codewith-vikash.github.io/Music-Player/"><MdNextPlan size='2rem' className='visit'/></a>
       </div>
    </div>
  )
}

export default Projects