import React, { useReducer } from 'react';
import PresupuestoContext from './PresupuestoContext';
import PresupuestoReducer from './PresupuestoReducer';

import {
    SELECCIONA_CATEGORIA,
    SELECCIONA_TRATAMIENTO,
    CANTIDAD_TRATAMIENTO,
    AGREGAR_PRESUPUESTO,
    AGREGAR_SUBTOTAL,
    AGREGAR_DESCUENTO
} from '../../types';

const PresupuestoState = ({children}) => {

    // State de Presupuesto
    const initialState = {
        cantidadDesc: 0,
        cantidadSub: 0,  
        resumenPresupuesto:{},
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



    // Resumen de presupuesto 
    const calcularResumen = dato => {
        console.log(dato);
        // dispatch({

        // })
    }

    const cantidadSubTotal = subtotal => {
        console.log("sub",(subtotal));
        dispatch({
            type: AGREGAR_SUBTOTAL,
            payload: subtotal
        })
    }

    const cantidadDescuento = descuento => {
        console.log("desc",descuento);
        dispatch({
            type: AGREGAR_DESCUENTO,
            payload: descuento
        })
    }   

    return(
        <PresupuestoContext.Provider
            value={{
                cantidadDesc: state.presupuesto,
                cantidadSub: state.categoria,
                presupuesto: state.presupuesto,
                categoria : state.categoria,
                tratamiento : state.tratamiento,
                resumenPresupuesto: state.resumenPresupuesto,
                agregarCategoria,
                agregarTratamiento,
                agregarPresupuesto,
                calcularResumen,
                cantidadSubTotal,
                cantidadDescuento,
                
            }}
        >
            {children}
        </PresupuestoContext.Provider>
    )
}

export default PresupuestoState;