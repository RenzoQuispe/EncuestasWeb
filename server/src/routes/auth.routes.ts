import express from 'express';
import { register, login, logout, check } from '../controllers/auth.controllers';
import { protectRoute } from '../middlewares/auth.middlewares';
//router
const router = express.Router();
// rutas
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/check', protectRoute, check);
export default router;