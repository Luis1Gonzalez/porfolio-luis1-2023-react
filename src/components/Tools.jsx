import React, { useEffect, useState } from 'react'
import { getTools } from '../models/importsTools'

export default function Tools() {
const [tools, setTools] = useState({})

// useEffect(() => {
//   const getTools = async () => {
//     const response = await fetch(import.meta.env.VITE_BACKEND_URL_TOOLS)
//     const result = await response.json()
//     setTools(result)
//   }
//   getTools()
// }, [])

  async function cargador(){
    const esto = await getTools()
    setTools(esto)
  }
useEffect(() => {
  cargador()
},[])





console.log('caramba')
  return (
    <div className='p-4 w-100 mb-5'>
    
      <h1 className='text-white font-black text-2xl my-2' >Herramientas</h1>

      <div className="text-stone-200 flex flex-wrap justify-around sm:px-10">
        {tools?.data?.map(tool => (

          <div key={tool.id} className="my-2 w-[20%] sm:w-[10%] mx-3 flex items-center justify-center">
           
              <div className=''>
                <img src={tool.attributes.image.data[0].attributes.url} className='' alt={`Foto de las herramientas ${tool.name}`} />
              </div>                  
            </div>     
        ))}
      </div>

    </div>
  )
}
