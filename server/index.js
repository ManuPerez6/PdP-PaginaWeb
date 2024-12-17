const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "TheXP",
    password: "Moro6177",
    database: "Repositorios",
});

// Crear un nuevo empleado
app.post("/create", (req, res) => {
    const { nombreEmpleado, edad, localidad, cargo, sede, años } = req.body;

    db.query(
        "INSERT INTO Empleados (nombreEmpleado, edad, localidad, cargo, sede, años) VALUES (?, ?, ?, ?, ?, ?)",
        [nombreEmpleado, edad, localidad, cargo, sede, años],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al registrar el empleado");
            }
            res.send("Empleado registrado con éxito!!");
        }
    );
});

// Actualizar un empleado
app.put("/update", (req, res) => {
    const { idEmpleado, nombreEmpleado, edad, localidad, cargo, sede, años } = req.body;

    db.query(
        "UPDATE Empleados SET nombreEmpleado = ?, edad = ?, localidad = ?, cargo = ?, sede = ?, años = ? WHERE idEmpleado = ?",
        [nombreEmpleado, edad, localidad, cargo, sede, años, idEmpleado],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al actualizar el empleado");
            }
            res.send("Empleado actualizado con éxito!!");
        }
    );
});

// Eliminar un empleado
app.delete("/delete/:idEmpleado", (req, res) => {
    const idEmpleado = req.params.idEmpleado;

    if (!idEmpleado) {
        return res.status(400).send("ID de empleado no proporcionado");
    }

    db.query(
        "DELETE FROM Empleados WHERE idEmpleado = ?",
        [idEmpleado],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al eliminar el empleado");
            }

            if (result.affectedRows === 0) {
                return res.status(404).send("Empleado no encontrado");
            }

            res.send("Empleado eliminado con éxito");
        }
    );
});

// Obtener todos los empleados
app.get("/Empleados", (req, res) => {
    db.query("SELECT * FROM Empleados", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al obtener empleados");
        }
        res.send(result);
    });
});

// Crear un nuevo producto
app.post("/Productos/create", (req, res) => {
    const { nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock } = req.body;

    db.query(
        "INSERT INTO Productos (nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al crear el producto");
            }
            res.send(result);
        }
    );
});

// Actualizar un producto
app.put("/Productos/update", (req, res) => {
    const { idProducto, nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock } = req.body;

    db.query(
        "UPDATE Productos SET nombreProducto = ?, marca = ?, modelo = ?, tipo = ?, precio = ?, garantia = ?, descripcion = ?, stock = ? WHERE idProducto = ?",
        [nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock, idProducto],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al actualizar el producto");
            }
            res.send("Producto actualizado con éxito!!");
        }
    );
});

// Eliminar un producto
app.delete("/Productos/delete/:idProducto", (req, res) => {
    const idProducto = req.params.idProducto;

    if (!idProducto) {
        return res.status(400).send("ID de producto no proporcionado");
    }

    db.query(
        "DELETE FROM Productos WHERE idProducto = ?",
        [idProducto],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al eliminar el producto");
            }

            if (result.affectedRows === 0) {
                return res.status(404).send("Producto no encontrado");
            }

            res.send("Producto eliminado con éxito");
        }
    );
});

// Obtener todos los productos
app.get("/Productos", (req, res) => {
    db.query("SELECT * FROM Productos", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al obtener productos");
        }
        res.send(result);
    });
});

// Obtener productos con bajo stock
app.get("/Productos/bajo-stock", (req, res) => {
    db.query("SELECT * FROM Productos WHERE stock < 5", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al obtener productos con bajo stock");
        }
        res.json(result);
    });
});

app.post("/Proveedores/create", (req, res) => {
    const { nombreProveedor, contactoPrincipal, telefono, email, direccion, ciudad, pais, codigoPostal, tipoProveedor, condicionesPago, descuentos, plazoEntrega, categoriaProductos, estado, notas } = req.body;

    db.query(
        "INSERT INTO Proveedores (nombreProveedor,contactoPrincipal,telefono,email,direccion,ciudad,pais,codigoPostal,tipoProveedor,condicionesPago,descuentos,plazoEntrega,categoriaProductos,estado,notas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [nombreProveedor, contactoPrincipal, telefono, email, direccion, ciudad, pais, codigoPostal, tipoProveedor, condicionesPago, descuentos, plazoEntrega, categoriaProductos, estado, notas],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al registrar el proveedor");
            }
            res.send(result);
        }
    );
});

