import React, { useContext, memo } from 'react'
import SelecionarCategoria from "./SelecionarCategoria";
import SeleccionarTratamiento from "./SeleccionarTratamiento";
import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";

// React bootstrap
import {Button} from "react-bootstrap";

import {IoIosRemove } from "react-icons/io";

const TablaComponente = memo(( mostrar ) => {
    console.log("render");
    const presupuestoContext = useContext(PresupuestoContext);
    
    const { tratamiento } = presupuestoContext;
    console.log(tratamiento);


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
                        (tratamiento.length < 1)
                        ?
                            "0"
                        :
                            `${tratamiento[0].costo}`.replace('undefined', 0)

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
})

export default TablaComponente;