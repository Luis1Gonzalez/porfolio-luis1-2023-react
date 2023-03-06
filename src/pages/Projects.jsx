// import { projects } from "../data/objeto"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import '../styles/portfolio.css'



export default function Projects() {
  const [projects, setProjects] = useState({})

  useEffect(() => {
    const getProjects = async () => {

      const response = await fetch(import.meta.env.VITE_BACKEND_URL_PROJECTS)
      const result = await response.json()
      setProjects(result)
    }
    getProjects()
  }, [])

  console.log(projects.data)
  return (
    <div className='container min-w-[320px] max-w-[1280px] flex flex-col flex-wrap m-auto p-6 mb-5'>

      <div className='w-100'>

        <h1 className='text-white font-black text-2xl pb-4' >My Projects</h1>

        <div className="flex flex-wrap justify-center flex-col sm:flex-row">
          {projects?.data?.map(project => (
            <div className="bg-white w-100 h-[200px] sm:w-[45%] md:w-[30%] text-stone-800 m-2 rounded-md pt-2 px-2 flex flex-col justify-around" key={project.id}>
              <div className="flex justify-center max-h-[60%]">
                <img src={project.attributes.logo.data.attributes.url} alt={`logo del proyecto ${project.attributes.name}`} className='w-100' />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xl font-bold my-1 capitalize">{project.attributes.name}</p>
              </div>
            </div>
          ))}
        </div>



      </div>

      <p className='font-bold text-emerald-300 text-end mt-8 pr-6'><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to='/'>Back</Link></span></p>






    </div>
  )
}
