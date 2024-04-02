import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Layout from './components/Layout'

const App = () => {
  return <BrowserRouter>
            <Routes>
               <Route path='/' element={<Layout/>}>
                  <Route path='/Home' element={<Home/>}/>
                  <Route path='/About' element={<About/>}/>
                  <Route path='/Projects' element={<Projects/>}/>
                  <Route path='/Contact' element={<Contact/>}/>
               </Route>
            </Routes>
       </BrowserRouter>
}

export default App