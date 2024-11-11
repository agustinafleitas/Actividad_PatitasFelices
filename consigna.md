# Actividad: Mascotas en adopción "Patitas Felices" 🐾
## Objetivos 🎯
- Conectar un proyecto de Node.js con una base de datos MariaDB.
- Realizar operaciones básicas (CRUD) en MariaDB utilizando Node.js.

## Requisitos previos
- Tener instalado Node.js en tu equipo.
- Tener instalado MariaDB.
- Contar con un cliente para gestionar bases de datos, como HeidiSQL o DBeaver.

---

## Consigna: 🐱🐶

**Contexto**: La Fundación "Patitas Felices" se dedica a rescatar y dar en adopción mascotas. Pero, recientemente, se encontraron con un problema. Durante una campaña de adopción, debido a un fallo técnico, se ha perdido parte de la información de las mascotas de su base de datos. Como resultado, necesitan ayuda urgente para restaurar la información.

### Tareas a realizar:
1. Completar las partes faltantes del código del archivo *server.js*, para que permita ingresar, actualizar y eliminar los datos de la base de datos(las parte faltantes estan comentadas).

2. Crear una base de datos en *MariaDB*. Dentro de la misma, crear una tabla llamada **"mascotas"** en la que contenga las columnas:
    - *ID* (Auto Incremental, Primary Key)
    - *nombre*(VARCHAR)
    - *especie*(VARCHAR)
   - *edad*(INT)
   - *estado_adopcion*(VARCHAR).

3. Conectar el proyecto *Node.js* con la base de datos de MariaDB

4. Testear las operaciones CRUD en *Postman*:
    - Crear nuevos datos de mascotas
    - Actualizar datos de mascotas existentes
    - Eliminar mascotas que han sido adoptadas

---

**Consideraciones**
Recuerda instalar las dependencias necesarias para iniciar el proyecto:
- Ejecuta npm init para crear un archivo package.json.
- Ejecuta npm install express mariadb para instalar las librerías necesarias.

---

## Preguntas:
1. ¿Por qué es importante el manejo de errores al realizar operaciones CRUD en una base de datos?

2. ¿Qué significa que una columna sea Auto Incremental y cuál es su función en este caso?

3. ¿Por qué es importante definir correctamente el tipo de datos de cada columna (por ejemplo, VARCHAR, INT)?

4. ¿Cómo se pueden realizar operaciones de "búsqueda" en la base de datos, como filtrar mascotas por nombre o especie, usando consultas SQL?


---

## Entrega: 📖
La entrega consistirá en un archivo PDF con:
- capturas de pantalla de los datos almacenados en MariaDB
- Capturas de pantalla de las pruebas realizadas en Postman (peticiones de creación, actualización y eliminación de datos)
- Respuesta a las preguntas

<div style="text-align: center;">
  <img src="image.png" width="300">
</div>