import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import useLenguage from "../hooks/useLenguage";
import { cardEnglish, cardSpanish } from "../data/objeto";
import Loading from "./Loading";
import { alternativeCards } from "../data/alternative";


export default function CardProjects() {
  const [importCards, setImportCards] = useState([])
  const [transImportCards, setTransImportCards] = useState('meSpanish')

  const { leng } = useLenguage()

  useEffect(() => {
    const getCards = async () => {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL_CARDS)
      const result = await response.json()
      setImportCards(result)
    }
    getCards()
  }, [])

  useEffect(() => {
    const traslation = () => {
      if(leng === 'spanish'){
        setTransImportCards(cardSpanish)
      } else {
        setTransImportCards(cardEnglish)
      }
    }
    traslation()
  }, [leng])

  return (
    <>

      <div className='p-6 w-100 mb-5 md:mx-12 flex flex-col bg-stone-800'>

        <h1 className='text-white font-black text-2xl' >{transImportCards[0].title}</h1>

        <div className=" md:flex">
          <p className=" text-stone-200 my-5 text-justify flex items-center">{transImportCards[0].card}</p>
          <div className="text-stone-200 flex flex-wrap justify-around">


            {importCards.length === 0 ? (
              alternativeCards ? (
                alternativeCards.map(altCard => (
                  <div key={altCard.id} className="my-4 sm:w-[40%] md:mx-2 xl:w-[40%] flex items-center">

                    <div className=''>
                      <img className="text-white" src={altCard.image} alt={`Foto de la card ${altCard.id}`} />
                    </div>

                  </div>
                ))
              ) : (
                <Loading />
              )
            ) : (
              importCards?.data?.map(card => (

                <div key={card.id} className="my-4 sm:w-[40%] md:mx-2 xl:w-[40%] flex items-center">

                  <div className=''>
                    <img className="text-white" src={card?.attributes?.image?.data?.attributes?.url} alt={`Foto de la card ${card?.name}`} />
                  </div>

                </div>
              ))
            )}

          </div>
        </div>
        <p className='font-bold text-emerald-300 text-end mt-8'><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to='/projects'>
          {leng === 'spanish' ? 'Ver Mas...' : 'See More...'}
        </Link></span></p>
      </div>

    </>
  )
}




{/* <>
    
    <div className='p-6 w-100 mb-5 md:mx-12 flex flex-col bg-stone-800'>

      <h1 className='text-white font-black text-2xl' >{transImportCards[0].title}</h1>

      <div className=" md:flex">
      <p className=" text-stone-200 my-5 text-justify flex items-center">{transImportCards[0].card}</p>
      <div className="text-stone-200 flex flex-wrap justify-around">
        {!importCards ? (
          alternativeCards.map(altCard => (
            <div key={altCard.id} className="my-4 sm:w-[40%] md:mx-2 xl:w-[40%] flex items-center bg-red-700 p-1">

            <div className=''>
              <img className="text-white" src={altCard.image} alt={`Foto de la card ${altCard.id}`} />
            </div>
            
          </div>
          ))
          ) : (
            importCards?.data?.map(card => (

                        <div key={card.id} className="my-4 sm:w-[40%] md:mx-2 xl:w-[40%] flex items-center">
              
                          <div className=''>
                            <img className="text-white" src={card?.attributes?.image?.data?.attributes?.url} alt={`Foto de la card ${card?.name}`} />
                          </div>
                          
                        </div>
                      ))
          )}    
       
        </div>
      </div>
      <p className='font-bold text-emerald-300 text-end mt-8'><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to='/projects'>
        {leng==='spanish' ? 'Ver Mas...' : 'See More...'}
      </Link></span></p>
    </div>    
 
    </> */}