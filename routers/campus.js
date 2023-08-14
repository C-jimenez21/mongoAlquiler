import { Router } from 'express';
import {con} from '../db/atlas.js'
import {limitGet} from '../limit/config.js';
import {appMiddlewareCampusVerify, appDTOData} from '../middlewares/campus.middleware.js';
import {getAutoCapacidadMayorCinco, getCantidadAlquileres, getCantidadAutoBySucursal, getOrderAutoMarcaModelo, getClienteConAlquiler, getEmpleadosCargo, getReservasPorCliente, getAlquilerFecha ,getAutomovilCapacidad, getClientesDNI, getCostoAlquiler, getTotalAutomovilesDisponibles, getEmpleadoVendedor, getAlquilerClientes, getClientesRegistrados, getAutomovilDisponible, getReservasPendientes, getAlquilerEspecifico} from '../controllers/getControllers.js';

const appCampus = Router();

appCampus.get('/clientesRegistrados', limitGet(), getClientesRegistrados);
appCampus.get('/alquilerClientes', limitGet(), getAlquilerClientes);
appCampus.get('/automovilDisponible', limitGet(), getAutomovilDisponible);
appCampus.get('/reservasPendientes', limitGet(), getReservasPendientes);
appCampus.get('/alquilerEspecifico/:id', limitGet(), getAlquilerEspecifico);
appCampus.get('/empleadoVendedor', limitGet(), getEmpleadoVendedor);
appCampus.get('/automovilesDisponibles', limitGet(), getTotalAutomovilesDisponibles);
appCampus.get('/costoAlquiler/:id', limitGet(), getCostoAlquiler);
appCampus.get('/clientesDNI/:DNI', limitGet(), getClientesDNI);
appCampus.get('/automovilCapacidad', limitGet(), getAutomovilCapacidad);
appCampus.get('/alquilerFecha', limitGet(), getAlquilerFecha);
appCampus.get('/reservasPorCliente/:id_cliente', limitGet(), getReservasPorCliente) 
appCampus.get('/empleadosCargo', limitGet(), getEmpleadosCargo) 
appCampus.get('/clienteConAlquiler', limitGet(), getClienteConAlquiler); 
appCampus.get('/OrderAutoMarcaModelo', limitGet(), getOrderAutoMarcaModelo); 
appCampus.get('/cantidadAutoBySucursal', limitGet(), getCantidadAutoBySucursal); 
appCampus.get('/cantidadAlquileres', limitGet(), getCantidadAlquileres); 
appCampus.get('/autoCapacidadMayorCinco', limitGet(), getAutoCapacidadMayorCinco); 

appCampus.post('/', limitGet(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await usuario.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        resul = JSON.parse(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description);
        res.status(resul.status).send(resul);
    }
});



export default appCampus;