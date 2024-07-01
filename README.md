# proyecto7
// DB_URL=mongodb+srv://alvarozihara:6T5uESElsqccn1lC@cluster0.gthcgls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

MODELO PARA CREAR UN JUEGO --> Nombre, Imagen, Precio, categoria (puzzle, aventura, miedo, coches, deportes, plataformas)

Endpoints JUEGOS
  <-------->
URL: http://localhost:3000/api/v1/juegos
Método: GET
Descripción: Obtiene una lista de todos los juegos en la base de datos.
Respuesta exitosa: Código 200 y un array de objetos de juegos.

 <-------> 
URL: http://localhost:3000/api/v1/juegos/:id
Método: GET
Descripción: Obtiene un juego específico por su ID.
Parámetros URL: id - ID del juego.
Respuesta exitosa: Código 200 y el objeto del juego.

 <------>

URL: http://localhost:3000/api/v1/juegos/categoria/:categoria
Método: GET
Descripción: Obtiene una lista de juegos que pertenecen a una categoría específica.
Parámetros URL: categoria - Categoría de los juegos.
Respuesta exitosa: Código 200 y un array de juegos que coinciden con la categoría.

 <------>

URL: http://localhost:3000/api/v1/juegos/precio/:precio
Método: GET
Descripción: Obtiene una lista de juegos cuyo precio es menor que un valor específico.
Parámetros URL: precio - Precio máximo de los juegos.
Respuesta exitosa: Código 200 y un array de juegos con un precio menor al especificado.

 <------->

URL: http://localhost:3000/api/v1/juegos
Método: POST
Descripción: Crea un nuevo juego en la base de datos.
Respuesta exitosa: Código 201 y el objeto del juego creado.

 <------->


URL: http://localhost:3000/api/v1/juegos/:id
Método: PUT
Descripción: Actualiza los detalles de un juego específico usando su ID.
Parámetros URL: id - ID del juego.
Respuesta exitosa: Código 200 y el objeto del juego actualizado.


<-------> 


URL: http://localhost:3000/api/v1/juegos/:id
Método: DELETE
Descripción: Elimina un juego específico usando su ID.
Parámetros URL: id - ID del juego.
Respuesta exitosa: Código 200 y el objeto del juego eliminado.

     <--------------------->

MODELO PARA CERAR UNA PLATAFORMA ----> nombre, imagen

Endpoints PLAFORMAS

  <------>

URL: http://localhost:3000/api/v1/plataformas
Método: GET
Descripción: Obtiene una lista de todas las plataformas en la base de datos.
Respuesta exitosa: Código 200 y un array de objetos de plataformas.


  <------>

URL: http://localhost:3000/api/v1/plataformas/:id
Método: GET
Descripción: Obtiene una plataforma específica por su ID.
Parámetros URL: id - ID de la plataforma.
Respuesta exitosa: Código 200 y el objeto de la plataforma.


  <----->

URL: http://localhost:3000/api/v1/plataformas
Método: POST
Descripción: Crea una nueva plataforma en la base de datos.
Respuesta exitosa: Código 201 y el objeto de la plataforma creada.


 <----->

URL: http://localhost:3000/api/v1/plataformas/:id
Método: PUT
Descripción: Actualiza los detalles de una plataforma específica usando su ID.
Parámetros URL: id - ID de la plataforma.
Respuesta exitosa: Código 200 y el objeto de la plataforma actualizada.


  <------>


URL: http://localhost:3000/api/v1/plataformas/:id
Método: DELETE
Descripción: Elimina una plataforma específica usando su ID.
Parámetros URL: id - ID de la plataforma.
Respuesta exitosa: Código 200 y el objeto de la plataforma eliminada.



CREACION DE USUARIOS ----->   UserName, Password

ENDPOINTS USUARIOS

  <-------> 
Función: buscarUsuario(userName)
Descripción: Busca un usuario en la base de datos por el nombre de usuario proporcionado.
Entrada: userName - Nombre de usuario que se desea buscar.
Salida: Retorna el usuario encontrado o null si no existe.

 <------->

updateUserRole
Esta función permite actualizar el rol de un usuario específico.
Función: updateUserRole(req, res, next)
Descripción: Actualiza el rol de un usuario identificado por su ID.
Entrada:
req.params.userId: ID del usuario que se va a actualizar.
req.body.role: Nuevo rol que se asignará al usuario.
Salida:
Si el usuario se encuentra y el rol del solicitante es "admin", actualiza el rol y devuelve el usuario actualizado.
Si no se encuentra el usuario, devuelve un mensaje de error "Usuario no encontrado".
Si el solicitante no tiene permisos de administrador, devuelve un mensaje de error "No tienes permiso para realizar esta acción".


 <------->

 getUsers
Esta función obtiene todos los usuarios almacenados en la base de datos.

Función: getUsers(req, res, next)
Descripción: Obtiene una lista de todos los usuarios registrados.
Salida: Devuelve un array con todos los usuarios o un mensaje de error si ocurre algún problema.


 <-------->

 register
Esta función registra un nuevo usuario en la base de datos.

Función: register(req, res, next)
Descripción: Registra un nuevo usuario con el nombre de usuario y contraseña proporcionados.
Entrada: req.body.userName y req.body.password son necesarios para crear el nuevo usuario.
Salida:
Si el nombre de usuario ya existe, devuelve un mensaje de error "Nombre usuario ya existente".
Si se registra correctamente, devuelve el usuario creado con el código de estado 201.


 <--------> 

 login
Esta función maneja el proceso de inicio de sesión de un usuario.

Función: login(req, res, next)
Descripción: Verifica las credenciales del usuario y devuelve un token de autenticación si las credenciales son válidas.
Entrada: req.body.userName y req.body.password para autenticar al usuario.
Salida:
Si el usuario no existe, devuelve un mensaje de error "Usuario no existente".
Si la contraseña es incorrecta, devuelve un mensaje de error "La contraseña es incorrecta".
Si la autenticación es exitosa, devuelve el usuario autenticado junto con un token de sesión

 <-------> 
 
deleteUser
Esta función elimina un usuario de la base de datos.

Función: deleteUser(req, res)
Descripción: Elimina un usuario específico por su ID.
Entrada: req.params.userId - ID del usuario que se va a eliminar.
Salida:
Si el usuario se elimina correctamente, devuelve un mensaje "Usuario eliminado correctamente".
Si el usuario no se encuentra, devuelve un mensaje de error "Usuario no encontrado".
Si el solicitante no tiene permisos suficientes (excepto el administrador o el usuario mismo), devuelve un mensaje de error "No tienes permiso para realizar esta acción".



 





















 
