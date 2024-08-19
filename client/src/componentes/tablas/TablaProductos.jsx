import React from "react";

const TablaProductos = ({ productosList, editarProducto, deleteProducto }) => {
    return (
        <table className="table table-striped mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Garantía</th>
                    <th>Descripción</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productosList.map((valProducto) => (
                    <tr key={valProducto.idProducto}>
                        <td>#{valProducto.idProducto}</td>
                        <td>{valProducto.nombreProducto}</td>
                        <td>{valProducto.marca}</td>
                        <td>{valProducto.modelo}</td>
                        <td>{valProducto.tipo}</td>
                        <td>${valProducto.precio}</td>
                        <td>{valProducto.garantia}</td>
                        <td>{valProducto.descripcion}</td>
                        <td>{valProducto.stock}</td>
                        <td className="btn btn-group">
                            <button
                                className="btn btn-warning px-3"
                                onClick={() =>
                                    editarProducto(valProducto)
                                }
                            >
                                Editar
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger px-3"
                                onClick={() => deleteProducto(valProducto)}
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

export default TablaProductos;
