import Axios from "axios";
import Swal from "sweetalert2";

// Obtener todas las ventas
export const getVentas = (setVentasList) => {
    Axios.get("http://localhost:3006/Ventas").then((response) => {
        setVentasList(response.data);
    });
};

// Agregar una nueva venta
export const addVenta = (venta, clearForm, callback) => {
    Axios.post("http://localhost:3006/Ventas/create", venta).then(() => {
        if (callback) callback(); // Ejecuta el callback si existe
        Swal.fire({
            title: "<strong>Venta registrada con éxito!</strong>",
            html: `<i>La venta con factura <strong>${venta.factura}</strong> fue registrada correctamente.</i>`,
            icon: 'success'
        });
        clearForm();
    });
};

export const updateVenta = (venta, clearForm, callback) => {
    Axios.put("http://localhost:3006/Ventas/update", venta).then(() => {
        if (callback) callback(); // Ejecuta el callback si existe
        Swal.fire({
            title: "<strong>Venta actualizada con éxito!</strong>",
            html: `<i>La venta con factura <strong>${venta.factura}</strong> fue actualizada correctamente.</i>`,
            icon: 'success'
        });
        clearForm();
    });
};

// Eliminar una venta
export const deleteVenta = (venta, getVentas) => {
    Swal.fire({
        title: "¿Eliminar venta?",
        html: `<i>¿Desea eliminar la venta con factura ${venta.factura}?</i>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            Axios.delete(`http://localhost:3006/Ventas/delete/${venta.idVenta}`).then(() => {
                getVentas();
                Swal.fire({
                    title: "Venta eliminada.",
                    text: `La venta con factura ${venta.factura} ha sido eliminada`,
                    icon: "success"
                });
            });
        }
    });
};