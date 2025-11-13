# 🐾 Solución "Patitas Felices" - Conexión Node.js y MariaDB

Este proyecto tiene como objetivo **aprender a conectar un servidor Node.js con una base de datos MariaDB**, y practicar las operaciones básicas para administrar información desde el backend.

La idea es que el servidor actúe como intermediario entre **el usuario (frontend o Postman)** y **la base de datos**, permitiendo enviar y recibir datos mediante rutas.

## 📦 Instalación del proyecto

1. 1. En la terminal de **Visual Studio Code**, inicializa el proyecto con el siguiente comando:
    ```bash
        npm init -y
    ```
    Esto crea un archivo llamado package.json, donde se guardará la información y dependencias del proyecto.


2. Luego, instala las dependencias necesarias:
    ```bash
        npm install express mariadb
    ```

    - **Express:** es un framework de Node.js que permite crear servidores web de forma sencilla.
    - **MariaDB:** es el módulo que permite conectar Node.js con una base de datos MariaDB.

3. En MariaDB, ejecuta estas sentencias SQL para crear la base y la tabla:

    ```sql
        --Crear base de datos
        CREATE DATABASE patitas_felices; 

        -- Crear tabla con las columnas
        CREATE TABLE mascotas (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(50),
            especie VARCHAR(50),
            edad INT,
            estado_adopcion VARCHAR(50)
        );
    ```


## 🧠 ¿Cómo funciona este proyecto?
Podemos dividirlo en tres partes principales:

1. **Frontend / Cliente (Postman o sitio web):** Aquí es donde se envían las solicitudes al servidor.
Por ejemplo, un usuario puede “pedir” al servidor que muestre todas las mascotas, agregue una nueva, o elimine una adoptada.

2. **Backend (Node.js con Express):** El servidor recibe la solicitud, interpreta lo que se pide y se comunica con la base de datos para obtener o modificar los datos.

3. **Base de datos (MariaDB):** Guarda la información real: los registros de mascotas, sus datos, etc.
El servidor hace consultas SQL (queries) para interactuar con ella.


## 🔍 Explicación de conceptos importantes

- ### Pool:
    Un pool de conexiones es un conjunto de conexiones abiertas con la base de datos. Permite reutilizarlas sin tener que abrir una nueva cada vez (mejora el rendimiento).

- ### Query:
    Una query es una consulta SQL que el servidor envía a la base de datos. Sirve para obtener, insertar, modificar o eliminar información.

- ### Conexión:
    Es el “puente” entre el backend (Node.js) y la base de datos (MariaDB). Se usa para enviar consultas y recibir resultados.

## 🧩 Código principal (server.js)
El archivo server.js se encarga de:
1. Crear el servidor con Express.
2. Configurar la conexión a la base de datos
3. Definir las rutas (endpoints) para realizar las operaciones CRUD.

## ¿Cómo probar este proyecto con Postman?
1. Luego de completar los pasos anteriores, inicializa el servidor escribiendo en la terminal:

    ```bash
        node server.js
    ```
    Si todo funciona bien, deberías ver algo como: **Servidor ejecutándose en http://localhost:3000**

2. Abre Postman y usa la URL: http://localhost:3000/mascotas

3. Desde Postman, puedes probar las diferentes operaciones: 

| **Método** | **Endpoint** | **Descripción** | **Tipo de cuerpo (Body)** | **Ejemplo de Body JSON** |
|:-----------:|:-------------|:----------------|:---------------------------|:--------------------------|
| **GET** | `/mascotas` | Obtiene todas las mascotas registradas. | ❌ No aplica | — |
| **GET** | `/mascotas/:id` | Obtiene una mascota específica según su ID. | ❌ No aplica | — |
| **POST** | `/mascotas` | Agrega una nueva mascota a la base de datos. | ✅ raw → JSON | {<br>  "nombre": "Luna",<br>  "especie": "Perro",<br>  "edad": 3,<br>  "estado_adopcion": "Disponible"<br>} |
| **PUT** | `/mascotas/:id` | Actualiza los datos de una mascota existente. | ✅ raw → JSON | {<br>  "nombre": "Luna",<br>  "especie": "Perro",<br>  "edad": 4,<br>  "estado_adopcion": "Adoptada"<br>} |
| **DELETE** | `/mascotas/:id` | Elimina una mascota según su ID. | ❌ No aplica | — |