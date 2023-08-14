Endpoints y Métodos
A continuación, se describen los endpoints disponibles en la aplicación junto con sus respectivos métodos HTTP y formatos de datos requeridos.

Endpoint: /Alquiler

Endpoint: /Alquiler
Método: GET
Obtiene la lista de todos los Alquileres registrados en la aplicación.

http://127.10.10.10:5050/Alquiler

Listar todos los alquileres activos junto con los datos de los clientes relacionados.

http://127.10.10.10:5050/Alquiler/estado

Obtener los detalles del alquiler con el ID_Alquiler específico

http://127.10.10.10:5050/Alquiler/5

Obtener el costo total de un alquiler específico.

http://127.10.10.10:5050/Alquiler/costo/5

Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.

http://127.10.10.10:5050/Alquiler/fecha

Obtener la cantidad total de alquileres registrados en la base de datos.

http://127.10.10.10:5050/Alquiler/total

Método: POST
Agrega los datos obligatorios

http://127.10.10.10:5050/Alquiler

Metodo: PUT
Agrega los datos obligatorios

http://127.10.10.10:5050/Alquiler/6

Metodo DELETE

http://127.10.10.10:5050/Alquiler/6

Endpoint: /Automovil
Método: GET
Obtiene la lista de todos los Alquileres registrados en la aplicación.

http://127.10.10.10:5050/Automovil

Obtener todos los automóviles disponibles para alquiler.

http://127.10.10.10:5050/Automovil/disponible

--Mostrar todos los automóviles con una capacidad mayor a 5 personas.

http://127.10.10.10:5050/Automovil/disponible

--.Listar todos los automóviles ordenados por marca y modelo.

por marca

http://127.10.10.10:5050/Automovil/ordenar/Modelo
Por modelo

http://127.10.10.10:5050/Automovil/ordenar/Modelo
Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.

http://127.10.10.10:5050/Alquiler/fecha

--Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles.

http://127.10.10.10:5050/Automovil/capacidadPlus

Método: POST
Agrega los datos obligatorios

http://127.10.10.10:5050/Automovil

https://github.com/C-jimenez21/filtro-NODEMetodo: PUT
Agrega los datos obligatorios

http://127.10.10.10:5050/Automovil/6

Metodo DELETE

http://127.10.10.10:5050/Automovil/6

Endpoint: /Cliente/:id
Método: GET
http://127.10.10.10:5050/Cliente
Lista los clientes por ID

http://127.10.10.10:5050/Cliente/DNI/12345678