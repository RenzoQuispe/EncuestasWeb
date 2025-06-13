import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export const db = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_username,
    password: process.env.DB_password,
    database: process.env.DB_database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


export async function testDBConnection() {
    try {
        const connection = await db.getConnection();
        await connection.ping();
        console.log('Conexion exitosa a la base de datos MySQL :D');
        connection.release();
    } catch (error) {
        console.error('Error al conectar con la base de datos MySQL:', error);
    }
}