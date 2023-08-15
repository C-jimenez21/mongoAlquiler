import { Router } from 'express';
import {con} from '../db/atlas.js'
import {limitGet} from '../limit/config.js';
import {appMiddlewareCampusVerify, appDTOData} from '../middlewares/campus.middleware.js';
import {getAlquileresEntrefecha, getReservaClienteEspecifico, getAutoCapacidadMayorCinco, getCantidadAlquileres, getCantidadAutoBySucursal, getOrderAutoMarcaModelo, getClienteConAlquiler, getEmpleadosCargo, getReservasPorCliente, getAlquilerFecha ,getAutomovilCapacidad, getClientesDNI, getCostoAlquiler, getTotalAutomovilesDisponibles, getEmpleadoVendedor, getAlquilerClientes, getClientesRegistrados, getAutomovilDisponible, getReservasPendientes, getAlquilerEspecifico} from '../controllers/getControllers.js';

const appCampus = Router();

appCampus.get('/cliente/clientesRegistrados', limitGet(),appMiddlewareCampusVerify,  getClientesRegistrados);
appCampus.get('/alquiler/alquilerClientes', limitGet(),appMiddlewareCampusVerify, getAlquilerClientes);
appCampus.get('/automovil/automovilDisponible', limitGet(),appMiddlewareCampusVerify, getAutomovilDisponible);
appCampus.get('/reserva/reservasPendientes', limitGet(),appMiddlewareCampusVerify, getReservasPendientes);
appCampus.get('/alquiler/alquilerEspecifico/:id', limitGet(),appMiddlewareCampusVerify, getAlquilerEspecifico);
appCampus.get('/empleado/empleadoVendedor', limitGet(),appMiddlewareCampusVerify, getEmpleadoVendedor);
appCampus.get('/automovil/automovilesDisponibles', limitGet(),appMiddlewareCampusVerify, getTotalAutomovilesDisponibles);
appCampus.get('/alquiler/costoAlquiler/:id', limitGet(),appMiddlewareCampusVerify, getCostoAlquiler);
appCampus.get('/cliente/clientesDNI/:DNI', limitGet(),appMiddlewareCampusVerify, getClientesDNI);
appCampus.get('/automovil/automovilCapacidad', limitGet(),appMiddlewareCampusVerify, getAutomovilCapacidad);
appCampus.get('/alquiler/alquilerFecha', limitGet(),appMiddlewareCampusVerify, getAlquilerFecha);
appCampus.get('/reserva/reservasPorCliente/:id_cliente', limitGet(),appMiddlewareCampusVerify, getReservasPorCliente) 
appCampus.get('/empleado/empleadosCargo', limitGet(),appMiddlewareCampusVerify, getEmpleadosCargo) 
appCampus.get('/cliente/clienteConAlquiler', limitGet(),appMiddlewareCampusVerify, getClienteConAlquiler); 
appCampus.get('/automovil/OrderAutoMarcaModelo', limitGet(),appMiddlewareCampusVerify, getOrderAutoMarcaModelo); 
appCampus.get('/sucursal/cantidadAutoBySucursal', limitGet(),appMiddlewareCampusVerify, getCantidadAutoBySucursal); 
appCampus.get('/alquiler/cantidadAlquileres', limitGet(),appMiddlewareCampusVerify, getCantidadAlquileres); 
appCampus.get('/automovil/autoCapacidadMayorCinco', limitGet(),appMiddlewareCampusVerify, getAutoCapacidadMayorCinco); 
appCampus.get('/reserva/reservaClienteEspecifico/:id_reserva', limitGet(),appMiddlewareCampusVerify, getReservaClienteEspecifico); 
appCampus.get('/alquiler/alquileresEntrefecha', limitGet(),appMiddlewareCampusVerify, getAlquileresEntrefecha); 

appCampus.post('/:collection', limitGet(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    let dato = typeof(req.params.collection)
    console.log(dato);
    try {
        let db = await con();
        let result = db.collection(req.params.collection);
        console.log("salta el error");
        let resRegister = await result.insertOne(req.body)
        res.status(201).send(resRegister);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied);
        //resul = JSON.parse(error.errInfo);
        res.status(error).send(error);
    }
});



export default appCampus;