app.put("/Proveedores/update", (req, res) => {
    const { idProveedores, nombreProveedor, contactoPrincipal, telefono, email, direccion, ciudad, pais, codigoPostal, tipoProveedor, condicionesPago, descuentos, plazoEntrega, categoriaProductos, estado, notas } = req.body;

    db.query(
        "UPDATE Proveedores SET nombreProveedor = ?, contactoPrincipal = ?, telefono = ?, email = ?, direccion = ?, ciudad = ?, pais = ?, codigoPostal = ?, tipoProveedor = ?, condicionesPago = ?, descuentos = ?, plazoEntrega = ?, categoriaProductos = ?, estado = ?, notas = ? WHERE idProveedores = ?",
        [nombreProveedor, contactoPrincipal, telefono, email, direccion, ciudad, pais, codigoPostal, tipoProveedor, condicionesPago, descuentos, plazoEntrega, categoriaProductos, estado, notas, idProveedores],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al actualizar el proveedor");
            }
            res.send(result);
        }
    );
});

app.delete("/Proveedores/delete/:idProveedores", (req, res) => {
    const idProveedores = req.params.idProveedores;

    if (!idProveedores) {
        return res.status(400).send("ID de proveedor no proporcionado");
    }

    db.query(
        "DELETE FROM Proveedores WHERE idProveedores = ?",
        [idProveedores],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al eliminar el proveedor");
            }

            if (result.affectedRows === 0) {
                return res.status(404).send("Proveedor no encontrado");
            }

            res.send("Proveedor eliminado con éxito");
        }
    );
});

app.get("/Proveedores", (req, res) => {
    db.query("SELECT * FROM Proveedores", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al obtener proveedor");
        }
        res.send(result);
    });
});

app.post("/Ventas/create", (req, res) => {
    const { idEmpleado, idProducto, factura, fechaVenta, precioIndividual, totalVenta, cantidad, metodoPago, estado } = req.body;

    db.query(
        "INSERT INTO Ventas (idEmpleado, idProducto, factura, fechaVenta, precioIndividual, totalVenta, cantidad, metodoPago, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [idEmpleado, idProducto, factura, fechaVenta, precioIndividual, totalVenta, cantidad, metodoPago, estado],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al registrar la venta");
            }
            res.send("Venta registrada con éxito!!");
        }
    );
});

app.put("/Ventas/update", (req, res) => {
    const { idVenta, idEmpleado, idProducto, factura, fechaVenta, precioIndividual, totalVenta, cantidad, metodoPago, estado } = req.body;

    db.query(
        "UPDATE Ventas SET idEmpleado = ?, idProducto = ?, factura = ?, fechaVenta = ?, precioIndividual = ?, totalVenta = ?, cantidad = ?, metodoPago = ?, estado = ? WHERE idVenta = ?",
        [idEmpleado, idProducto, factura, fechaVenta, precioIndividual, totalVenta, cantidad, metodoPago, estado, idVenta],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al actualizar la venta");
            }
            res.send("Venta actualizada con éxito!!");
        }
    );
});

app.delete("/Ventas/delete/:idVenta", (req, res) => {
    const idVenta = req.params.idVenta;

    if (!idVenta) {
        return res.status(400).send("ID de venta no proporcionado");
    }

    db.query(
        "DELETE FROM Ventas WHERE idVenta = ?",
        [idVenta],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al eliminar la venta");
            }

            if (result.affectedRows === 0) {
                return res.status(404).send("Venta no encontrada");
            }

            res.send("Venta eliminada con éxito");
        }
    );
});

app.get("/Ventas", (req, res) => {
    db.query("SELECT * FROM Ventas", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error al obtener ventas");
        }
        res.send(result);
    });
});


// Iniciar el servidor
app.listen(3006, () => {
    console.log("Servidor corriendo en el puerto 3006");
});
