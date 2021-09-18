import {
    SELECCIONA_CATEGORIA,
    SELECCIONA_TRATAMIENTO,
    CANTIDAD_TRATAMIENTO,
    AGREGAR_FILA,
} from '../../types';

const PresupuestoReducer = ( state, action ) => {
    switch(action.type){
        case SELECCIONA_CATEGORIA:
            return {
                ...state,
                categoria: action.payload
            }
        case SELECCIONA_TRATAMIENTO:
            return {
                ...state,
                tratamiento: [action.payload]
            }
        case AGREGAR_FILA:
            return {
                ...state,
                agregarFila: [...state.agregarFila, action.payload]
            }    
        default:
            return state;
    }
}
export default PresupuestoReducer