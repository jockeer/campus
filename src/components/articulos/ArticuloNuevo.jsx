import React from 'react'

const Articulo = ({ articulo, idx }) => {
    return ( 
        <div className={`${ idx === 0 ? 'xs: row-span-1 sm:row-span-2' : null} border-2 border-black`} >{articulo.titulo}</div>
    );
}
 
export default Articulo;