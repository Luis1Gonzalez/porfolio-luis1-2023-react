import { createContext, useState } from "react"



const LenguageContext = createContext()

const LenguageProvider = ({ children }) => {

const [leng, setLeng] = useState('spanish')
const [charging, setCharging] = useState(true)

    return (
        <LenguageContext.Provider
            value={{
                setLeng,
                leng,
                charging,
                setCharging
            }}>
            {children}
        </LenguageContext.Provider>
    )
}

export {
    LenguageProvider
}
export default LenguageContext