import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testDBConnection } from './database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    testDBConnection();
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
