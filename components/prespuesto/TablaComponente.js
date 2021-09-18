import React, { useContext } from "react";

import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";

// React bootstrap
import { Table, Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { IoIosAdd, IoIosRemove  } from "react-icons/io";

const TablaComponente = ({ item, contador}) => {
  const { categoria, tratamiento, precio } = item;
  const presupuestoContext = useContext(PresupuestoContext);
  const { } = presupuestoContext;   
  
  const calcularCosto = () => {
    
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
                />
              </td>
              <td>
                {precio}
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="cantidad__input"
                />
              </td>
              <td>
                {precio}
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
