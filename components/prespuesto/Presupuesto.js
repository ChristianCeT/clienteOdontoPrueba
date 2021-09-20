import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import lodash from "lodash";
import { v4 as uuidv4 } from "uuid";

import TablaComponente from "../../components/prespuesto/TablaComponente";
import SelecionarCategoria from "./SelecionarCategoria";
import SeleccionarTratamiento from "./SeleccionarTratamiento";

// React bootstrap
import { Table, Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";

import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";
import useSubTotal from "../../Hooks/useSubTotal";

const Presupuesto = () => {
  const [dato, setDato] = useState({});
  const [numeroFilas, setNumeroFilas] = useState(0);
  const presupuestoContext = useContext(PresupuestoContext);
  const { categoria, presupuesto, tratamiento, agregarPresupuesto } =
    presupuestoContext;
  const [reloadTable, setReloadTable] = useState(false);

  const [Monto, setMonto] = useState(0);

  const { acumulador } = useSubTotal();

  // console.log(categoria);
  // console.log(tratamiento);
  // console.log("aw", dato);
  useEffect(() => {
    agregarPresupuesto(dato);
    sumar();
  }, [dato]);

  useEffect(() => {
    presupuesto;
    setReloadTable(false);
  }, [reloadTable]);

  const agregarFila = () => {
    const cod = uuidv4();
    let objeto = {
      id: cod,
      categoria: categoria.nombre,
      tratamiento: tratamiento[0].nombre,
      precio: tratamiento[0].costo,
      costoTotal: 0,
      descuento: 0,
    };
    setDato(objeto);
  };

  const sumar = () => {
    let costTotal;
    let descuento;

    presupuesto.map((item, key) => {
      setNumeroFilas(key + 1);
      console.log("preciooo", item.precio);
    });
  };

  console.log("presupuestoactual", presupuesto);

  const borrarFila = (id) => {
    let contador = 0;

    presupuesto.map((registro) => {
      if (registro.id === id) {
        presupuesto.splice(contador, 1);
      }
      contador++;
    });

    console.log("prespupuestdespues", presupuesto);
    setReloadTable(true);
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
              {presupuesto
                .slice(1, presupuesto.length)
                .map((item, contador) => (
                  <TablaComponente
                    key={contador}
                    item={item}
                    dato={dato}
                    contador={contador}
                    numeroFilas={numeroFilas}
                    borrarFila={borrarFila}
                    setReloadTable={setReloadTable}
                  />
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
                <Col>Subtotal: {} </Col>
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
