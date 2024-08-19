import React from "react";

const TablaProveedores = ({
    proveedoresList,
    editarProveedor,
    deleteProveedor
}) => {
    return (
        <table className="table table-striped mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Contacto Principal</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    <th>Ciudad</th>
                    <th>País</th>
                    <th>Código Postal</th>
                    <th>Tipo de Proveedor</th>
                    <th>Condiciones de Pago</th>
                    <th>Descuentos</th>
                    <th>Plazo de Entrega</th>
                    <th>Categoría de Productos</th>
                    <th>Estado</th>
                    <th>Notas</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {proveedoresList.map((valProveedor) => (
                    <tr key={valProveedor.idProveedores}>
                        <td>#{valProveedor.idProveedores}</td>
                        <td>{valProveedor.nombreProveedor}</td>
                        <td>{valProveedor.contactoPrincipal}</td>
                        <td>{valProveedor.telefono}</td>
                        <td>{valProveedor.email}</td>
                        <td>{valProveedor.direccion}</td>
                        <td>{valProveedor.ciudad}</td>
                        <td>{valProveedor.pais}</td>
                        <td>{valProveedor.codigoPostal}</td>
                        <td>{valProveedor.tipoProveedor}</td>
                        <td>{valProveedor.condicionesPago}</td>
                        <td>{parseFloat(valProveedor.descuentos).toFixed(2)}%</td>
                        <td>{valProveedor.plazoEntrega} días</td>
                        <td>{valProveedor.categoriaProductos}</td>
                        <td>{valProveedor.estado}</td>
                        <td>{valProveedor.notas}</td>
                        <td className="btn-group">
                            <button
                                className="btn btn-warning px-3"
                                onClick={() => editarProveedor(valProveedor)}
                            >
                                Editar
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger px-3"
                                onClick={() => deleteProveedor(valProveedor)}
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

export default TablaProveedores;
