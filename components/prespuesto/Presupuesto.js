import React, { useContext, useEffect, useState, useMemo, useCallback } from "react";

import TablaComponente from "../../components/prespuesto/TablaComponente";

// React bootstrap
import { Table, Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";

import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";


const Presupuesto = () => {
    const [agregarTabla, setAgregarTabla] = useState([]);
    const [ mostrar, setMostrar ] = useState(false);
    console.log(mostrar);
    console.log(agregarTabla);   
  
    const presupuestoContext = useContext(PresupuestoContext);
    const { modificarFilas, agregarFila } = presupuestoContext;

    // const renderCuerpo = useMemo(
    //     () => 
    //     <TablaComponente
    //         mostrar = { mostrar }
    //     />, [mostrar]
    // );

    useEffect(() => {
        modificarFilas(agregarTabla);
        
    }, [agregarTabla])  

    const agregarfila = () => {
        setAgregarTabla()
    }

    const realizarllamado = useCallback(() => {
        setMostrar(!mostrar);
        console.log("ewe");
    }, [mostrar])

  return (
    <>
      <Row className="div__container-row">
        <Col md={8}>
          <h1>Presupuesto</h1>
          <Table striped bordered hover>
            <thead>
              <th>#</th>
              <th>Categoría</th>
              <th>Tratamiento</th>
              <th>Cantidad</th>
              <th>C/U</th>
              <th>Descuento</th>
              <th>Costo</th>
              <th>Acciones</th>
            </thead>
            <tbody>
                {
                   <TablaComponente
                        mostrar={mostrar}
                   />
                }
            </tbody>
          </Table>
        </Col>

        <Col sm={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>Resumen del presupuesto</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Col>Subtotal:</Col>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>Descuen Total:</Col>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>Monto Total:</Col>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>
                  <Button>Enviar al correo</Button>
                  <Button
                    className="btn__agregar"
                    variant="success"
                    onClick={() => realizarllamado()}
                  >
                    <IoIosAdd></IoIosAdd> Agregar
                  </Button>
                </Col>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Presupuesto
