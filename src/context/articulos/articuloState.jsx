import React,{useReducer} from 'react'

import articuloContext from './articuloContext';
import articuloReducer from './articuloReducer';

import axios from 'axios'

import { OBTENER_ARTICULOS, EDITAR_ARTICULO, ELIMINAR_ARTICULO} from '../../types'

const ArticuloState = props => {
    const initialState = {
        articulos: [],
        nuevosArticulos:[],
        paginaActual: 1,
        numeroPaginas: 5,
        total:0,
    }

    const [ state, dispatch ] = useReducer( articuloReducer, initialState )

    const obtenerArticulos = async ( pagina = 1 ) =>{

        // const api = await axios.get('http://localhost:8080/api/usuarios?&limite=10')
        // console.log(api.data);

        console.log(pagina);

        const respuestaApi = {
            total:15,
            nuevosArticulos:[
                { id:1, titulo:'Articulo Nuevo 1', img:'', conntenido:'' },
                { id:2, titulo:'Articulo Nuevo 2', img:'', conntenido:'' },
                { id:3, titulo:'Articulo Nuevo 3', img:'', conntenido:'' },
            ],
            articulos:[
                { id:1, titulo:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam.', img:'', conntenido:'' },
                { id:2, titulo:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae perferendis qui iste. Placeat mollitia non repellat quidem consequuntur iusto? Eaque!', img:'', conntenido:'' },
                { id:3, titulo:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img:'', conntenido:'' },
                { id:4, titulo:'Lorem ipsum dolor sit amet.', img:'', conntenido:'' },
                { id:5, titulo:'Articulo 5', img:'', conntenido:'' },
                { id:6, titulo:'Articulo 6', img:'', conntenido:'' },
            ]
        }

        dispatch({
            type: OBTENER_ARTICULOS,
            payload: respuestaApi
        })
    }

    return (
        <articuloContext.Provider value={{
            articulos: state.articulos,
            nuevosArticulos: state.nuevosArticulos,
            numeroPaginas: state.numeroPaginas,
            obtenerArticulos
        }}>
            {props.children}
        </articuloContext.Provider>
    )
}

export default ArticuloState;