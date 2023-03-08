import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetails(){
const  { id } = useParams()
const [details, setDetails] = useState({})


useEffect(() => {
const getProjectDetails = async () => {

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL_PROJECT_DETAILS}/${id}?populate=*`)
    const result = await response.json()
    setDetails(result)
}
getProjectDetails()
},[])

    return(
        <div className='container min-w-[320px] max-w-[1280px] flex flex-col flex-wrap mx-auto p-6'>

        <div className='w-100'>
        <div className='p-2 flex flex-col justify-center'>
                    <h1 className='text-white font-black text-2xl pb-4 capitalize' >{details?.data?.attributes?.name}</h1>
                    </div>

<div className='text-stone-200 text-justify'>
     <p className='mb-5'>{details?.data?.attributes?.spanish1}</p>

    <div className='mb-5'>
        <img src={details?.data?.attributes?.image1?.data?.attributes?.url} alt={`imagen 1 del proyecto ${details?.data?.attributes.name}`} />
    </div>

    <p className='mb-5'>{details?.data?.attributes?.spanish2}</p>

    <div className='mb-5'>
        <img src={details?.data?.attributes?.image2?.data?.attributes?.url} alt={`imagen 1 del proyecto ${details?.data?.attributes.name}`} />
    </div>

    <p className='mb-5'>{details?.data?.attributes?.spanish3}</p>

    <div className='mb-2 border p-1 rounded'>
        <img src={details?.data?.attributes?.image3?.data?.attributes?.url} alt={`imagen 1 del proyecto ${details?.data?.attributes.name}`} />
    
    <a target={'_blank'} className='pointer block text-end italic text-yellow-500 capitalize' href={details?.data?.attributes?.lighthouse}>Medición según LightHouse</a>
    </div>

    <a target={'_blank'} className='pointer block text-end italic text-yellow-500 capitalize' href={details?.data?.attributes?.web}>{details?.data?.attributes?.name}</a>

    <a target={'_blank'} className='pointer block text-end italic text-yellow-500 capitalize' href={details?.data?.attributes?.github}>GitHub</a> 

</div>

</div>

<p className='font-bold text-emerald-300 text-end mt-8 pr-6'><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to='/'>Back</Link></span></p>
</div>
    )

}