import React from 'react'
import fotoCV from '../assets/foto.png'

export default function Header() {
    return (
        <div className='bg-zinc-900 h-[105px] sm:h-[220px] lg:h-[300px] xl:h-[380px] flex flex-wrap'>


            <div className='w-[40%] relative flex h-[100%]'>
                
                    <img src={fotoCV} alt="Foto del CV" className='h-[100%]' />
                
            </div>
            

            <div className='bg-inherit w-[50%] h-[100%] text-stone-200 flex flex-col sm:tracking-[.20em] lg:py-24 pl-9 text-sm  sm:text-2xl md:text-3xl lg:text-4xl lg:font-black justify-center lg:justify-around'>
                <p className='text-emerald-300'>Hello</p>
                <p className=' font-bold'>I'm Luis</p>
                <p className='text-emerald-300'>Frontend Developer</p>
            </div>

        </div>
    )
}
