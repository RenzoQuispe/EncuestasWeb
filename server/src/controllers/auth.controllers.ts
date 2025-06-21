import { Request,Response } from "express";
import { db } from "../database";
import { createAccessToken } from "../libs/jwt";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response): Promise<void> => {
    const { username, email, contraseña } = req.body;

    try {
        // validaciones básicas
        if (!username || !email || !contraseña) {
            res.status(400).json({ message: "username, email y contraseña son requeridos" });
            return;
        }

        if (contraseña.length < 6) {
            res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres" });
            return;
        }

        // verificar si el email ya está en uso
        const [emailResult] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        const emailRows = emailResult as any[];
        if (emailRows.length > 0) {
            res.status(409).json({ message: 'Correo en uso' });
            return;
        }

        // verificar si el username ya está en uso
        const [usernameResult] = await db.query('SELECT * FROM usuarios WHERE username = ?', [username]);
        const usernameRows = usernameResult as any[];
        if (usernameRows.length > 0) {
            res.status(409).json({ message: 'Username en uso' });
            return;
        }

        // hashear contraseña
        const hashedContraseña = await bcrypt.hash(contraseña, 10);

        // insertar nuevo usuario
        const [insertResult] = await db.query(
            'INSERT INTO usuarios (username, email, contraseña) VALUES (?, ?, ?)',
            [username, email, hashedContraseña]
        );


        const insertInfo = insertResult as { insertId: number }; // le decimos que insertInfo.insertId existe y es un numero
        const nuevoUsuarioId = insertInfo.insertId;

        // crear y enviar token
        createAccessToken(nuevoUsuarioId, res);
        res.status(201).json({ message: "Usuario registrado exitosamente", userId: nuevoUsuarioId });

    } catch (err) {
        console.error('Error al registrar usuario:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};