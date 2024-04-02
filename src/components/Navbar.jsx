import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [shownav, setshownav] = useState(true)
  const navref=useRef(null)
  const togglenav=()=>{
      if(shownav){
        navref.current.style.transform='translate(0,0%)'
      }else{
        navref.current.style.transform='translate(0,-500%)'
      }
      setshownav(!shownav)
  }
  return (
     <>
      <nav>
       <h1>Portfolio</h1>
       <GiHamburgerMenu size='2rem' className='ham' onClick={togglenav}/>
      <div className="options">
      <NavLink to='/Home'>Home</NavLink>
       <NavLink to='/About'>About</NavLink>
       <NavLink to='/Projects'>Projects</NavLink>
       <NavLink to='/Contact'>Contact</NavLink>
      </div>
    </nav>
     <div className="slidenav" ref={navref}>
       <NavLink to='/Home'>Home</NavLink>
       <NavLink to='/About'>About</NavLink>
       <NavLink to='/Projects'>Projects</NavLink>
       <NavLink to='/Contact'>Contact</NavLink>
     </div>
     </>
  )
}

export default Navbar

