

# DIAGRAMA

[![img](https://github.com/C-jimenez21/mongoAlquiler/raw/main/img/Diagrama%20libros.png)](https://github.com/C-jimenez21/filtro-NODE/blob/main/img/Diagrama libros.png)

------

### INFORMACION DEL PROYECTO

Esta documentación describe una aplicación de alquiler de vehiculos construida utilizando Node.js, Express.js y MongoDB como base de datos. La aplicación cuenta con un sistema de autenticación basado en JWT (JSON Web Tokens) y utiliza las librerías `class-transformer`, `class-validator`, `dotenv`, `express-session`, `jose`, `MongoDB`, `nodemon`, `reflect-metadata`, y `typescript`.

#### Componentes de la aplicación

una breve explicación sobre las dependencias que se manejaron

1. `class-transformer`: Una biblioteca que permite transformar objetos en clases personalizadas y viceversa. Es especialmente útil para la validación y serialización de datos en aplicaciones TypeScript.
2. `class-validator`: Una biblioteca que proporciona decoradores para validar clases y objetos basados en clases. Puede ser utilizado en combinación con `class-transformer` para validar los datos de entrada.
3. `dotenv`: Una biblioteca que permite cargar variables de entorno desde un archivo `.env`. Es útil para mantener configuraciones sensibles o cambiantes fuera del código fuente.
4. `express`: Un popular marco de aplicaciones web para Node.js que permite construir servidores HTTP de manera sencilla y eficiente.
5. `express-session`: Una biblioteca que proporciona middleware para manejar sesiones de usuario en aplicaciones Express.
6. `jose`: Una biblioteca que ofrece implementaciones de estándares de seguridad como JSON Web Tokens (JWT).
7. `MongoDB`: Un controlador para Node.js que permite interactuar con bases de datos MongoDB.
8. `nodemon`: Una herramienta que reinicia automáticamente la aplicación Node.js cuando detecta cambios en los archivos del proyecto. Es útil para el desarrollo.
9. `reflect-metadata`: Una biblioteca que proporciona soporte para el uso de metadatos de decoradores en TypeScript.
10. `typescript`: El lenguaje de programación que permite agregar tipado estático a JavaScript y compilarlo a código JavaScript para su ejecución.

## Requisitos previos

- Node js instalado en tu maquina (Recomendada v18.16.0)
- MongoDB instalado y configurado con las credenciales necesarias para conectarse a la base de datos.

## Instalación

**Repositorio a clonar:**

Clona este repositorio o descarga los archivos en tu máquina local.

- `git clone https://github.com/C-jimenez21/filtro-NODE`

**Instalación de dependencias:**

una vez clonado se procede a ejecutar el siguiente comando en la terminal:

```
npm install
```

## Instrucciones de uso

- Una vez instalado el proyecto se debe configurar las variables de entorno para ello crea el archivo **.env**, lo siguiente es la estructura que debe usar, también está en .env.example

```
MY_SERVER={"hostname":"uri-servidor", "port":"puerto de escucha"}
ATLAS_USER="Usuario de mongo"
ATLAS_PASSWORD="contraseña de mongo"
ATLAS_DATABASE="nombre de la base de datos de mongo"
```

**Instalación de la base de datos:**

Para instalar la base de datos y configurar las tablas necesarias, sigue estos pasos:

1. Asegúrate de tener MongoDB instalado en tu sistema y que estas conectado.
2. Abre la carpeta db y el archivo `schemas.mongodb`
3. A continuación ejecuta cada una de las peticiones.

Una vez realizado todo el proceso tendrás la base datos `mongoAlquiler` con sus respectivas tablas y datos en cada una de ellas para ejecutar las peticiones

**Arranque del programa:**

- iniciar transcopilador: `npm run tsc`

- iniciar nodemon que esta señalando a app.js : `npm run dev` en otra terminal si es necesario (Recuerda estar en la carpeta Dental-Date antes de ejecutar)

  El servidor debería iniciarse y estar listo para recibir solicitudes en la dirección `http://127.10.10.10:5050/` (puedes cambiar el puerto en el archivo `.env` si lo deseas).

- Thunder Client (extensión de Visual Studio Code) mostrará la respuesta de la solicitud en el panel de resultados. Aquí podrás ver el código de estado, los encabezados y el cuerpo de la respuesta. (agrega la solicitud HTTP para hacer las consultas, la URL se muestra despues de ejecutar nodemon en la consola asi: `Servidor activo en http://127.10.10.10:5050`


Una vez que observamos que el servidor esta activo procedemos a acceder a los router, sin embargo debemos generar el token antes por lo que procedemos:

#### *Ir el metodo GET -* 

```
http://127.10.10.10:5050/token/login
```

Esto nos dara una serie de caracteres, estos conforman nuestro token

Procedemos a copiar el token y a colocarlo en la parte de headers mas concretamente como "Authorization" y nos dirigimos al endpoint al cual le queramos realizar un peticion y si el token es valido, accederá

## Endpoints y Métodos

A continuación, se describen los endpoints disponibles en la aplicación junto con sus respectivos métodos HTTP y formatos de datos requeridos.

## GET

2. Mostrar todos los clientes registrados en la base de datos.
 3. Obtener todos los automóviles disponibles para alquiler 
 4. Listar todos los alquileres activos junto con los datos de los clientes relacionados. 
 5. Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado. 
 6. Obtener los detalles del alquiler con el ID_Alquiler específico. 
 7. Listar los empleados con el cargo de "Vendedor".
 8. Obtener el costo total de un alquiler específico. 
 9. Listar los clientes con el DNI específico.  
 10. Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.  
 11. Mostrar los empleados con cargo de "Gerente" o "Asistente". 
     alquiler 
 12. Listar todos los automóviles ordenados por marca y modelo. 
 13. Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección. 
 14. Obtener la cantidad total de alquileres registrados en la base de datos 
 15. Obtener los datos del cliente que realizó la reserva con ID_Reserva específico. 
 16. Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'. 

17. Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección. 
18. Obtener la cantidad total de alquileres registrados en la base de datos estén disponibles.

20. Obtener los datos del cliente que realizó la reserva con ID_Reserva específico. 

21. Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.

    


```
http://127.10.10.10:5050/campus/automovilDisponible
http://127.10.10.10:5050/campus/reservasPendientes
http://127.10.10.10:5050/campus/alquilerEspecifico/:id
http://127.10.10.10:5050/campus/empleadoVendedor
http://127.10.10.10:5050/campus/automovilesDisponibles
http://127.10.10.10:5050/campus/costoAlquiler/:id
http://127.10.10.10:5050/campus/clientesDNI/:DNI
http://127.10.10.10:5050/campus/automovilCapacidad
http://127.10.10.10:5050/campus/alquilerFecha
http://127.10.10.10:5050/campus/reservasPorCliente/:id_cliente
http://127.10.10.10:5050/campus/empleadosCargo
http://127.10.10.10:5050/campus/clienteConAlquiler
http://127.10.10.10:5050/campus/OrderAutoMarcaModelo
http://127.10.10.10:5050/campus/sucursal/cantidadAutoBySucursal
http://127.10.10.10:5050/campus/cantidadAlquileres
http://127.10.10.10:5050/campus/autoCapacidadMayorCinco
http://127.10.10.10:5050/campus/reservaClienteEspecifico/:id_reserva
http://127.10.10.10:5050/campus/alquileresEntrefecha


```



## Contacto

Si tienes alguna pregunta o comentario sobre esta aplicación, no dudes en ponerte en contacto con nosotros a través de [cristianjj21@gmail.com](mailto:cristianjj21@gmail.com). ¡Esperamos que disfrutes usando nuestra aplicación de agendamiento de citas odontológicas!
