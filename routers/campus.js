import { Router } from 'express';
import {con} from '../db/atlas.js'
import {limitGet} from '../limit/config.js';
import {appMiddlewareCampusVerify, appDTOData} from '../middlewares/campus.middleware.js';
import {getAlquileresEntrefecha, getReservaClienteEspecifico, getAutoCapacidadMayorCinco, getCantidadAlquileres, getCantidadAutoBySucursal, getOrderAutoMarcaModelo, getClienteConAlquiler, getEmpleadosCargo, getReservasPorCliente, getAlquilerFecha ,getAutomovilCapacidad, getClientesDNI, getCostoAlquiler, getTotalAutomovilesDisponibles, getEmpleadoVendedor, getAlquilerClientes, getClientesRegistrados, getAutomovilDisponible, getReservasPendientes, getAlquilerEspecifico} from '../controllers/getControllers.js';

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
appCampus.get('/reservaClienteEspecifico/:id_reserva', limitGet(), getReservaClienteEspecifico); 
appCampus.get('/alquileresEntrefecha', limitGet(), getAlquileresEntrefecha); 

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