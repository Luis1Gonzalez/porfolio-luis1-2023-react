import React from 'react'
import '../styles/portfolio.css'
import About from './About'
import CardProjects from './CardProjects'
import Header from './Header'
import Tools from './Tools'



export default function Portfolio() {
  return (

    <div className='container min-w-[320px] max-w-[1280px] mx-auto flex flex-col sm:p-0'>
      <Header />
      <About />
      <CardProjects />
      <Tools />
    </div>
  )
}
