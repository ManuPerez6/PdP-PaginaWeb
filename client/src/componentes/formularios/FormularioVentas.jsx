import React, { useState, useEffect } from "react";
import { getVentas, addVenta, updateVenta } from "../../funciones/FuncionesVentas";
import { getEmpleados } from "../../funciones/FuncionesEmpleados";
import { getProductos } from "../../funciones/FuncionesProductos";

const FormularioVentas = ({
    idVenta,
    setIdVenta,
    factura,
    setFactura,
    fechaVenta,
    setFechaVenta,
    precioIndividual,
    setPrecioIndividual,
    totalVenta,
    setTotalVenta,
    idEmpleadoVenta,
    setIdEmpleadoVenta,
    idProductoVenta,
    setIdProductoVenta,
    cantidad,
    setCantidad,
    metodoPago,
    setMetodoPago,
    estado,
    setEstado,
    editar,
    getVentas,
    setVentasList,
    clearForm
}) => {
    const [empleados, setEmpleados] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getEmpleados(setEmpleados);
    }, []);

    useEffect(() => {
        getProductos(setProductos);
    }, []);

    const handleVentaSubmit = () => {
        const formattedFechaVenta = fechaVenta.split('T')[0];
        const ventaData = {
            idEmpleado: idEmpleadoVenta,
            factura,
            fechaVenta: formattedFechaVenta,
            precioIndividual,
            totalVenta,
            idProducto: idProductoVenta,
            cantidad,
            metodoPago,
            estado
        };
        const callback = () => getVentas(setVentasList);
        if (editar) {
            updateVenta(ventaData, clearForm, callback);
            console.log("Datos actualizados", ventaData)
        } else {
            addVenta(ventaData, clearForm, callback);
            console.log("Datos enviados", ventaData)
        }
    };

    return (
        <div>
            <form>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={factura}
                        onChange={(e) => setFactura(e.target.value)}
                        placeholder="Factura"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="date"
                        className="form-control"
                        value={fechaVenta}
                        onChange={(e) => setFechaVenta(e.target.value)}
                        placeholder="Fecha de Venta"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        value={precioIndividual || ""}
                        onChange={(e) => setPrecioIndividual(e.target.value ? parseFloat(e.target.value) : undefined)}
                        placeholder="Precio Individual"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        value={totalVenta || ""}
                        onChange={(e) => setTotalVenta(e.target.value ? parseFloat(e.target.value) : undefined)}
                        placeholder="Total Venta"
                    />
                </div>
                <div className="mb-3">
                    <select
                        className="form-control"
                        value={idEmpleadoVenta || ""}
                        onChange={(e) => setIdEmpleadoVenta(e.target.value ? parseInt(e.target.value) : undefined)}
                    >
                        <option value="">Seleccione un empleado</option>
                        {empleados.map(empleado => (
                            <option key={empleado.idEmpleado} value={empleado.idEmpleado}>
                                {empleado.nombreEmpleado}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <select
                        className="form-control"
                        value={idProductoVenta || ""}
                        onChange={(e) => setIdProductoVenta(e.target.value ? parseInt(e.target.value) : undefined)}
                    >
                        <option value="">Seleccione un producto</option>
                        {productos.map(producto => (
                            <option key={producto.idProducto} value={producto.idProducto}>
                                {producto.nombreProducto}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={cantidad || ""}
                        onChange={(e) => setCantidad(e.target.value ? parseInt(e.target.value) : undefined)}
                        placeholder="Cantidad"
                    />
                </div>
                <div className="mb-3">
                    <select
                        className="form-control"
                        value={metodoPago || ""}
                        onChange={(e) => setMetodoPago(e.target.value)}
                    >
                        <option value="">Seleccione un método de pago</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Transferencia">Transferencia</option>
                        <option value="Tarjeta Débito">Tarjeta Débito</option>
                        <option value="Tarjeta Crédito">Tarjeta Crédito</option>
                    </select>
                </div>
                <div className="mb-3">
                    <select
                        className="form-control"
                        value={estado || ""}
                        onChange={(e) => setEstado(e.target.value)}
                    >
                        <option value="">Seleccione un estado</option>
                        <option value="Pagado">Pagado</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Rechazado">Rechazado</option>
                    </select>
                </div>
                <div className="card-footer text-muted">
                    {
                        editar ?
                            <div>
                                <button type="button" className="btn btn-warning m-2" onClick={handleVentaSubmit}>Actualizar</button>
                                <button type="button" className="btn btn-info m-2" onClick={clearForm}>Cancelar</button>
                            </div>
                            : <button type="button" className="btn btn-success" onClick={handleVentaSubmit}>Registrar</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default FormularioVentas;