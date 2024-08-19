import React from "react";
import { addProducto, updateProducto } from "../../funciones/FuncionesProductos";

const FormularioProductos = ({
    nombreProducto, setNombreProducto, marca, setMarca, modelo, setModelo, tipo, setTipo,
    precio, setPrecio, garantia, setGarantia, descripcion, setDescripcion,
    stock, setStock, editar, addProducto, updateProducto, clearForm
}) => {
    return (
        <form>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={nombreProducto}
                    onChange={(e) => setNombreProducto(e.target.value)}
                    placeholder="Nombre"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    placeholder="Marca"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    placeholder="Modelo"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    placeholder="Tipo"
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    value={precio || ""}
                    onChange={(e) => setPrecio(e.target.value ? parseFloat(e.target.value) : parseInt(""))}
                    placeholder="Precio"
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    value={garantia || ""}
                    onChange={(e) => setGarantia(e.target.value ? parseInt(e.target.value) : parseInt(""))}
                    placeholder="Garantía (años)"
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    rows="5"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Descripción"
                ></textarea>
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    value={stock || ""}
                    onChange={(e) => setStock(e.target.value ? parseInt(e.target.value) : parseInt(""))}
                    placeholder="Stock"
                />
            </div>
            <div className="card-footer text-muted">
                {
                    editar ?
                        <div>
                            <button type="button" className="btn btn-warning m-2" onClick={updateProducto}>Actualizar</button>
                            <button type="button" className="btn btn-info m-2" onClick={clearForm}>Cancelar</button>
                        </div>
                        : <button type="button" className="btn btn-success" onClick={addProducto}>Agregar</button>
                }
            </div>
        </form>
    );
};

export default FormularioProductos;
