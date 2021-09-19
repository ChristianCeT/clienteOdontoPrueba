import React, { useContext, useState, useEffect } from "react";

import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";

// React bootstrap
import { Table, Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { IoIosAdd, IoIosRemove  } from "react-icons/io";

const TablaComponente = ({ item, contador, dato}) => {

  const { categoria, tratamiento, precio } = item;
  const [cantidadValor, setCantidadValor] = useState(1);
  const [descuento, setDescuento] = useState(0);
  const [subtotal, setSubtotal] = useState(precio);

  
      dato.costoTotal = (cantidadValor * precio) - descuento
      dato.descuento = Number(descuento)
  
      

  

  const presupuestoContext = useContext(PresupuestoContext);
  const { calcularResumen, cantidadDescuento, cantidadSub, cantidadSubTotal, modificarPresupuesto, presupuesto } = presupuestoContext;  
  

  useEffect(() => {

    calcularCosto()
    modificarPresupuesto(dato)
    cantidadDescuento(Number(descuento))
    cantidadSubTotal((cantidadValor * precio) - descuento)
  }, [cantidadValor, descuento ]);
  
  const calcularCosto = () => {
    setSubtotal((cantidadValor * precio) - descuento)
  }

  const actualizarSubTotal = e => {
    setCantidadValor(e)
  }
  return (
    <>
          <tbody>
            <tr>
              <td>{contador + 1}</td>
              <td>{categoria}</td>
              <td>{tratamiento}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="cantidad__input"
                  onChange={(e) => actualizarSubTotal(e.target.value)}
                />
              </td>
              <td>
                {precio}
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="cantidad__input"
                  onChange={(e) => setDescuento(e.target.value)}
                />
              </td>
              <td>
                {subtotal}
              </td>
              <td>
                <div className="categoria__container--btn">
                  <Button className="btn__borrar" variant="danger">
                    <IoIosRemove></IoIosRemove> Borrar
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        
    </>
  );
};

export default TablaComponente;
