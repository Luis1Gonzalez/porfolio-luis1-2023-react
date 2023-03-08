import { useState, useEffect } from 'react'

export default function useTools() {

const [result, setResult] = useState({})

useEffect(() => {
   

        const requestAPI = async () => {
            const response = await fetch(import.meta.env.VITE_BACKEND_URL_TOOLS)
            const result = await response.json()
            setResult(result)
        }
      
    
    requestAPI()
  }, [])


  return [result]
}
