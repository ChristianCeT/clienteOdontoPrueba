import { useState, useContext, useEffect } from "react";
import PresupuestoContext from "../context/presupuesto/PresupuestoContext";

export default function useSubTotal(precio, numeroFilas) {
  const [cantidadValor, setCantidadValor] = useState(1);
  const [descuento, setDescuento] = useState(0);
  const [subtotal, setSubtotal] = useState(precio);
  const [subTotal2, setSubTotal2] = useState(0);

  /*  dato.costoTotal = cantidadValor * precio - descuento;
  dato.descuento = Number(descuento); */
  var arreglo = [];
  var array = [];
  let suma = 0;
  let acumulador = 0;
  const presupuestoContext = useContext(PresupuestoContext);

  const {
    calcularResumen,
    cantidadDescuento,
    cantidadSub,
    cantidadSubTotal,
    modificarPresupuesto,
    presupuesto,
  } = presupuestoContext;

  useEffect(() => {
    calcularCosto();
    /* modificarPresupuesto(dato); */
    cantidadDescuento(Number(descuento));
    cantidadSubTotal(cantidadValor * precio - descuento);
  }, [cantidadValor, descuento]);

  const calcularCosto = () => {
    setSubtotal(cantidadValor * precio - descuento);
  };

  const actualizarSubTotal = (e) => {
    setCantidadValor(e);
  };

  for (let index = 0; index < numeroFilas; index++) {
    acumulador = Number(subtotal);
  }
  arreglo.push(acumulador);
  console.log("acumulador", acumulador);

  return {
    actualizarSubTotal,
    setDescuento,
    subtotal,
    cantidadValor,
    descuento,
    acumulador,
  };
}
