import { useEffect, useState } from "react"
import Spinner from "./Spinner"
// import { cardIndex } from "../data/objeto"
// import { getCards } from "../models/cards.server"

export default function CardProjects() {
    const [importCards, setImportCards] = useState({})
    const [show, setShow] = useState(false)

    useEffect(() => {

        setShow(true)

        fetch(import.meta.env.VITE_BACKEND_URL_CARDS)

            .then((response => response.json()))
            .then(c => setImportCards(c))

            
    }, [])



    return (
        <div className='bg-zinc-900 p-6 w-100'>

            <h1 className='text-white font-black text-2xl' >Services</h1>

{show && <Spinner />}

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
