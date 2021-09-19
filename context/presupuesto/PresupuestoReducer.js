import {
  SELECCIONA_CATEGORIA,
  SELECCIONA_TRATAMIENTO,
  CANTIDAD_TRATAMIENTO,
  AGREGAR_PRESUPUESTO,
  AGREGAR_SUBTOTAL,
  AGREGAR_DESCUENTO,
} from "../../types";

const PresupuestoReducer = (state, action) => {
  switch (action.type) {
    case SELECCIONA_CATEGORIA:
      return {
        ...state,
        categoria: action.payload,
      };
    case SELECCIONA_TRATAMIENTO:
      return {
        ...state,
        tratamiento: [action.payload],
      };
    case AGREGAR_PRESUPUESTO:
      return {
        ...state,
        presupuesto: [...state.presupuesto, action.payload],
      };
    case AGREGAR_SUBTOTAL:
    return {
        ...state,
        cantidadSub:   action.payload
    };
    case AGREGAR_DESCUENTO:
      return {
        ...state,
        cantidadDesc:  action.payload
      };
    default:
      return state;
  }
};
export default PresupuestoReducer;
