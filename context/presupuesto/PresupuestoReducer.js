import {
    SELECCIONA_CATEGORIA,
    SELECCIONA_TRATAMIENTO,
    CANTIDAD_TRATAMIENTO,
    AGREGAR_PRESUPUESTO,
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
        case AGREGAR_PRESUPUESTO:
            return {
                ...state,
                presupuesto: [...state.presupuesto, action.payload]
            }    
        default:
            return state;
    }
}
export default PresupuestoReducer