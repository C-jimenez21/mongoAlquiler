import { Router } from 'express';
import {con} from '../db/atlas.js'
import {limitGet} from '../limit/config.js';
import {appMiddlewareCampusVerify, appDTOData} from '../middlewares/campus.middleware.js';
import {getAlquileresEntrefecha, getReservaClienteEspecifico, getAutoCapacidadMayorCinco, getCantidadAlquileres, getCantidadAutoBySucursal, getOrderAutoMarcaModelo, getClienteConAlquiler, getEmpleadosCargo, getReservasPorCliente, getAlquilerFecha ,getAutomovilCapacidad, getClientesDNI, getCostoAlquiler, getTotalAutomovilesDisponibles, getEmpleadoVendedor, getAlquilerClientes, getClientesRegistrados, getAutomovilDisponible, getReservasPendientes, getAlquilerEspecifico} from '../controllers/getControllers.js';

const appCampus = Router();

appCampus.get('/clientesRegistrados', limitGet(),appMiddlewareCampusVerify,  getClientesRegistrados);
appCampus.get('/alquilerClientes', limitGet(),appMiddlewareCampusVerify, getAlquilerClientes);
appCampus.get('/automovilDisponible', limitGet(),appMiddlewareCampusVerify, getAutomovilDisponible);
appCampus.get('/reservasPendientes', limitGet(),appMiddlewareCampusVerify, getReservasPendientes);
appCampus.get('/alquilerEspecifico/:id', limitGet(),appMiddlewareCampusVerify, getAlquilerEspecifico);
appCampus.get('/empleadoVendedor', limitGet(),appMiddlewareCampusVerify, getEmpleadoVendedor);
appCampus.get('/automovilesDisponibles', limitGet(),appMiddlewareCampusVerify, getTotalAutomovilesDisponibles);
appCampus.get('/costoAlquiler/:id', limitGet(),appMiddlewareCampusVerify, getCostoAlquiler);
appCampus.get('/clientesDNI/:DNI', limitGet(),appMiddlewareCampusVerify, getClientesDNI);
appCampus.get('/automovilCapacidad', limitGet(),appMiddlewareCampusVerify, getAutomovilCapacidad);
appCampus.get('/alquilerFecha', limitGet(),appMiddlewareCampusVerify, getAlquilerFecha);
appCampus.get('/reservasPorCliente/:id_cliente', limitGet(),appMiddlewareCampusVerify, getReservasPorCliente) 
appCampus.get('/empleadosCargo', limitGet(),appMiddlewareCampusVerify, getEmpleadosCargo) 
appCampus.get('/clienteConAlquiler', limitGet(),appMiddlewareCampusVerify, getClienteConAlquiler); 
appCampus.get('/OrderAutoMarcaModelo', limitGet(),appMiddlewareCampusVerify, getOrderAutoMarcaModelo); 
appCampus.get('/sucursal/cantidadAutoBySucursal', limitGet(),appMiddlewareCampusVerify, getCantidadAutoBySucursal); 
appCampus.get('/cantidadAlquileres', limitGet(),appMiddlewareCampusVerify, getCantidadAlquileres); 
appCampus.get('/autoCapacidadMayorCinco', limitGet(),appMiddlewareCampusVerify, getAutoCapacidadMayorCinco); 
appCampus.get('/reservaClienteEspecifico/:id_reserva', limitGet(),appMiddlewareCampusVerify, getReservaClienteEspecifico); 
appCampus.get('/alquileresEntrefecha', limitGet(),appMiddlewareCampusVerify, getAlquileresEntrefecha); 

appCampus.post('/:collection', limitGet(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    let dato = typeof(req.params.collection)
    console.log(dato);
    try {
        let db = await con();
        let result = db.collection(req.params.collection);
        let resRegister = await result.insertOne(req.body)
        res.status(201).send(resRegister);
    } catch (error) {
        //resul = JSON.parse(error.errInfo);
        res.status(error).send(resul);
    }
});



export default appCampus;