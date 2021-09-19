import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import TablaComponente from "../../components/prespuesto/TablaComponente";
import SelecionarCategoria from "./SelecionarCategoria";
import SeleccionarTratamiento from "./SeleccionarTratamiento";

// React bootstrap
import { Table, Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";

import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";

const Presupuesto = () => {
  const [dato, setDato] = useState({});

  const presupuestoContext = useContext(PresupuestoContext);
  const { categoria, presupuesto, tratamiento, agregarPresupuesto } =
    presupuestoContext;

  // console.log(categoria);
  // console.log(tratamiento);
  // console.log("aw", dato);
  useEffect(() => {
    agregarPresupuesto(dato);
  }, [dato]);

  const agregarFila = () => {
    let objeto = {
      id: categoria._id,
      categoria: categoria.nombre,
      tratamiento: tratamiento[0].nombre,
      precio: tratamiento[0].costo,
      costoTotal: 0
    };
    setDato(objeto);
  };


  return (
    <>
      <Row className="div__container-row">
        <h1>Presupuesto</h1>
        <div>
          <label>Seleccionar categoría</label>
          <SelecionarCategoria />
          <label>Seleccionar tratamiento</label>
          <SeleccionarTratamiento />

          <Button
            className="btn__agregar"
            variant="success"
            onClick={() => agregarFila()}
          >
            <IoIosAdd></IoIosAdd> Añadir a presupuesto
          </Button>
        </div>

        {presupuesto.length !== 1 ? (
          <Col md={8}>
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
              {presupuesto.slice(1, presupuesto.length).map((item, contador) => (
                <TablaComponente key={contador} item={item} contador={contador} />
              ))}
            </Table>
          </Col>
        ) : (
          <p>Aun no hay registros</p>
        )}

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
