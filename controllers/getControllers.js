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

/* 12. Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'. */
const getAlquilerFecha = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let alquiler = db.collection('alquiler');
        let TotalAutomoviles = await alquiler.find(
            {
                inicio: {$eq:"2023-07-05"}
            }  
        ).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 13. Listar las reservas pendientes realizadas por un cliente específico. */
const getReservasPorCliente = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let reserva = db.collection('reserva');
        let TotalAutomoviles = await reserva.find(
            {
                cliente:parseInt(req.params.id_cliente)
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

/* 14. Mostrar los empleados con cargo de "Gerente" o "Asistente". */
const getEmpleadosCargo = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let empleado = db.collection('empleado');
        let TotalAutomoviles = await empleado.find(
            {
                $or: [{cargo: "Gerente"}, {cargo: "Asistente"}]
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

/* 15. Obtener los datos de los clientes que realizaron al menos un alquiler */

const getClienteConAlquiler = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let cliente = db.collection('cliente');
        let TotalAutomoviles = await cliente.aggregate([
            {
                $lookup: {
                    from: "alquiler",
                    localField: "cliente",
                    foreignField: "cliente",
                    as: "alquileres"
                }
            },
            {
                $match: {
                    "alquileres": { $gt: [] }  // Filtrar los clientes con alquileres
                }
            },
            {
                $project: {
                    _id: 0,
                    cliente: 1,
                    nombre: 1,
                    apellido: 1,
                    documento: 1,
                    direccion: 1,
                    numero: 1,
                    Email: 1
                }
            }
        ]).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 16. Listar todos los automóviles ordenados por marca y modelo. */
const getOrderAutoMarcaModelo = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let automovil = db.collection('automovil');
        let TotalAutomoviles = await automovil.aggregate([
            {
                $group: {
                    _id: "$marca",
                    modelos: {
                        $push: "$$ROOT"
                    }
                }
            },
            {
                $project: {
                    "modelos._id": 0,
                    "modelos.marca": 0
                }
            },
            { $sort: {_id: 1} }
        ]).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 17. Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección. */
const getCantidadAutoBySucursal = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let sucursal = db.collection('sucursal');
        let TotalAutomoviles = await sucursal.aggregate([
            {
                $lookup: {
                    from: "sucursal_automovil",
                    localField: "sucursal_id",
                    foreignField: "sucursal",
                    as: "automoviles"
                }
            },
            {
                $unwind: "$automoviles"
            },
            {
                $lookup: {
                    from: "automovil",
                    localField: "automoviles.automovil",
                    foreignField: "automovil",
                    as: "info_automovil"
                }
            },
            {
                $group: {
                    _id: {
                        sucursal_id: "$sucursal_id",
                        nombre: "$nombre",
                        direccion: "$direccion"
                    },
                    cantidad_automoviles: { $sum: "$automoviles.cantidad_autos" }
                }
            },
            {
                $project: {
                    _id: 0,
                    sucursal_id: "$_id.sucursal_id",
                    nombre_sucursal: "$_id.nombre",
                    direccion: "$_id.direccion",
                    cantidad_automoviles: 1
                }
            }
        ]).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};


/* 18. Obtener la cantidad total de alquileres registrados en la base de datos */
const getCantidadAlquileres = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let alquiler = db.collection('alquiler');
        let TotalAutomoviles = await alquiler.aggregate([
            {$count: 'alquiler'},
            {
                $project: {
                    'Total de Alquileres' : '$alquiler'
                }
            }
        ]).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 19. Mostrar los automóviles con capacidad igual a 5 personas y que
estén disponibles.*/
const getAutoCapacidadMayorCinco = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let automovil = db.collection('automovil');
        let TotalAutomoviles = await automovil.find(
            {
                capacidad: {$gt: 5}
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

/* 20. Obtener los datos del cliente que realizó la reserva con ID_Reserva específico. */
const getReservaClienteEspecifico = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let reserva = db.collection('reserva');
        let TotalAutomoviles = await reserva.aggregate([
            {
                $match: {
                    reserva: parseInt(req.params.id_reserva)
                }
            },
            {
                $lookup: {
                    from: "cliente",
                    localField: "cliente",
                    foreignField: "cliente",
                    as: "datos_cliente"
                }
            },
            {
                $unwind: "$datos_cliente"
            },
            {
                $project: {
                    _id: 0,
                    reserva: 1,
                    cliente: "$datos_cliente.cliente",
                    nombre: "$datos_cliente.nombre",
                    apellido: "$datos_cliente.apellido",
                    documento: "$datos_cliente.documento",
                    direccion: "$datos_cliente.direccion",
                    numero: "$datos_cliente.numero",
                    Email: "$datos_cliente.Email"
                }
            }
        ]).toArray();        
        res.send(TotalAutomoviles); 
    } catch (error) {
        res.status(500).json(error);
    }
};

/* 21. Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'. */
const getAlquileresEntrefecha = async (req, res, next) => {
    if (!req.rateLimit) return;
    try {
        let db = await con();
        let alquiler = db.collection('alquiler');
        let TotalAutomoviles = await alquiler.find(
            {
                inicio: {
                    $gte: "2023-07-05",
                    $lte: "2023-07-10"
                }
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
    getAutomovilCapacidad,
    getAlquilerFecha,
    getReservasPorCliente,
    getEmpleadosCargo,
    getClienteConAlquiler,
    getOrderAutoMarcaModelo,
    getCantidadAutoBySucursal,
    getCantidadAlquileres,
    getAutoCapacidadMayorCinco,
    getReservaClienteEspecifico,
    getAlquileresEntrefecha
}