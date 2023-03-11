import { useContext } from "react"
import LenguageContext from "../context/LenguageProvider"

export default function useLenguage() {
  return useContext(LenguageContext)
}