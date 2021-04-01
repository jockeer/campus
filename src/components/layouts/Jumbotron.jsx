import React from 'react'
import Logo from '../../assets/img/campus.png'

import { FaFacebook, FaTwitter, FaYoutube, FaInstagramSquare } from 'react-icons/fa'

const Jumbotron = () => {
    return ( 
        <>
        <div className="jumbotron xs: h-auto sm:h-50 w-100">
            <div className="container mx-auto xs: p-0   sm:p-5  h-full sm:flex justify-between  ">
                <figure className="xs: text-center">
                    <img className="xs: h-15 sm:h-24 md:h-32" src={Logo} alt="Logo Campus"/>
                    <h2 className="xs: text-center xs: italic xs: text-gray-500 xs: px-5 xs: font-medium sm:text-left">Centro Tecnologico de Desarrollo Estudiantil</h2>
                </figure>
                <div className="redes flex flex-col justify-center items-center  sm:w-72 md:w-72 lg:w-96">
                    <h2 className="xs: mb-2 xs: text-base xs: font-bold sm:text-2xl">Visitamos en</h2>
                    <div className="xs: flex xs: justify-around xs: flex-wrap xs: mb-5  sm:w-64 sm: text-5xl  md:w-72">
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="facebook xs: logo-size-xs sm:text-5xl">
                            <FaFacebook/>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="twitter xs: logo-size-xs sm:text-5xl">
                            <FaTwitter/>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="youtube xs: logo-size-xs sm:text-5xl">
                            <FaYoutube/>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="instagram xs: logo-size-xs sm:text-5xl">
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