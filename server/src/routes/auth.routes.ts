import express from 'express';
import { register,login } from '../controllers/auth.controllers';

//router
const router = express.Router();
// rutas
router.post('/register', register);
router.post('/login',login);

export default router;