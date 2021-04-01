import React, { useContext, useEffect } from 'react'

import articuloContext from '../../context/articulos/articuloContext'
import ArticuloNuevo from './ArticuloNuevo';

const Articulos = () => {
    
    const articulosContext = useContext( articuloContext );
    const { nuevosArticulos, obtenerArticulos } = articulosContext;



    return ( 
        <>
        <div className="grid xs: grid-cols-1 sm:grid-cols-2 gap-1 my-3">
            {nuevosArticulos.map( (articulo, idx) => {
                    return <ArticuloNuevo key={articulo.id} articulo={ articulo } idx={idx} /> 
                })
            }
        </div>
        
        </>
     );
}
 
export default Articulos;