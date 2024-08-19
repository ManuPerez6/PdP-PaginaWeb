import Axios from "axios";
import Swal from "sweetalert2";

export const addProducto = ({ idProducto, nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock }, getProductos, clearProductoForm) => {
    Axios.post("http://localhost:3006/Productos/create", {
        idProducto, nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock,
    }).then(() => {
        getProductos();
        Swal.fire({
            title: "<strong>Registrado con éxito!</strong>",
            html: `<i>El producto <strong>${nombreProducto}</strong> fue registrado en el catálogo</i>`,
            icon: 'success'
        });
        clearProductoForm();
    }).catch(error => {
        console.error("Error al registrar el producto:", error.response ? error.response.data : error.message);
        Swal.fire({
            title: "Error",
            text: "No se pudo registrar el producto.",
            icon: "error"
        });
    });
};

export const updateProducto = ({ idProducto, nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock }, getProductos, setEditar, clearProductoForm) => {
    Axios.put("http://localhost:3006/Productos/update", {
        idProducto, nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock,
    }).then(() => {
        getProductos();
        Swal.fire({
            title: "<strong>Actualizado con éxito!</strong>",
            html: `<i>El producto <strong>${nombreProducto}</strong> fue actualizado.</i>`,
            icon: 'success'
        });
        setEditar(false);
        clearProductoForm();
    }).catch(error => {
        console.error("Error al actualizar el producto:", error.response ? error.response.data : error.message);
        Swal.fire({
            title: "Error",
            text: "No se pudo actualizar el producto.",
            icon: "error"
        });
    });
};

export const deleteProducto = (valProducto, getProductos) => {
    Swal.fire({
        title: "¿Eliminar producto?",
        html: `<i>¿Desea eliminar el siguiente producto: ${valProducto.nombreProducto}?</i>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            Axios.delete(`http://localhost:3006/Productos/delete/${valProducto.idProducto}`).then(() => {
                getProductos();
                Swal.fire({
                    title: "Producto eliminado.",
                    text: `El producto ${valProducto.nombreProducto} ha sido eliminado`,
                    icon: "success"
                });
            }).catch(error => {
                console.error("Error al eliminar el producto:", error.response ? error.response.data : error.message);
            });
        }
    });
};

export const getProductos = (setProductosList) => {
    Axios.get("http://localhost:3006/Productos").then((response) => {
        setProductosList(response.data);
    }).catch(error => {
        console.error("Error al obtener los productos:", error.response ? error.response.data : error.message);
    });
};

export const checkBajoStock = (updateProducto) => {
    Axios.get("http://localhost:3006/Productos/bajo-stock").then((response) => {
        if (response.data.length > 0) {
            Swal.fire({
                title: "Productos con bajo stock",
                text: "Existen productos con bajo stock. ¿Desea actualizar el stock?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "Cancelar",
                confirmButtonText: "Actualizar"
            }).then((result) => {
                if (result.isConfirmed) {
                    response.data.forEach((producto) => {
                        Swal.fire({
                            title: `Actualizar producto ${producto.nombreProducto}`,
                            input: 'text',
                            inputLabel: 'Nuevo stock',
                            inputValue: producto.stock,
                            showCancelButton: true,
                            confirmButtonText: 'Actualizar',
                            cancelButtonText: 'Cancelar'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const nuevoStock = parseInt(result.value);
                                if (updateProducto) {
                                    updateProducto({ ...producto, stock: nuevoStock });
                                } else {
                                    console.error("updateProducto is not defined");
                                }
                            }
                        });
                    });
                }
            });
        }
    }).catch((error) => {
        console.error("Error al comprobar el stock bajo:", error);
    });
};

export const clearProductoForm = (setNombre, setMarca, setModelo, setTipo, setPrecio, setGarantia, setDescripcion, setStock, setEditar) => {
    setNombre("");
    setMarca("");
    setModelo("");
    setTipo("");
    setPrecio("");
    setGarantia("");
    setDescripcion("");
    setStock("");
    setEditar(false);
};
