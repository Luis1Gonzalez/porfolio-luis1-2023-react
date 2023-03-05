import { useEffect, useState } from "react"
// import { cardIndex } from "../data/objeto"
// import { getCards } from "../models/cards.server"

export default function CardProjects() {
  const [importCards, setImportCards] = useState({})

  useEffect(() => {
    const getCards = async () => {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL_CARDS)
      const result = await response.json()
      setImportCards(result)
    }
    getCards()
  }, [])

  return (
    <div className='p-6 w-100 mb-5 md:mx-12 flex flex-col bg-stone-800'>

      <h1 className='text-white font-black text-2xl' >My Projects</h1>

      <div className=" md:flex">
      <p className=" text-stone-200 my-5 text-justify flex items-center">Los proyectos que he venido desarrollando durante mi proceso de formacion como desarrollador Web y algunos que he desarrollado para empresas y particulares tanto con WordPress como en codigo nativo son los sigueintes:</p>
      <div className="text-stone-200 flex flex-wrap justify-around">
        {importCards?.data?.map(card => (

          <div key={card.id} className="my-4 sm:w-[40%] md:mx-2 xl:w-[40%] flex items-center">

            <div className=''>
              <img src={card.attributes.image.data.attributes.url} alt={`Foto de la card ${card.name}`} />
            </div>
            
          </div>
        ))}
        </div>
      </div>

    </div>
  )
}
