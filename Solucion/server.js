const express = require('express');  // Librería para crear el servidor
const mariadb = require('mariadb');  // Librería para conectar con MariaDB
const app = express();
const PORT = 3000;

app.use(express.json()); // Permite leer datos en formato JSON desde el cuerpo de las peticiones

// Configuración de la conexión a la base de datos.
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin', 
    database: 'patitas_felices',
    connectionLimit: 5
});

// ========================
//   1. OBTENER TODAS LAS MASCOTAS
// ========================
app.get('/mascotas', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM mascotas'); // Consulta todas las mascotas
        res.json(rows);
    } catch (err) {
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

// ========================
//   2. OBTENER UNA MASCOTA POR ID
// ========================
app.get('/mascotas/:id', async (req, res) => {
    const { id } = req.params;
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM mascotas WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: "Mascota no encontrada" });
        }
    } catch (err) {
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

// ========================
//   3. AGREGAR UNA NUEVA MASCOTA
// ========================
app.post('/mascotas', async (req, res) => {
    const { nombre, especie, edad, estado_adopcion } = req.body;
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query(
            'INSERT INTO mascotas (nombre, especie, edad, estado_adopcion) VALUES (?, ?, ?, ?)',
            [nombre, especie, edad, estado_adopcion]
        );
        res.status(201).send('Mascota agregada correctamente');
    } catch (err) {
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

// ========================
//   4. ACTUALIZAR ESTADO DE ADOPCIÓN
// ========================
app.put('/mascotas/:id', async (req, res) => {
    const { id } = req.params;
    const { estado_adopcion } = req.body;
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query(
            'UPDATE mascotas SET estado_adopcion = ? WHERE id = ?',
            [estado_adopcion, id]
        );
        res.json({ id, estado_adopcion });
    } catch (err) {
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

// ========================
//   5. ELIMINAR UNA MASCOTA
// ========================
app.delete('/mascotas/:id', async (req, res) => {
    const { id } = req.params;
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query('DELETE FROM mascotas WHERE id = ?', [id]);
        res.json({ message: 'Mascota eliminada correctamente' });
    } catch (err) {
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

// ========================
//   INICIO DEL SERVIDOR
// ========================
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});