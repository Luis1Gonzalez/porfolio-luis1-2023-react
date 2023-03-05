
import useTools from '../hooks/useTools'

export default function Tools() {

  const [tools] = useTools()
  return (
    <div className='p-6 w-100 md:mx-12 bg-zinc-900'>

      <h1 className='text-white font-black text-2xl my-5' >Tools</h1>
      
      <div className="text-stone-200 flex flex-wrap justify-around sm:px-10">
        {tools?.data?.map(tool => (

          <div key={tool.id} className="my-2 w-[12%] sm:w-[8%] lg:w-[5%] mx-3 flex items-center justify-center">

            <div className=''>
              <img src={tool.attributes.image.data[0].attributes.url} className='' alt={`Foto de las herramientas ${tool.name}`} />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
