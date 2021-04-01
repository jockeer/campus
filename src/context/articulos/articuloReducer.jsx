import { OBTENER_ARTICULOS, EDITAR_ARTICULO, ELIMINAR_ARTICULO } from '../../types'

export default (state, action) => {
    switch(action.type){
        
        case OBTENER_ARTICULOS:
            return{
                ...state,
                articulos: action.payload
            }
        case EDITAR_ARTICULO:
            return{
                ...state,
                // puestos:action.payload
            }
        case ELIMINAR_ARTICULO:
            return{
                ...state,
                // puesto:action.payload
            }
            
        default:
            return state;
    }
}