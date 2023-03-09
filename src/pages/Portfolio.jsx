import React from 'react'
import '../styles/portfolio.css'
import About from '../components/About'
import CardProjects from '../components/CardProjects'
import Tools from '../components/Tools'



export default function Portfolio() {
  return (

    <div className='container min-w-[320px] max-w-[1280px] mx-auto flex flex-col sm:p-0'>

      <About />
      <CardProjects />
      <Tools />
    </div>
  )
}
