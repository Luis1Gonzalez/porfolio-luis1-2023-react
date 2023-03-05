import '../styles/portfolio.css'
import qr from '../assets/qr.png'
import { me } from '../data/objeto'
import { Link } from 'react-router-dom'

export default function About() {

    return (
        <div className='w-[100%] flex flex-col flex-wrap p-2 sm:px-4 lg:px-28 mb-5'>
            
            <div className='p-2 w-[100%] flex flex-col justify-center'>
                <h1 className='text-white font-black text-2xl pb-4' >About Me</h1>
                <p className='modifier-text text-stone-200 text-justify'>{me[0].me}</p>
            </div>
    
            <p className='font-bold text-emerald-300 text-end mt-8'><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to= '/aboutme'>Know Me...</Link></span></p>

            <div className='lg:flex hidden pl-6 sm:justify-end items-center mt-5 h-[auto]'>
                <img src={qr} alt="Enlaces" className='h-[80px]' />
            </div>



            

            
        </div>
    )
}
