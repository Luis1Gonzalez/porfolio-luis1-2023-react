import '../styles/portfolio.css'
import qr from '../assets/qr.png'
import { meSpanish } from '../data/objeto'
import { meEnglish } from '../data/objeto'
import { Link } from 'react-router-dom'
import Menu from '../shared/Menu'
import useLenguage from '../hooks/useLenguage'
import { useEffect, useState } from 'react'

export default function About() {
    const {leng} = useLenguage()


const [meTranslation, setMeTranslation] = useState(leng)

useEffect(() => {
    const traslation = () => {
        if(leng === 'english'){
            setMeTranslation(meEnglish)
        }else{
            setMeTranslation(meSpanish)  
        }
    }
    traslation()
},[leng])

    return (
        <div className='px-6 w-100 mb-5 md:mx-12 md: flex flex-col bg-zinc-900'>
      <Menu />
      <div className='flex'>
            <div className='p-2  flex flex-col justify-center w-[75%] md:w-2/3'>
                <h1 className='text-white font-black text-2xl pb-4' >{meTranslation[0].title}</h1>
                <p className='modifier-text text-stone-200 text-justify'>{meTranslation[0].me}</p>
            </div>

            <div className='w-[25%] md:w-1/3 md:flex flex-col items-center'>
                

                <div className='lg:flex hidden sm:justify-end items-center mt-5 h-[auto]'>
                    <img src={qr} alt="Enlaces" className='h-[80px]' />
                </div>

                <p className='font-bold text-emerald-300 text-end mt-8 '><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to='/aboutme'>
                    {leng==='spanish' ? 'Conoceme...' : 'Know Me...'}
                    </Link></span></p>
            </div>
            </div>




        </div>
    )
}













// const [meTranslation, setMeTranslation] = useState('meSpanish')

// useEffect(() => {
//     const traslation = () => {
//         if(meTranslation === meSpanish){
//             setMeTranslation(meEnglish)
//         }else{
//             setMeTranslation(meSpanish)  
//         }
//     }
//     traslation()
// },[leng])