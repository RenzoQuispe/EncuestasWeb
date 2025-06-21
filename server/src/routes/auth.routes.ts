import express from 'express';
import { register } from '../controllers/auth.controllers';

//router
const router = express.Router();
// rutas
router.post('/register', register);

export default router;