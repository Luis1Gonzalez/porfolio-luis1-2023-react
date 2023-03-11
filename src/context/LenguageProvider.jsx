import { createContext, useState } from "react"



const LenguageContext = createContext()

const LenguageProvider = ({ children }) => {

const [leng, setLeng] = useState('spanish')

    return (
        <LenguageContext.Provider
            value={{
                setLeng,
                leng
            }}>
            {children}
        </LenguageContext.Provider>
    )
}

export {
    LenguageProvider
}
export default LenguageContext