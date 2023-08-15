import {cliente} from '../routers/storage/cliente.js';
import {alquiler} from '../routers/storage/alquiler.js';
import {empleado} from '../routers/storage/empleado.js';
import {automovil} from '../routers/storage/automovil.js';


export const tablaJWT = {
    "alquiler": alquiler,
    "automovil": automovil,
    "cliente": cliente,
    "empleado": empleado,
    "registro-devolucion": "registro-devolucion",
    "registro-entrega": "registro-entrega",
    "reserva": "reserva",
    "sucursal": "sucursal-automovil",
    "sucursal": "sucursal"
}