import React from 'react'
import {Navbar, Main, About, Experiences, Projects, Contact, Footer} from './const'
import './globals.css'
import './index.css'

const page = () => {
  return (
    <div className='relative overflow-x-hidden h-fit bg-black'>
        <Navbar />
        <Main />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default page