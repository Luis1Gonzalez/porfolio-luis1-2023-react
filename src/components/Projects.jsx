import { projects } from "../data/objeto"




export default function Projects() {



  return (
    <div className='bg-zinc-900 px-6 pl-6 w-100'>


      <h1 className='text-white font-black text-2xl pb-4' >My Projects</h1>

      <div className="text-stone-200 md:flex flex-wrap justify-center">
        {projects.map(project => (

          <div key={project.id} className="my-4 shadow-lg shadow-stone-200/20 md:w-[40%] md:mx-4 xl:w-[30%] py-2">
           
              <div className=''>
                <img src={project.image} className='' alt={`Foto del proyecto ${project.name}`} />
              </div>

              <div className="">
                <p className="text-xl font-bold">{project.name}</p>
                <p className="modifier-text px-2 text-justify">{project.description}</p>
              </div>
            </div>
 
        ))}
      </div>

    </div>
  )
}
