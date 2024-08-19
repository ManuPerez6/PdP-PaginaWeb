import React from "react";

const TablaEmpleados = ({ empleadosList, editarEmpleado, deleteEmpleado }) => {
  return (
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Localidad</th>
          <th>Cargo</th>
          <th>Sede</th>
          <th>Años</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {empleadosList.map((val) => (
          <tr key={val.idEmpleado}>
            <td>#{val.idEmpleado}</td>
            <td>{val.nombreEmpleado}</td>
            <td>{val.edad}</td>
            <td>{val.localidad}</td>
            <td>{val.cargo}</td>
            <td>{val.sede}</td>
            <td>{val.años}</td>
            <td className="btn btn-group">
              <button
                className="btn btn-warning px-3"
                onClick={() => editarEmpleado(val)}
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger px-3"
                onClick={() => deleteEmpleado(val)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaEmpleados;
