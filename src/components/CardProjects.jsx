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
    <div className='bg-zinc-900 p-6 w-100'>

      <h1 className='text-white font-black text-2xl' >Services</h1>

      <div className="text-stone-200 md:flex flex-wrap justify-around sm:flex">
        {importCards?.data?.map(card => (

          <div key={card.id} className="my-4 shadow-lg shadow-stone-200/20 sm:w-[47%] md:mx-4 xl:w-[30%] py-2">

            <div className=''>
              <img src={card.attributes.image.data.attributes.url} className='' alt={`Foto de la card ${card.name}`} />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
