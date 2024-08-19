import Axios from "axios";
import Swal from "sweetalert2";

export const getEmpleados = (setEmpleadosList) => {
    Axios.get("http://localhost:3006/Empleados").then((response) => {
        setEmpleadosList(response.data);
    });
};

export const addEmpleado = (empleado, clearForm, getEmpleados) => {
    Axios.post("http://localhost:3006/create", empleado).then(() => {
        getEmpleados();
        Swal.fire({
            title: "<strong>Registrado con éxito!</strong>",
            html: `<i>El empleado <strong>${empleado.nombreEmpleado}</strong> fue registrado en la empresa</i>`,
            icon: 'success'
        });
        clearForm();
    });
};

export const updateEmpleado = (empleado, clearForm, getEmpleados) => {
    Axios.put("http://localhost:3006/update", empleado).then(() => {
        getEmpleados();
        console.log(empleado);
        Swal.fire({
            title: "<strong>Actualizado con éxito!</strong>",
            html: `<i>El empleado <strong>${empleado.nombreEmpleado}</strong> fue actualizado.</i>`,
            icon: 'success'
        });
        clearForm();
    });
};

export const deleteEmpleado = (val, getEmpleados) => {
    Swal.fire({
        title: "¿Eliminar empleado?",
        html: `<i>¿Desea eliminar al empleado ${val.nombreEmpleado}?</i>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            Axios.delete(`http://localhost:3006/delete/${val.idEmpleado}`).then(() => {
                getEmpleados();
                Swal.fire({
                    title: "Empleado eliminado.",
                    text: `El empleado ${val.nombreEmpleado} ha sido eliminado`,
                    icon: "success"
                });
            });
        }
    });
};