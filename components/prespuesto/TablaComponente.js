import React, { useContext } from 'react'
import SelecionarCategoria from "./SelecionarCategoria";
import SeleccionarTratamiento from "./SeleccionarTratamiento";
import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";

// React bootstrap
import {Button} from "react-bootstrap";

import {IoIosRemove } from "react-icons/io";

export default function TablaComponente() {

    const presupuestoContext = useContext(PresupuestoContext);

    const { tratamiento } = presupuestoContext;
    console.log(tratamiento);
    
    if( tratamiento.length === 0) return "cargando datos...";

    return (
        <>
        <tr>
                <td>1</td>
                <td>
                  <SelecionarCategoria />
                </td>
                <td>
                  <SeleccionarTratamiento />
                </td>
                <td>
                  <input type="number" min="1" defaultValue="1" className="cantidad__input"></input>
                </td>
                <td>
                     {
                        (!tratamiento || typeof tratamiento[0].costo !== "undefined")
                        ?
                            `${tratamiento[0].costo}`
                        :
                            "0"
                    }   
                </td>
                <td>50</td>
                <td>100</td>
                <td>
                  <div className="categoria__container--btn">
                    <Button className="btn__borrar" variant="danger">
                      <IoIosRemove></IoIosRemove> Borrar
                    </Button>
                  </div>
                </td>
              </tr>
              </>
    )
}
