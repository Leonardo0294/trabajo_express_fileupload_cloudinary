# GALERÍA DE IMÁGENES CON CONEXIÓN A CLOUDINARY

## Instrucciones de Configuración y Ejecución

1. Instalaciones Necesarias

Para comenzar, asegúrate de tener las siguientes dependencias instaladas en tu proyecto:

```bash
npm install
```

Recuerda que estas dependencias son esenciales para ejecutar el servidor y todas las funcionalidades relacionadas con la galería de imágenes.

> > ## Configuración de la Base de Datos

Este proyecto requiere una base de datos MySQL. Asegúrate de configurar las variables de entorno correspondientes en tu archivo .env o en el lugar adecuado en tu entorno de desarrollo:

````bash
PORT=        // Puerto del servidor
DB_NAME=     // Nombre de la base de datos MySQL
DB_USER=     // Usuario de la base de datos
DB_PASSWORD= // Contraseña de la base de datos
DB_HOST=     // Host de la base de datos
DB_PORT=     // Puerto de la base de datos
DB_DIALECT=  // Dialecto de la base de datos (MySQL en este caso)
```

## Configuración de los Scripts

Asegúrate de configurar un script en tu archivo package.json para facilitar la ejecución del proyecto en modo desarrollo:

json

"scripts": {
  "dev" : "nodemon app.js"


## 4. Ejecución del Proyecto

Para iniciar el proyecto en modo desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

