import {cliente} from '../routers/storage/cliente.js';
import {alquiler} from '../routers/storage/alquiler.js';


export const tablaJWT = {
    "alquiler": alquiler,
    "automovil": "automovil",
    "cliente": cliente,
    "empleado": "empleado",
    "registro-devolucion": "registro-devolucion",
    "registro-entrega": "registro-entrega",
    "reserva": "reserva",
    "sucursal-automovil": "sucursal-automovil",
    "sucursal": "sucursal"
}