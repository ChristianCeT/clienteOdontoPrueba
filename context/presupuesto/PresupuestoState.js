import React, { useReducer } from 'react';
import PresupuestoContext from './PresupuestoContext';
import PresupuestoReducer from './PresupuestoReducer';

import {
    SELECCIONA_CATEGORIA,
    SELECCIONA_TRATAMIENTO,
    CANTIDAD_TRATAMIENTO,
    AGREGAR_PRESUPUESTO,
} from '../../types';

const PresupuestoState = ({children}) => {

    // State de Presupuesto
    const initialState = {
        presupuesto: [],
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

    const agregarPresupuesto = dato => {
        dispatch({
            type: AGREGAR_PRESUPUESTO,
            payload: dato
        })
    }

    return(
        <PresupuestoContext.Provider
            value={{
                presupuesto: state.presupuesto,
                categoria : state.categoria,
                tratamiento : state.tratamiento,
                agregarCategoria,
                agregarTratamiento,
                agregarPresupuesto
            }}
        >
            {children}
        </PresupuestoContext.Provider>
    )
}

export default PresupuestoState;