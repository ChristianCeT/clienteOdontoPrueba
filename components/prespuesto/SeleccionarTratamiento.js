import React, { useState, useEffect, useContext } from "react";

// React select
import Select from "react-select";


// Apollo client
import { gql, useQuery } from "@apollo/client";

// Context
import PresupuestoContext from "../../context/presupuesto/PresupuestoContext";

const OBTENER_TRATAMIENTO = gql`
    query obtenerTratamientoPorCategoria($id: ID!) {
    obtenerTratamientoPorCategoria(id: $id) {
            _id
            nombre
            costo
        }
    }
`;


const SeleccionarTratamiento = () => {

    // const { _id } = info;
    // console.log(_id);
    const [ tratamiento, setTratamiento ] = useState([]);
    
    

    // Context de presupuesto
    const presupuestoContext = useContext(PresupuestoContext);
    const { categoria, agregarTratamiento } = presupuestoContext;
    
    let cod;

    if(!categoria){
        cod='6143927d4ba361f141996e3f'
    }else {
        cod=categoria._id
    }
    const { data, loading, error } = useQuery(OBTENER_TRATAMIENTO,{
        variables: {
            id: cod
        }
    });

    useEffect(() => {
        agregarTratamiento(tratamiento);
    }, [tratamiento]);
    

    const seleccionarTratamiento = tratamiento => {
        setTratamiento(tratamiento);
    }

    if(error) return null;
    if(loading) return null;


    const { obtenerTratamientoPorCategoria } = data;


    return (
        <div>
            <Select
                options={obtenerTratamientoPorCategoria}
                onChange={(opcion) => seleccionarTratamiento(opcion)}
                getOptionLabel={(opciones) => opciones.nombre}
                getOptionValue={(opciones) => opciones._id}
                placeholder={"Selecciona tratamiento"}  
                noOptionsMessage={() => "No hay resultados"}
                className="tratamiento-select"
            />
        </div>
    )
}

export default SeleccionarTratamiento

