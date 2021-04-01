import React from 'react'

import { NavLink, Link } from 'react-router-dom'

import Logo from '../../assets/img/utep.png'

const Navbar = () => {
    return ( 
        <>
        <nav className=" bg-gray-200">
            <div className="container mx-auto">
                <ul className="h-16 flex items-center py-1">
                <Link to="/" className="block flex h-full">
                    <figure className="flex h-full xs: w-16 sm:w-20">
                        <img src={Logo} alt="" className="full"/>
                    </figure>
                </Link>
                <NavLink
                    to="/prueba"
                    activeStyle={{
                        fontWeight: "500",
                        borderBottom:'2px',
                        borderColor:"red",
                        borderBottomStyle:'solid',
                        boxSizing:'border-box'
                    }}
                    className="h-full flex items-center mx-2 xs: text-sm sm:text-base"
                    >
                    Blog - HOME 
                </NavLink>
                <span className="text-red-500 font-bold">
                    /
                </span>
                <NavLink
                    to="/Entrevistas"
                    activeStyle={{
                        fontWeight: "500",
                        borderBottom:'2px',
                        borderColor:"red",
                        borderBottomStyle:'solid',
                        boxSizing:'border-box'
                    }}
                    className="h-full flex items-center mx-2 xs: text-sm sm:text-base"
                    >
                        

                   Entrevistas - Experiencias 
                        
                </NavLink>
                <span className="text-red-500 font-bold">
                    /
                </span>
                <NavLink
                    to="/Recursos"
                    activeStyle={{
                        fontWeight: "500",
                        borderBottom:'2px',
                        borderColor:"red",
                        borderBottomStyle:'solid',
                        boxSizing:'border-box'
                    }}
                    className="h-full flex items-center mx-2 xs: text-sm sm:text-base"
                    >
                    Recursos Tic
                </NavLink>
                </ul>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;