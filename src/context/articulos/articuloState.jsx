import React,{useReducer} from 'react'

import articuloContext from './articuloContext';
import articuloReducer from './articuloReducer';

import axios from 'axios'

import { OBTENER_ARTICULOS, EDITAR_ARTICULO, ELIMINAR_ARTICULO} from '../../types'

const ArticuloState = props => {
    const initialState = {
        articulos: [],
        paginaActual: 1,
        numeroPaginas: 0,
    }

    const [ state, dispatch ] = useReducer( articuloReducer, initialState )

    const obtenerArticulos = async () =>{

        const articulos = [ 
            { id:1, titulo:'Articulo 1', img:'', conntenido:'' },
            { id:2, titulo:'Articulo 2', img:'', conntenido:'' },
            { id:3, titulo:'Articulo 3', img:'', conntenido:'' },
            // { id:4, titulo:'Articulo 4', img:'', conntenido:'' },
            // { id:5, titulo:'Articulo 5', img:'', conntenido:'' },
        ]

        dispatch({
            type: OBTENER_ARTICULOS,
            payload: articulos
        })
    }

    return (
        <articuloContext.Provider value={{
            articulos: state.articulos,
            obtenerArticulos
        }}>
            {props.children}
        </articuloContext.Provider>
    )
}

export default ArticuloState;