//En este código faltan varios fragmentos, deberan completar los datos necesarios para hacer la conexión con su base de datos y las diferentes funciones CRUD
//Las partes faltantes estan marcadas con "____________"

const express = require('__________');
const mariadb = require('__________');
const app = express();
const PORT = 3000;
app.use(express.json());

// Configuración de la conexión a la base de datos. Completar los datos
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_datos',
    connectionLimit: 5
});

// Ruta para obtener todas las mascotas
app.get('/________', async (req, res) => { //Completar los datos faltantes
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('______________'); //Completar los datos faltantes
        res.json(rows);
    } catch (err) {
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

//Ruta para obtener todas las mascotas por su id
app.____________('/_________/:_________', async (req, res) => {  //Completar los datos faltantes
    const { id } = req.params;  
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('_________________', [________]); //Completar los datos faltantes
        if (rows.length > 0) {
            res.json(rows[0]);  
        } else {
            res.status(404).json({ message: "____________" });  
        }
    } catch (err) {
        res.status(500).send(err);  // Manejo de errores
    } finally {
        if (conn) conn.release();  // Liberar la conexión
    }
});

// Ruta para agregar una nueva mascota
app._________('/_________', async (req, res) => { //Completar los datos faltantes
    const { nombre, especie, edad, estado_adopcion } = req.body;
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query(
            '_______________________', //Completar los datos faltantes
            [nombre, especie, edad, estado_adopcion]
        );
        res.status(201).send('Datos creados');
    } catch (err) {
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

// Ruta para actualizar el estado de adopción de una mascota
app._________('/________/:______', async (req, res) => { //Completar los datos faltantes
    const { _____ } = req.params;
    const { estado_adopcion } = req.body;
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query('______________', [estado_adopcion, __________]); //Completar los datos faltantes
        res.json({ id, estado_adopcion });
    } catch (err) {
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

// Ruta para eliminar una mascota
app.__________('/________/:____________', async (req, res) => { //Completar los datos faltantes
    const { id } = req.params;
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query('____________', [__________]); //Completar los datos faltantes
        res.json({ message: 'Mascota eliminada' });
    } catch (err) {
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

