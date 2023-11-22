# API de web hosting

Este es un proyecto backend utilizando express y nodejs para un sitio web de hosting

## Ruta inicial ('/')

Muestra una frase de bienvenida

## Ruta de administradores ('/admin')

### Endpoint (POST: '/register')

Agrega una cuenta de administrador a la base de datos y crea una cookie con los datos del usuario registrado.

### Endpoint (POST: '/login')

Inicia sesión en una cuenta de administrador comparando las credenciales con las establecidas en la base de datos y crea una cookie con los datos del usuario logeado.

### Endpoint (GET: '/profile/')

Muestra las credenciales del usuario logeado.

### Endpoint (POST: '/logout')

Borra las cookies del usuario.

### Endpoint (GET: '/listar')

Lista todas los administradores en la base de datos.

### Endpoint (GET: '/buscar/:id')

Busca un usuario en la base de datos en base a su id.

### Endpoint (PUT: '/actualizar/:id')

Actualiza las credenciales del usuario en base a su id.

### Endpoint (DELETE: '/eliminar/:id')

Elimina las credenciales del usuario en base a su id.

## Ruta de sugerencias ('/sugerencias')

### Endpoint (GET: '/listar')

Lista todas las sugerencias en la base de datos.

### Endpoint (GET: '/buscar/:id')

Devuelve la sugerencia en base a su id.

### Endpoint (GET: '/exportarSugerencias')

Exporta una lista de sugerencias en formato .xlsx

### Endpoint (GET: '/buscar/:id')

Devuelve la sugerencia en base a su id.

### Endpoint (POST: '/agregar')

Agrega una sugerencia a la base de datos.

### Endpoint (PUT: '/actualizar/:id')

Actualiza los campos de alguna sugerencia en base a su id.

### Endpoint (DELETE: '/eliminar/:id')

Elimina una sugerencia de la base de datos en base a su id

## Ruta de sugerencias ('/planes')

### Endpoint (GET: '/listar')

Lista todas los planes en la base de datos.

### Endpoint (GET: '/buscar/:id')

Devuelve algun plan en base a su id.

### Endpoint (GET: '/exportarDetalles/:id')

Exporta un pdf con los detalles del servicio en base a su id

### Endpoint (GET: '/buscar/:id')

Devuelve el plan en base a su id.

### Endpoint (POST: '/agregar')

Agrega un plan a la base de datos.

### Endpoint (PUT: '/actualizar/:id')

Actualiza los campos de algun plan en base a su id.

### Endpoint (DELETE: '/eliminar/:id')

Elimina un plan de la base de datos en base a su id

## Ruta de contratos ('/contratos')

### Endpoint (GET: '/listar')

Lista todos los contratos en la base de datos.

### Endpoint (GET: '/buscar/:id')

Devuelve algun contrato en base a su id.

### Endpoint (GET: '/listarVigentes')

Devuelve todos los contratos vigentes

### Endpoint (GET: '/listarNContratos')

Devuelve el número de veces que se han contratado los servicios

### Endpoint (POST: '/agregar')

Agrega un contrato a la base de datos.

### Endpoint (PUT: '/actualizar/:id')

Actualiza los campos de algun contrato en base a su id.

### Endpoint (PUT: '/cancelarContrato/:id')

Cancela algun contrato.

### Endpoint (DELETE: '/eliminar/:id')

Elimina un contrato de la base de datos en base a su id