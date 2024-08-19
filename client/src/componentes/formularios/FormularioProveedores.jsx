import React from "react";

const FormularioProveedores = ({
    nombreProveedor,
    setNombreProveedor,
    contactoPrincipal,
    setContactoPrincipal,
    telefono,
    setTelefono,
    email,
    setEmail,
    direccion,
    setDireccion,
    ciudad,
    setCiudad,
    pais,
    setPais,
    codigoPostal,
    setCodigoPostal,
    tipoProveedor,
    setTipoProveedor,
    condicionesPago,
    setCondicionesPago,
    descuentos,
    setDescuentos,
    plazoEntrega,
    setPlazoEntrega,
    categoriaProductos,
    setCategoriaProductos,
    estado,
    setEstado,
    notas,
    setNotas,
    editarProveedor,
    addProveedor,
    updateProveedor,
    clearForm
}) => {

    return (
        <form>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={nombreProveedor}
                    onChange={(e) => setNombreProveedor(e.target.value)}
                    placeholder="Nombre del Proveedor"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={contactoPrincipal}
                    onChange={(e) => setContactoPrincipal(e.target.value)}
                    placeholder="Contacto Principal"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Teléfono"
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    placeholder="Dirección"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    placeholder="Ciudad"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                    placeholder="País"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={codigoPostal}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                    placeholder="Código Postal"
                />
            </div>
            <div className="mb-3">
                <select
                    className="form-control"
                    value={tipoProveedor || ""}
                    onChange={(e) => setTipoProveedor(e.target.value)}
                >
                    <option value="">Seleccione el tipo de proveedor</option>
                    <option value="Fabricante">Fabricante</option>
                    <option value="Distribuidor">Distribuidor</option>
                    <option value="Mayorista">Mayorista</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={condicionesPago}
                    onChange={(e) => setCondicionesPago(e.target.value)}
                    placeholder="Condiciones de Pago"
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    value={descuentos || ""}
                    onChange={(e) => setDescuentos(e.target.value ? parseFloat(e.target.value) : "")}
                    placeholder="Descuentos (%)"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={plazoEntrega}
                    onChange={(e) => setPlazoEntrega(e.target.value)}
                    placeholder="Plazo de Entrega"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={categoriaProductos}
                    onChange={(e) => setCategoriaProductos(e.target.value)}
                    placeholder="Categoría de Productos"
                />
            </div>
            <div className="mb-3">
                <select
                    className="form-control"
                    value={estado || ""}
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="">Seleccione el estado del proveedor</option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    rows="5"
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    placeholder="Notas"
                ></textarea>
            </div>
            <div className="card-footer text-muted">
                {
                    editarProveedor ?
                        <div>
                            <button type="button" className="btn btn-warning m-2" onClick={updateProveedor}>Actualizar</button>
                            <button type="button" className="btn btn-info m-2" onClick={clearForm}>Cancelar</button>
                        </div>
                        : <button type="button" className="btn btn-success" onClick={addProveedor}>Agregar</button>
                }
            </div>
        </form>
    );
};

export default FormularioProveedores;
