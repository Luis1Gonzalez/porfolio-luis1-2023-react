
    export async function getTools(){
      const response = await fetch(import.meta.env.VITE_BACKEND_URL_TOOLS, {
        mode: 'cors',
        credentials: 'include'
      })
      return await response.json()
      
    }

