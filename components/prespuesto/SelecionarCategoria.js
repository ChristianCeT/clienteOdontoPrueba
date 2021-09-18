import React, { useState, useEffect, useContext } from "react";

// React select
import Select from "react-select";



// Apollo client
import { gql, useQuery } from "@apollo/client";

// Context
import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";


const OBTENER_CATEGORIA = gql`
  query obtenerCategorias {
    obtenerCategorias {
      _id
      nombre
      creado
    }
  }
`;

const SelecionarCategoria = () => {

  const [categoria, setCategoria] = useState([]);

  // Context de presupuesto
  const presupuestoContext = useContext(PresupuestoContext);
  const { agregarCategoria } = presupuestoContext;

  // Consultar a la bd
  const { data, loading, error } = useQuery(OBTENER_CATEGORIA);

  useEffect(() => {
    agregarCategoria(categoria);
  }, [categoria]);

  const seleccionarCategoria = (categoria) => {
    setCategoria(categoria);
  };

  // En caso aún no hay respuesta
  if (loading) return "Awita de uwu";

  const { obtenerCategorias } = data;

  return (
    
      <Select
        options={obtenerCategorias}
        onChange={(opcion) => seleccionarCategoria(opcion)}
        getOptionLabel={(opciones) => opciones.nombre}
        getOptionValue={(opciones) => opciones._id}
        placeholder={"Selecciona categoría"}
        noOptionsMessage={() => "No hay resultados"}
        className="tratamiento-select"
      />
    
  );
};

export default SelecionarCategoria;