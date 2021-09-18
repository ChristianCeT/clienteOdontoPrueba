import React, { useReducer } from 'react';
import PresupuestoContext from './PresupuestoContext';
import PresupuestoReducer from './PresupuestoReducer';

import {
    SELECCIONA_CATEGORIA,
    SELECCIONA_TRATAMIENTO,
    CANTIDAD_TRATAMIENTO,
    AGREGAR_FILA,
} from '../../types';

const PresupuestoState = ({children}) => {

    // State de Presupuesto
    const initialState = {
        agregarFila: [],
        categoria: [],
        tratamiento: [],
        total: 0
    }

    const [ state, dispatch ] = useReducer(PresupuestoReducer, initialState);

    const agregarCategoria = categoria => {
        // console.log(categoria); 

        dispatch({
            type: SELECCIONA_CATEGORIA,
            payload: categoria
        })
    }

    const agregarTratamiento = tratamiento => {
        // console.log("Desde state", tratamiento);

        dispatch({
            type: SELECCIONA_TRATAMIENTO,
            payload: tratamiento
        })
    }

    const modificarFilas = repeticiones => {
        console.log("awa", repeticiones);
        dispatch({
            type: AGREGAR_FILA,
            payload: repeticiones
        })
    }

    return(
        <PresupuestoContext.Provider
            value={{
                categoria : state.categoria,
                tratamiento : state.tratamiento,
                agregarFila : state.agregarFila,
                agregarCategoria,
                agregarTratamiento,
                modificarFilas
            }}
        >
            {children}
        </PresupuestoContext.Provider>
    )
}

export default PresupuestoState;