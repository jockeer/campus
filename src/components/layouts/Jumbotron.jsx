import React from 'react'
import Logo from '../../assets/img/campus.png'

import { FaFacebook, FaTwitter, FaYoutube, FaInstagramSquare } from 'react-icons/fa'

const Jumbotron = () => {
    return ( 
        <>
        <div className="h-48 w-100 border-2 border-black">
            <div className="container mx-auto xs: p-0  sm:p-5 border-2 border-red-500 h-full flex justify-between flex-wrap  ">
                <figure className="border-2 xs: text-center border-yellow-500">
                    <img className="xs: h-25 sm:h-32" src={Logo} alt="Logo Campus"/>
                    <h2 className="xs: text-center xs: italic xs: text-gray-500 xs: px-5 xs: font-medium sm:text-left">Centro Tecnologico de Desarrollo Estudiantil</h2>
                </figure>
                <div className="redes flex flex-col justify-center items-center border-2 border-green-500">
                    <h2 className="mb-2 font-bold text-2xl">Visitamos en</h2>
                    <div className="flex w-96 text-5xl justify-around">
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="facebook">
                            <FaFacebook/>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="twitter">
                            <FaTwitter/>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="youtube">
                            <FaYoutube/>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="instagram">
                            <FaInstagramSquare/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Jumbotron;