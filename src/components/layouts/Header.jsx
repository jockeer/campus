import React from 'react'
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <header className="header-mine w-screen h-12 flex">
            <div className="container mx-auto my-center px-5 flex flex-row justify-between items-center">
            <div className="flex items-center"><span className="text-white font-bold"><FaEnvelope/></span><h2 className="text-white font-bold xs: text-xs xs: ml-1 sm:text-base sm:ml-4 "> soporte.campusvirtual@utepsa.edu </h2></div>
            <Link to='/login' className="text-white"><FaUserAlt /></Link>
            </div>
        </header>
     );
}
 
export default Header;