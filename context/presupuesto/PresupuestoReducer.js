import {
  SELECCIONA_CATEGORIA,
  SELECCIONA_TRATAMIENTO,
  CANTIDAD_TRATAMIENTO,
  AGREGAR_PRESUPUESTO,
  AGREGAR_SUBTOTAL,
  AGREGAR_DESCUENTO,
  ACTUALIZAR_SUBTOTAL
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
        cantidadSub:  action.payload,
    };
    case AGREGAR_DESCUENTO:
      return {
        ...state,
        cantidadDesc: action.payload,
      };
    case ACTUALIZAR_SUBTOTAL:
    return {
        ...state,
        presupuesto: state.presupuesto.filter(item => item.id === action.payload.id ? item = action.payload : item)
    };
    default:
      return state;
  }
};
export default PresupuestoReducer;
