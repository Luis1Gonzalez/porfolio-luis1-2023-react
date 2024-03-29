// import { useEffect, useState } from "react";
import useLenguage from "../hooks/useLenguage";
import useTools from '../hooks/useTools'
import Loading from "./Loading";
import { alternativeTools } from "../data/alternative";



export default function Tools() {

  const { leng } = useLenguage()

  const [tools] = useTools()



  return (
    <>

      <div className='p-6 w-100 md:mx-12 bg-zinc-900 pb-14'>
        <h1 className='text-white font-black text-2xl my-5' >{leng === 'spanish' ? 'Herramientas' : 'Tools'}</h1>
        <div className="text-stone-200 flex flex-wrap justify-around sm:px-10">

          {tools.length === 0 ? (
            alternativeTools ? (
              alternativeTools.map(altTool => (
                <div key={altTool.id} className="my-2 w-[12%] sm:w-[8%] lg:w-[5%] mx-3 flex items-center justify-center">

                  <div>
                    <img src={altTool.logo} className='' alt={`Foto de las herramientas ${altTool.name}`} />
                  </div>
                </div>
              ))
            ) : (
              <Loading />
            )
          ) : (
            tools?.data?.map(tool => (

              <div key={tool.id} className="my-2 w-[12%] sm:w-[8%] lg:w-[5%] mx-3 flex items-center justify-center">

                <div className=''>
                  <img src={tool.attributes.image.data[0].attributes.url} className='' alt={`Foto de las herramientas ${tool.name}`} />
                </div>
              </div>
            ))
          )}

        </div>
      </div>

    </>
  )
}










{/* <>
{!tools ?
  (
    <div className='p-6 w-100 md:mx-12 bg-zinc-900 pb-14'>

      <h1 className='text-white font-black text-2xl my-5' >{leng === 'spanish' ? 'Herramientas' : 'Tools'}</h1>

      <div className="text-stone-200 flex flex-wrap justify-around sm:px-10">
        
        {alternativeTools ? (
          alternativeTools.map(altTool => (
            <div key={altTool.id} className="my-2 w-[12%] sm:w-[8%] lg:w-[5%] mx-3 flex items-center justify-center bg-red-700 p-1">

              <div className=''>
                <img src={altTool.logo} className='' alt={`Foto de las herramientas ${altTool.name}`} />
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )
        }

      </div>
    </div>
  )
  :
  (
    <div className='p-6 w-100 md:mx-12 bg-zinc-900 pb-14'>

      <h1 className='text-white font-black text-2xl my-5' >{leng === 'spanish' ? 'Herramientas' : 'Tools'}</h1>

      <div className="text-stone-200 flex flex-wrap justify-around sm:px-10">
    {tools?.data?.map(tool => (

      <div key={tool.id} className="my-2 w-[12%] sm:w-[8%] lg:w-[5%] mx-3 flex items-center justify-center">

        <div className=''>
          <img src={tool.attributes.image.data[0].attributes.url} className='' alt={`Foto de las herramientas ${tool.name}`} />
        </div>
      </div>
    ))
    }
    </div>
    </div>
  )

}
</> */}