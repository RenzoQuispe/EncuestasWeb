import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { testDBConnection } from './database';
import authRoutes from './routes/auth.routes'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
//rutas
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    testDBConnection();
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
