import React, { useContext, useEffect, useState } from 'react'

import articuloContext from '../../context/articulos/articuloContext'
import Articulo from './Articulo';

const Articulos = () => {
    const articulosContext = useContext( articuloContext );
    const { articulos, numeroPaginas, obtenerArticulos } = articulosContext;

    const [ paginaActual, setPaginaActual] = useState(1)

    useEffect(() => {

        const cargarArticulos = async () => {
            obtenerArticulos(paginaActual)
        }

        cargarArticulos();

    }, [paginaActual])

    const paginaSiguiente = () =>{
        setPaginaActual( paginaActual + 1 )
    }
    const paginaAnterior = () =>{
        setPaginaActual( paginaActual - 1 )
    }

    return ( 
        <>
        <div className="grid xs: grid-cols-1 sm:grid-cols-2  col-span-2 gap-x-4 my-3 auto-rows-auto">
            {articulos.map( articulo => {
                return <Articulo key={articulo.id} articulo={articulo}/>
            } )}
            <div className="xs: col-span-1 sm:col-span-2 mt-5 flex items-center">
                
                {paginaActual === 1 ?null : <button onClick = { paginaAnterior } className="btn-page px-3 py-1 bg-red-500 font-bold rounded focus:outline-none focus:ring text-white mr-2"> Prev </button>}
                
                <p className="font-bold italic"> Pagina { paginaActual } / { numeroPaginas }</p>
                {paginaActual === numeroPaginas ? null : <button onClick = { paginaSiguiente } className="btn-page px-3 py-1 bg-red-500 font-bold rounded focus:outline-none focus:ring text-white ml-2">  Next </button>}

            </div>
        </div>
        
        </>
     );
}
 
export default Articulos;