import { me } from '../data/objeto'
import { Link } from 'react-router-dom'
import useTools from '../hooks/useTools'

export default function AboutMe() {

    const [tools] = useTools()

    return (
        <div className='container min-w-[320px] max-w-[1280px] flex flex-col flex-wrap m-auto p-6 mb-5'>

            <div className='w-100'>
                <div className='p-2 flex flex-col justify-center'>
                    <h1 className='text-white font-black text-2xl pb-4' >About Me</h1>
                    <div className=' text-stone-200 text-justify'>
                        {me.map(m => (
                            <p className='my-4' key={m.id}>{m.me}</p>
                        ))}
                    </div>
                </div>

                <p className='text-stone-200 my-4'>Las tecnologias con las que he trabajado son:</p>

                <div className="flex flex-wrap justify-around sm:px-10 my-8">

                    {tools?.data?.map(tool => (
                        <div key={tool.id} className="my-2 w-[12%] sm:w-[8%] lg:w-[5%] mx-3 flex items-center justify-center">
                            <img src={tool.attributes.image.data[0].attributes.url} className='' alt={`Foto de las herramientas ${tool.name}`} />
                        </div>
                    ))}

                </div>

            </div>

            <p className='font-bold text-emerald-300 text-end mt-8 pr-6'><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to='/'>Back</Link></span></p>






        </div>
    )
}
