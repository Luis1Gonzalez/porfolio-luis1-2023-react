import '../styles/portfolio.css'
import qr from '../assets/qr.png'
import { me } from '../data/objeto'
import { Link } from 'react-router-dom'

export default function About() {

    return (
        <div className='p-6 w-100 mb-5 md:mx-12 md: flex bg-zinc-900'>

            <div className='p-2  flex flex-col justify-center w-[75%] md:w-2/3'>
                <h1 className='text-white font-black text-2xl pb-4' >About Me</h1>
                <p className='modifier-text text-stone-200 text-justify'>{me[0].me}</p>
            </div>

            <div className='w-[25%] md:w-1/3 md:flex flex-col items-center'>
                

                <div className='lg:flex hidden sm:justify-end items-center mt-5 h-[auto]'>
                    <img src={qr} alt="Enlaces" className='h-[80px]' />
                </div>

                <p className='font-bold text-emerald-300 text-end mt-8 '><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to='/aboutme'>Know Me...</Link></span></p>
            </div>





        </div>
    )
}
