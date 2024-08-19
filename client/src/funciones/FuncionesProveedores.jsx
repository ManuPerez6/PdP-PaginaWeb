import Axios from "axios";
import Swal from "sweetalert2";

// Obtener la lista de proveedores
export const getProveedores = (setProveedoresList) => {
    Axios.get("http://localhost:3006/Proveedores").then((response) => {
        setProveedoresList(response.data);
    }).catch((error) => {
        console.error(error);
        Swal.fire({
            title: "Error",
            text: "Ocurrió un error al obtener la lista de proveedores.",
            icon: "error"
        });
    });
};

// Agregar un nuevo proveedor
export const addProveedor = ({ nombreProveedor, contactoPrincipal, telefono, email, direccion, ciudad, pais, codigoPostal, tipoProveedor, condicionesPago, descuentos, plazoEntrega, categoriaProductos, estado, notas }, clearForm, getProveedores) => {
    Axios.post("http://localhost:3006/Proveedores/create", {
        nombreProveedor,
        contactoPrincipal,
        telefono,
        email,
        direccion,
        ciudad,
        pais,
        codigoPostal,
        tipoProveedor,
        condicionesPago,
        descuentos,
        plazoEntrega,
        categoriaProductos,
        estado,
        notas
    }).then(() => {
        getProveedores();
        Swal.fire({
            title: "<strong>Registrado con éxito!</strong>",
            html: `<i>El proveedor <strong>${nombreProveedor}</strong> fue registrado.</i>`,
            icon: 'success'
        });
        clearForm();
    }).catch((error) => {
        console.error(error);
        Swal.fire({
            title: "Error",
            text: "Ocurrió un error al registrar el proveedor.",
            icon: "error"
        });
    });
};

// Actualizar un proveedor
export const updateProveedor = ({ idProveedores, nombreProveedor, contactoPrincipal, telefono, email, direccion, ciudad, pais, codigoPostal, tipoProveedor, condicionesPago, descuentos, plazoEntrega, categoriaProductos, estado, notas }, clearForm, getProveedores) => {
    Axios.put("http://localhost:3006/Proveedores/update", {
        idProveedores,
        nombreProveedor,
        contactoPrincipal,
        telefono,
        email,
        direccion,
        ciudad,
        pais,
        codigoPostal,
        tipoProveedor,
        condicionesPago,
        descuentos,
        plazoEntrega,
        categoriaProductos,
        estado,
        notas
    }).then(() => {
        getProveedores();
        Swal.fire({
            title: "<strong>Actualizado con éxito!</strong>",
            html: `<i>El proveedor <strong>${nombreProveedor}</strong> fue actualizado.</i>`,
            icon: 'success'
        });
        clearForm();
    }).catch((error) => {
        console.error(error);
        Swal.fire({
            title: "Error",
            text: "Ocurrió un error al actualizar el proveedor.",
            icon: "error"
        });
    });
};

// Eliminar un proveedor
export const deleteProveedor = (valProveedor, getProveedores) => {
    Swal.fire({
        title: "¿Eliminar Proveedor?",
        html: `<i>¿Desea eliminar al proveedor ${valProveedor.nombreProveedor}?</i>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            console.log(valProveedor);
            Axios.delete(`http://localhost:3006/Proveedores/delete/${valProveedor.idProveedores}`).then(() => {
                getProveedores();
                Swal.fire({
                    title: "Empleado eliminado.",
                    text: `El empleado ${valProveedor.nombreProveedor} ha sido eliminado`,
                    icon: "success"
                });
            });
        }
    });
};