import { RiContactsBookFill } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFolderDownloadFill } from "react-icons/ri";
import { CgPhone } from "react-icons/cg";
import lenguage from '../assets/lenguage.png'
import cvLuisGonzalez from '../assets/cvLuisGonzalez.pdf'

export default function Menu() {
    return (
        <div className='bg-zinc-900 text-stone-200 flex items-center justify-between pt-3 px-3'>

            <div className="menu__btn">
                <input type="checkbox" id="toggle" />
                <label htmlFor="toggle" className="button "><RiContactsBookFill /></label>

                <div className="nav py-2">

                    <div className="wrap__social mail flex items-center justify-between px-5">
                        <span className="w-25"><MdMarkEmailRead /></span>
                        <a className="w-75 text-start" href="mailto:luis1gonzalez@hotmail.com">luis1gonzalez@hotmail.com</a>
                    </div>

                    <div className="wrap__social call flex items-center justify-between px-5 ">
                        <span className="w-25"><CgPhone /></span>
                        <a className="w-75 text-start" href="tel:+34645081201">Llamara: +34 645081201</a>
                    </div>

                    <div className="wrap__social linkedin flex items-center justify-between px-5">
                        <span className="w-25"><ImLinkedin /></span>
                        <a className="w-75 text-start" href="www.linkedin.com/in/luis1gonzalez-web-developer-frontend" target="_blank" rel="noopener noreferrer">www.linkedin.com</a>
                    </div>

                    <div className="wrap__social whatsapp flex items-center justify-between px-5">
                        <span className="w-25"><IoLogoWhatsapp className="wind" /></span>
                        <a className="w-75 text-start" href="https://wa.me/34645081201">WhatsApp: +34 645081201</a>
                    </div>

                    <div className="wrap__social download flex items-center justify-between px-5 ">
                        <span className="w-25 text-center"><RiFolderDownloadFill /></span>
                        <a href={cvLuisGonzalez} className="w-75 text-start" download={cvLuisGonzalez}>Descargar CV</a>
                    </div>

                </div>
            </div>



            <button className="w-[50px] h-[50%] flex justify-center">
                <img className="w-[50%]" src={lenguage} alt="image de multi-lenguaje" />
            </button>

        </div>
    )
}
