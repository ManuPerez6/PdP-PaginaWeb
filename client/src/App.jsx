import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import FormularioEmpleados from "./componentes/formularios/FormularioEmpleados";
import TablaEmpleados from "./componentes/tablas/TablaEmpleados";
import FormularioProductos from "./componentes/formularios/FormularioProductos";
import TablaProductos from "./componentes/tablas/TablaProductos";
import FormularioProveedores from "./componentes/formularios/FormularioProveedores";
import TablaProveedores from "./componentes/tablas/TablaProveedores";
import FormularioVentas from "./componentes/formularios/FormularioVentas";
import TablaVentas from "./componentes/tablas/TablaVentas";
import {
  getEmpleados, addEmpleado, updateEmpleado, deleteEmpleado
} from "./funciones/FuncionesEmpleados";
import {
  getProductos, addProducto, updateProducto, deleteProducto
} from "./funciones/FuncionesProductos";
import {
  getProveedores, addProveedor, updateProveedor, deleteProveedor
} from "./funciones/FuncionesProveedores";
import {
  getVentas, addVenta, updateVenta, deleteVenta
} from "./funciones/FuncionesVentas";
import { startCheckingStock } from "./reportes/InformeBajoStock";

const App = () => {
  // Estado para empleados
  const [idEmpleado, setIdEmpleado] = useState();
  const [nombreEmpleado, setNombreEmpleado] = useState("");
  const [edad, setEdad] = useState();
  const [localidad, setLocalidad] = useState("");
  const [cargo, setCargo] = useState("");
  const [sede, setSede] = useState("");
  const [años, setAños] = useState();
  const [empleadosList, setEmpleadosList] = useState([]);
  const [editarEmpleado, setEditarEmpleado] = useState(false);

  // Estado para productos
  const [idProducto, setIdProducto] = useState();
  const [nombreProducto, setNombreProducto] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [tipo, setTipo] = useState("");
  const [precio, setPrecio] = useState();
  const [garantia, setGarantia] = useState();
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState();
  const [productosList, setProductosList] = useState([]);
  const [editarProducto, setEditarProducto] = useState(false);

  // Estado para proveedores
  const [idProveedores, setIdProveedores] = useState();
  const [nombreProveedor, setNombreProveedor] = useState("");
  const [contactoPrincipal, setContactoPrincipal] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [tipoProveedor, setTipoProveedor] = useState("");
  const [condicionesPago, setCondicionesPago] = useState("");
  const [descuentos, setDescuentos] = useState("");
  const [plazoEntrega, setPlazoEntrega] = useState("");
  const [categoriaProductos, setCategoriaProductos] = useState("");
  const [estado, setEstado] = useState("");
  const [notas, setNotas] = useState("");
  const [proveedoresList, setProveedoresList] = useState([]);
  const [editarProveedor, setEditarProveedor] = useState(false);

  // Estados para ventas
  const [idVenta, setIdVenta] = useState();
  const [idEmpleadoVenta, setIdEmpleadoVenta] = useState();
  const [factura, setFactura] = useState("");
  const [fechaVenta, setFechaVenta] = useState("");
  const [precioIndividual, setPrecioIndividual] = useState();
  const [totalVenta, setTotalVenta] = useState();
  const [idProductoVenta, setIdProductoVenta] = useState();
  const [cantidad, setCantidad] = useState();
  const [metodoPago, setMetodoPago] = useState("");
  const [estadoVenta, setEstadoVenta] = useState("");
  const [ventasList, setVentasList] = useState([]);
  const [editarVenta, setEditarVenta] = useState(false);

  useEffect(() => {
    getEmpleados(setEmpleadosList);
    getProductos(setProductosList);
    getProveedores(setProveedoresList);
    getVentas(setVentasList);
    // Inicia la comprobación de bajo stock
    const stopCheckingStock = startCheckingStock(updateProducto);

    // Cleanup function to stop checking stock when component unmounts
    return () => stopCheckingStock();
  }, []);

  // Funciones para empleados
  const clearEmpleadoForm = () => {
    setNombreEmpleado("");
    setEdad("");
    setLocalidad("");
    setCargo("");
    setSede("");
    setAños("");
    setEditarEmpleado(false);
    setIdEmpleado("");
  };

  const addEmpleadoFn = () => {
    addEmpleado({ nombreEmpleado, edad, localidad, cargo, sede, años }, clearEmpleadoForm, () => getEmpleados(setEmpleadosList));
  };

  const editarEmpleadoFn = (val) => {
    setEditarEmpleado(true);
    setIdEmpleado(val.idEmpleado);
    setNombreEmpleado(val.nombreEmpleado);
    setEdad(val.edad);
    setLocalidad(val.localidad);
    setCargo(val.cargo);
    setSede(val.sede);
    setAños(val.años);
  };

  const updateEmpleadoFn = () => {
    updateEmpleado({ idEmpleado, nombreEmpleado, edad, localidad, cargo, sede, años }, clearEmpleadoForm, () => getEmpleados(setEmpleadosList));
  };

  // Funciones para productos
  const clearProductoForm = () => {
    setNombreProducto("");
    setMarca("");
    setModelo("");
    setTipo("");
    setPrecio("");
    setGarantia("");
    setDescripcion("");
    setStock("");
    setEditarProducto(false);
    setIdProducto("");
  };

  const addProduct = () => {
    addProducto({ nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock }, () => getProductos(setProductosList), clearProductoForm);
  };

  const editarProductoFn = (valProducto) => {
    setEditarProducto(true);
    setIdProducto(valProducto.idProducto);
    setNombreProducto(valProducto.nombreProducto);
    setMarca(valProducto.marca);
    setModelo(valProducto.modelo);
    setTipo(valProducto.tipo);
    setPrecio(valProducto.precio);
    setGarantia(valProducto.garantia);
    setDescripcion(valProducto.descripcion);
    setStock(valProducto.stock);
  };

  const updateProduct = () => {
    updateProducto({ idProducto, nombreProducto, marca, modelo, tipo, precio, garantia, descripcion, stock }, () => getProductos(setProductosList), clearProductoForm);
  };

  // Funciones para proveedores
  const clearProveedorForm = () => {
    setNombreProveedor("");
    setContactoPrincipal("");
    setTelefono("");
    setEmail("");
    setDireccion("");
    setCiudad("");
    setPais("");
    setCodigoPostal("");
    setTipoProveedor("");
    setCondicionesPago("");
    setDescuentos("");
    setPlazoEntrega("");
    setCategoriaProductos("");
    setEstado("");
    setNotas("");
    setEditarProveedor(false);
    setIdProveedores("");
  };

  const addProveedorFn = () => {
    addProveedor({ nombreProveedor, contactoPrincipal, telefono, email, direccion, ciudad, pais, codigoPostal, tipoProveedor, condicionesPago, descuentos, plazoEntrega, categoriaProductos, estado, notas }, clearProveedorForm, () => getProveedores(setProveedoresList));
  };

  const editarProveedorFn = (valProveedor) => {
    setEditarProveedor(true);
    setIdProveedores(valProveedor.idProveedores);
    setNombreProveedor(valProveedor.nombreProveedor);
    setContactoPrincipal(valProveedor.contactoPrincipal);
    setTelefono(valProveedor.telefono);
    setEmail(valProveedor.email);
    setDireccion(valProveedor.direccion);
    setCiudad(valProveedor.ciudad);
    setPais(valProveedor.pais);
    setCodigoPostal(valProveedor.codigoPostal);
    setTipoProveedor(valProveedor.tipoProveedor);
    setCondicionesPago(valProveedor.condicionesPago);
    setDescuentos(valProveedor.descuentos);
    setPlazoEntrega(valProveedor.plazoEntrega);
    setCategoriaProductos(valProveedor.categoriaProductos);
    setEstado(valProveedor.estado);
    setNotas(valProveedor.notas);
  };

  const updateProveedorFn = () => {
    updateProveedor({ idProveedores, nombreProveedor, contactoPrincipal, telefono, email, direccion, ciudad, pais, codigoPostal, tipoProveedor, condicionesPago, descuentos, plazoEntrega, categoriaProductos, estado, notas }, clearProveedorForm, () => getProveedores(setProveedoresList));
  };

  // Funciones para ventas
  const clearVentaForm = () => {
    setIdEmpleadoVenta("");
    setFactura("");
    setFechaVenta("");
    setPrecioIndividual("");
    setTotalVenta("");
    setIdProductoVenta("");
    setCantidad("");
    setMetodoPago("");
    setEstadoVenta("");
    setEditarVenta(false);
    setIdVenta("");
  };

  const addVentaFn = () => {
    addVenta({ idEmpleado: idEmpleadoVenta, factura, fechaVenta, precioIndividual, totalVenta, idProducto: idProductoVenta, cantidad, metodoPago, estado: estadoVenta }, clearVentaForm, () => getVentas(setVentasList));
  };

  const editarVentaFn = (val) => {
    setEditarVenta(true);
    setIdVenta(val.idVenta);
    setIdEmpleadoVenta(val.idEmpleado);
    setFactura(val.factura);
    setFechaVenta(val.fechaVenta);
    setPrecioIndividual(val.precioIndividual);
    setTotalVenta(val.totalVenta);
    setIdProductoVenta(val.idProducto);
    setCantidad(val.cantidad);
    setMetodoPago(val.metodoPago);
    setEstadoVenta(val.estado);
  };

  const updateVentaFn = () => {
    updateVenta({ idVenta, idEmpleado: idEmpleadoVenta, factura, fechaVenta, precioIndividual, totalVenta, idProducto: idProductoVenta, cantidad, metodoPago, estado: estadoVenta }, clearVentaForm, () => getVentas(setVentasList));
  };

  return (
    <Router>
      <NavBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={
            <>
              <h2 className="mb-4">Gestión de Empleados</h2>
              <FormularioEmpleados
                nombreEmpleado={nombreEmpleado}
                setNombreEmpleado={setNombreEmpleado}
                edad={edad}
                setEdad={setEdad}
                localidad={localidad}
                setLocalidad={setLocalidad}
                cargo={cargo}
                setCargo={setCargo}
                sede={sede}
                setSede={setSede}
                años={años}
                setAños={setAños}
                editar={editarEmpleado}
                addEmpleado={addEmpleadoFn}
                updateEmpleado={updateEmpleadoFn}
                clearForm={clearEmpleadoForm}
              />
              <TablaEmpleados
                empleadosList={empleadosList}
                editarEmpleado={editarEmpleadoFn}
                deleteEmpleado={(val) => deleteEmpleado(val, () => getEmpleados(setEmpleadosList))}
              />
            </>
          } />
          <Route path="/productos" element={
            <>
              <h2 className="mb-4">Gestión de Productos</h2>
              <FormularioProductos
                nombreProducto={nombreProducto}
                setNombreProducto={setNombreProducto}
                marca={marca}
                setMarca={setMarca}
                modelo={modelo}
                setModelo={setModelo}
                tipo={tipo}
                setTipo={setTipo}
                precio={precio}
                setPrecio={setPrecio}
                garantia={garantia}
                setGarantia={setGarantia}
                descripcion={descripcion}
                setDescripcion={setDescripcion}
                stock={stock}
                setStock={setStock}
                editar={editarProducto}
                addProducto={addProduct}
                updateProducto={updateProduct}
                clearProductoForm={clearProductoForm}
              />
              <TablaProductos
                productosList={productosList}
                editarProducto={editarProductoFn}
                deleteProducto={(valProducto) => deleteProducto(valProducto, () => getProductos(setProductosList))}
              />
            </>
          } />
          <Route path="/proveedores" element={
            <>
              <h2 className="mb-4">Gestión de Proveedores</h2>
              <FormularioProveedores
                idProveedores={idProveedores}
                setIdProveedores={setIdProveedores}
                nombreProveedor={nombreProveedor}
                setNombreProveedor={setNombreProveedor}
                contactoPrincipal={contactoPrincipal}
                setContactoPrincipal={setContactoPrincipal}
                telefono={telefono}
                setTelefono={setTelefono}
                email={email}
                setEmail={setEmail}
                direccion={direccion}
                setDireccion={setDireccion}
                ciudad={ciudad}
                setCiudad={setCiudad}
                pais={pais}
                setPais={setPais}
                codigoPostal={codigoPostal}
                setCodigoPostal={setCodigoPostal}
                tipoProveedor={tipoProveedor}
                setTipoProveedor={setTipoProveedor}
                condicionesPago={condicionesPago}
                setCondicionesPago={setCondicionesPago}
                descuentos={descuentos}
                setDescuentos={setDescuentos}
                plazoEntrega={plazoEntrega}
                setPlazoEntrega={setPlazoEntrega}
                categoriaProductos={categoriaProductos}
                setCategoriaProductos={setCategoriaProductos}
                estado={estado}
                setEstado={setEstado}
                notas={notas}
                setNotas={setNotas}
                editarProveedor={editarProveedor}
                addProveedor={addProveedorFn}
                updateProveedor={updateProveedorFn}
                clearForm={clearProveedorForm}
              />
              <TablaProveedores
                proveedoresList={proveedoresList}
                editarProveedor={editarProveedorFn}
                deleteProveedor={(valProveedor) => deleteProveedor(valProveedor, () => getProveedores(setProveedoresList))}
              />
            </>
          } />
          <Route path="/ventas" element={
            <>
              <h2 className="mb-4">Gestión de Ventas</h2>
              <FormularioVentas
                idVenta={idVenta}
                setIdVenta={setIdVenta}
                idEmpleadoVenta={idEmpleadoVenta}
                setIdEmpleadoVenta={setIdEmpleadoVenta}
                factura={factura}
                setFactura={setFactura}
                fechaVenta={fechaVenta}
                setFechaVenta={setFechaVenta}
                precioIndividual={precioIndividual}
                setPrecioIndividual={setPrecioIndividual}
                totalVenta={totalVenta}
                setTotalVenta={setTotalVenta}
                idProductoVenta={idProductoVenta}
                setIdProductoVenta={setIdProductoVenta}
                cantidad={cantidad}
                setCantidad={setCantidad}
                metodoPago={metodoPago}
                setMetodoPago={setMetodoPago}
                estado={estadoVenta}
                setEstado={setEstadoVenta}
                editar={editarVenta}
                addVenta={addVentaFn}
                updateVenta={updateVentaFn}
                clearForm={clearVentaForm}
                getVentas={getVentas}
                setVentasList={setVentasList}
              />
              <TablaVentas
                ventasList={ventasList}
                editarVenta={editarVentaFn}
                deleteVenta={(val) => deleteVenta(val, () => getVentas(setVentasList))}
              />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;