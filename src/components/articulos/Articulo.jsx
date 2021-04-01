import React from 'react'

import Logo from '../../assets/img/fondo.png'

const Articulo = ({articulo}) => {
    const descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione eos ipsam porro tempora, autem dolorum! Dicta quis accusantium repellendus quas, voluptatibus ipsam facilis similique quia cupiditate distinctio rerum veritatis.'
    return ( 
        <>
        <div className='xs: row-span-1 sm:row-span-2' >
            <figure className="border-2 border-yellow-500 flex justify-center">
                <img src={Logo} className="xs: w-full xs: min-h-full bg-center" alt=""/>
            </figure>
            <div className="relative  w-4/5 mx-auto -top-20 shadow-xl bg-white flex items-center flex-col p-5">
                <h2 className="font-bold text-xl">{articulo.titulo.substr(0, 50)}...</h2>
                <div className="flex mt-2">
                    <p className="text-xs bg-green-400 p-1 font-bold text-white ">FEBRERO 4, 2021</p>
                    <p className="text-xs bg-red-600 p-1 font-bold text-white ">CDTE</p>
                </div>
                <p className="text-center mt-2">{descripcion.substr(0, 50)} ...</p>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
        </div>
        </>
    );
}
 
export default Articulo;