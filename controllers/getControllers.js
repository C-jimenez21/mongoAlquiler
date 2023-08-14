import {con} from '../db/atlas.js';
/* 2. Mostrar todos los clientes registrados en la base de datos.*/
const getClientesRegistrados = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let cliente = db.collection('cliente');
        let clineteRegistrado = await cliente.find().toArray();
        res.send(clineteRegistrado); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 3. Obtener todos los automóviles disponibles para alquiler */
const getAutomovilDisponible = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let automovil = db.collection('automovil');
        let automovilDisponible = await automovil.find().toArray();
        res.send(automovilDisponible); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 4. Listar todos los alquileres activos junto con los datos de los clientes relacionados. */
const getAlquilerClientes = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let alquiler = db.collection('alquiler');
        let alquilerCliente = await alquiler.aggregate([
            {    
                $lookup:{
                    from: "cliente",
                    localField: "cliente",
                    foreignField: "cliente",
                    as: "fk_alquiler_cliente"
                }
            },
            {
                $match: {
                    estado: "Activo"
                }
            },
            {
                $project: {
                    "_id": 0,    
                    "inicio": 0,
                    "fin": 0,
                    "fk_alquiler_cliente._id": 0
                }
            }
        ]).toArray();
        res.send(alquilerCliente); 
    } catch (error) {
        res.status(500).json(error);
    }
       
};

/* 5. Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado. */
const getReservasPendientes = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let reserva = db.collection('reserva');
        let reservaCliente = await reserva.aggregate([
            {
                $match: {
                  estado: "Pendiente"
                }
            },
            {    
                $lookup:{
                    from: "cliente",
                    localField: "cliente",
                    foreignField: "cliente",
                    as: "fk_cliente"
                }
            },
            {    
                $lookup:{
                    from: "automovil",
                    localField: "automovil",
                    foreignField: "automovil",
                    as: "fk_automovil"
                }
            },
            {
                $unwind: "$fk_automovil",
            },
            {
                $unwind: "$fk_cliente"
            },
            {
                $project: {
                  "_id": 0,
                  "fk_cliente._id": 0,
                  "fk_automovil._id": 0
                }
            }
        ]).toArray();
        res.send(reservaCliente); 
    } catch (error) {
        res.status(500).json(error);
    }
       
};

/* 6. Obtener los detalles del alquiler con el ID_Alquiler específico. */
const getAlquilerEspecifico = async (req, res, next) => {
        if (!req.rateLimit) return;
        try {
            let db = await con();
            let alquiler = db.collection('alquiler');
            let alquilerEspecifico = await alquiler.aggregate([
                {
                    $match: {
                        alquiler: parseInt(req.params.id)
                    }
                },
                {    
                    $lookup:{
                        from: "cliente",
                        localField: "cliente",
                        foreignField: "cliente",
                        as: "fk_alquiler_cliente"
                    }
                },
                {
                    $project: {
                      "_id": 0,
                      "fk_alquiler_cliente._id": 0
                    }
                }
            ]).toArray();
            res.send(alquilerEspecifico); 
        } catch (error) {
            res.status(500).json(error);
        }
           
    };

/* 7. Listar los empleados con el cargo de "Vendedor". */
const getEmpleadoVendedor = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let empleado = db.collection('empleado');
        let empleadoVendedor = await empleado.find(
            {
                cargo: {$eq:"Vendedor"}
            }
        ).toArray();
        res.send(empleadoVendedor); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 8. Mostrar la cantidad total de automóviles disponibles en cada
sucursal. */
const getTotalAutomovilesDisponibles = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let sucursal_automovil = db.collection('sucursal_automovil');
        let TotalAutomoviles = await sucursal_automovil.aggregate([
            {    
                $lookup:{
                    from: "sucursal",
                    localField: "sucursal",
                    foreignField: "sucursal_id",
                    as: "fk_sucursal"
                }
            },
            {
                $unwind: "$fk_sucursal"
            },
            {
                $group: {
                  _id: "$fk_sucursal.nombre",
                  Cantidad_Disponible: {
                    $sum: "$cantidad_autos"
                  }
                }
            }
        ]).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 9. Obtener el costo total de un alquiler específico. */
const getCostoAlquiler = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let alquiler = db.collection('alquiler');
        let TotalAutomoviles = await alquiler.find(
            { 
                alquiler: parseInt(req.params.id) 
            }, 
            { 
                _id: 0, 
                cliente: 0, 
                inicio: 0,
                fin: 0, 
                estado: 0  
            }
        ).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 10. Listar los clientes con el DNI específico. */
const getClientesDNI = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let cliente = db.collection('cliente');
        let TotalAutomoviles = await cliente.find(
            {
                documento: req.params.DNI
            },
            {
                _id: 0
            }
        ).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 11. Mostrar todos los automóviles con una capacidad mayor a 5
personas. */
const getAutomovilCapacidad = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let automovil = db.collection('automovil');
        let TotalAutomoviles = await automovil.find(
            {
                capacidad: {$gt :5}
            }
        ).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};


export{
    getAlquilerClientes,
    getClientesRegistrados,
    getAutomovilDisponible,
    getReservasPendientes,
    getAlquilerEspecifico,
    getEmpleadoVendedor,
    getTotalAutomovilesDisponibles,
    getCostoAlquiler,
    getClientesDNI,
    getAutomovilCapacidad
}