import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetails() {
    const { id } = useParams()
    const [details, setDetails] = useState({})


    useEffect(() => {
        const getProjectDetails = async () => {

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL_PROJECT_DETAILS}/${id}?populate=*`)
            const result = await response.json()
            setDetails(result)
        }
        getProjectDetails()
    }, [])
    console.log(details?.data?.attributes?.tecnology1)
    return (
        <div className='container min-w-[320px] max-w-[1280px] flex flex-col flex-wrap mx-auto p-6'>

            <div className='w-100 '>

                <h1 className='text-white font-black text-2xl p-4 capitalize' >{details?.data?.attributes?.name}</h1>


                <div className='text-stone-200 text-justify md:flex flex-wrap justify-evenly'>
                    <p className='mb-5  md:w-[45%]'>{details?.data?.attributes?.spanish1}</p>

                    <div className='mb-5  md:w-[45%]'>
                        <img src={details?.data?.attributes?.image1?.data?.attributes?.url} alt={`imagen 1 del proyecto ${details?.data?.attributes.name}`} />
                    </div>

                    <p className='mb-5  md:w-[45%]'>{details?.data?.attributes?.spanish2}</p>

                    <div className='mb-5  md:w-[45%]'>
                        <img src={details?.data?.attributes?.image2?.data?.attributes?.url} alt={`imagen 2 del proyecto ${details?.data?.attributes.name}`} />
                    </div>

                    <div className='mb-5 md:w-[45%]'>
                        <p className='my-2 text-xl tex-white font-bold'>Tecnologias usadas en este proyecto:</p>
                        <ul>
                            <li className='text-stone-400 text-sm italic'>{details?.data?.attributes?.tecnology1}</li>
                            <li className='text-stone-400 text-sm italic'>{details?.data?.attributes?.tecnology2}</li>
                            <li className='text-stone-400 text-sm italic'>{details?.data?.attributes?.tecnology3}</li>
                            <li className='text-stone-400 text-sm italic'>{details?.data?.attributes?.tecnology4}</li>
                            <li className='text-stone-400 text-sm italic'>{details?.data?.attributes?.tecnology5}</li>
                            <li className='text-stone-400 text-sm italic'>{details?.data?.attributes?.tecnology6}</li>
                            <li className='text-stone-400 text-sm italic'>{details?.data?.attributes?.tecnology7}</li>
                            <li className='text-stone-400 text-sm italic'>{details?.data?.attributes?.tecnology8}</li>
                        </ul>
                    </div>

                    <div className='mb-5 p-2 flex flex-col items-center md:w-[45%]'>
                        <img className='' src={details?.data?.attributes?.image3?.data?.attributes?.url} alt={`imagen 3 del proyecto ${details?.data?.attributes.name}`} />

                        <a target={'_blank'} className='pointer block text-end italic text-yellow-500 capitalize' href={details?.data?.attributes?.lighthouse}>Medición según LightHouse</a>
                    </div>

                </div>

                <div className='flex flex-col justify-end w-100'>
                    <a target={'_blank'} className='pointer text-end italic text-yellow-500 capitalize' href={details?.data?.attributes?.web}>{details?.data?.attributes?.name}</a>

                    <a target={'_blank'} className='pointer text-end italic text-yellow-500 capitalize' href={details?.data?.attributes?.github}>GitHub</a>
                </div>
            </div>

            <p className='font-bold text-emerald-300 text-end mt-8 pr-6'><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to='/projects'>Back</Link></span></p>
        </div>
    )

}