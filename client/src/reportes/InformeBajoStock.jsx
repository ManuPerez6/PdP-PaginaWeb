import { checkBajoStock } from '../funciones/FuncionesProductos';

export const startCheckingStock = (updateProducto) => {
    const interval = setInterval(() => {
        checkBajoStock(updateProducto);
    }, 30000);

    return () => clearInterval(interval);
};
