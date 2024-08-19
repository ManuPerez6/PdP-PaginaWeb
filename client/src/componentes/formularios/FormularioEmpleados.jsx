import React from "react";
import { addEmpleado, updateEmpleado } from "../../funciones/FuncionesEmpleados";

const FormularioEmpleados = ({
    nombreEmpleado,
    setNombreEmpleado,
    edad,
    setEdad,
    localidad,
    setLocalidad,
    cargo,
    setCargo,
    sede,
    setSede,
    años,
    setAños,
    editar,
    addEmpleado,
    updateEmpleado,
    clearForm
}) => {
    return (
        <form>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={nombreEmpleado}
                    onChange={(e) => setNombreEmpleado(e.target.value)}
                    placeholder="Nombre"
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    value={edad || ""}
                    onChange={(e) => setEdad(e.target.value ? parseInt(e.target.value) : undefined)}
                    placeholder="Edad"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={localidad}
                    onChange={(e) => setLocalidad(e.target.value)}
                    placeholder="Localidad"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    placeholder="Cargo"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={sede}
                    onChange={(e) => setSede(e.target.value)}
                    placeholder="Sede"
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    value={años || ""}
                    onChange={(e) => setAños(e.target.value ? parseInt(e.target.value) : undefined)}
                    placeholder="Años"
                />
            </div>
            <div className="card-footer text-muted">
                {
                    editar ?
                        <div>
                            <button type="button" className="btn btn-warning m-2" onClick={updateEmpleado}>Actualizar</button>
                            <button type="button" className="btn btn-info m-2" onClick={clearForm}>Cancelar</button>
                        </div>
                        : <button type="button" className="btn btn-success" onClick={addEmpleado}>Registrar</button>
                }
            </div>
        </form>
    );
};

export default FormularioEmpleados;
