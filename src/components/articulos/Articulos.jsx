import React, { useContext, useEffect } from 'react'

import articuloContext from '../../context/articulos/articuloContext'
import Articulo from './Articulo';

const Articulos = () => {
    
    const articulosContext = useContext( articuloContext );
    const { articulos, obtenerArticulos } = articulosContext;

    useEffect(() => {

        const cargarArticulos = async () => {
            obtenerArticulos()
        }

        cargarArticulos();

    }, [])


    return ( 
        <>
        <div class="grid grid-cols-2 gap-1">
            {articulos.map( (articulo, idx) => {
                    return <Articulo key={articulo.id} articulo={ articulo } idx={idx} /> 
                })
            }
        </div>
            <h1>hola</h1>
        </>
     );
}
 
export default Articulos;