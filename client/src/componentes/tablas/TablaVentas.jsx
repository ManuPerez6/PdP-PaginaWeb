import React from "react";

const TablaVentas = ({ ventasList, editarVenta, deleteVenta }) => {
  return (
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Factura</th>
          <th>Fecha</th>
          <th>Precio Individual</th>
          <th>Total Venta</th>
          <th>ID Empleado</th>
          <th>ID Producto</th>
          <th>Cantidad</th>
          <th>Método de Pago</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {ventasList.map((val) => (
          <tr key={val.idVenta}>
            <td>#{val.idVenta}</td>
            <td>{val.factura}</td>
            <td>{new Date(val.fechaVenta).toLocaleDateString()}</td>
            <td>${val.precioIndividual.toFixed(2)}</td>
            <td>${val.totalVenta.toFixed(2)}</td>
            <td>{val.idEmpleado}</td>
            <td>{val.idProducto}</td>
            <td>{val.cantidad}</td>
            <td>{val.metodoPago}</td>
            <td>{val.estado}</td>
            <td className="btn btn-group">
              <button
                className="btn btn-warning px-3"
                onClick={() => editarVenta(val)}
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger px-3"
                onClick={() => deleteVenta(val)}
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

export default TablaVentas;