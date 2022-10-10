## API Take Home para gestionar clientes, miembros y notas

## Acerca del código

La applicación está hecha desde cero. El stack tecnológico es full Javascript con [NodeJS](https://nodejs.org).

El proyecto utiliza las siguientes dependencias(librerias) fundamentales para la solución:

* [**N**ode.js](https://nodejs.org): runtime environment
* [**E**xpress.js](http://expressjs.com): backend framework


### Prerequisitos

1. Instalar [Node.js](https://nodejs.org)

### Intalando dependencias (librerias)

Primero, ingresar a la carpeta base del directorio del proyecto:

```sh
$ cd take_home_api
```
Segundo, instalar dependencias

```sh
$ npm install
```
### Configuración de propiedades

En la base del directorio del proyecto se puede encontrar el archivo `.env` con propiedades de entorno de la aplicación.

En este archivo puede configurar: 
* Url de la base de datos
* Puerto de la aplicación
###### PORT
Cambiar valor al puerto deseado.

###### MONGODB_URI
Colocar la conexion en formato string a su base de datos mongo

### Documentación Apis
La documentacion de todas las apis se puede encontrar accediendo a http://localhost:{PORT}/api-doc
