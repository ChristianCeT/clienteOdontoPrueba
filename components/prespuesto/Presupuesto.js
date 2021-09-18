import React, { useContext, useEffect, useState } from "react";

import TablaComponente from "../../components/prespuesto/TablaComponente";

// React bootstrap
import { Table, Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";

import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";


const Presupuesto = () => {
    const [agregarTabla, setAgregarTabla] = useState([]);
    console.log(agregarTabla);   
  
    const presupuestoContext = useContext(PresupuestoContext);
    const { modificarFilas, agregarFila } = presupuestoContext;

    useEffect(() => {
        modificarFilas(agregarTabla)
    }, [agregarTabla])  

    const agregarfila = () => {

        setAgregarTabla(Math.round(Math.random())); 
    }

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
                   agregarFila.map( fila => (
                       <TablaComponente />
                   )) 
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
                    onClick={() => agregarfila()}
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

export default Presupuesto;
