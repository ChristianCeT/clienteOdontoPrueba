import React, { useContext, useState, useEffect } from "react";

import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";

// React bootstrap
import { Table, Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import useSubTotal from "../../Hooks/useSubTotal";

const TablaComponente = ({ item, contador, dato, numeroFilas }) => {
  const { categoria, tratamiento, precio } = item;
  const {
    actualizarSubTotal,
    setDescuento,
    subtotal,
    cantidadValor,
    descuento,
  } = useSubTotal(precio, numeroFilas);

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
          <td>{precio}</td>
          <td>
            <input
              type="number"
              min="0"
              defaultValue="0"
              className="cantidad__input"
              onChange={(e) => setDescuento(e.target.value)}
            />
          </td>
          <td>{subtotal}</td>
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
