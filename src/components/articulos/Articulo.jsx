import React from 'react'

const Articulo = ({ articulo, idx }) => {
    return ( 
        <div className={`${ idx === 0 ? 'row-span-2' : null} border-2 border-black`} >{articulo.titulo}</div>
    );
}
 
export default Articulo;