import { Router } from "express";
import { 
    register, 
    login, 
    logout, 
    profile, 
    getAdmin, 
    getAdmins, 
    remove, 
    update } from "../controllers/admin.controller.js";
import { authRequired } from "../middlewares/validateToken.js"

const router = Router();

//Registrar
router.post('/register', register);

//Login
router.post('/login', login);

//Consultas
router.get('/listar', authRequired, getAdmins);
router.get('/buscar/:idAdmin', authRequired, getAdmin);

//Actualizar
router.put('/actualizar/:idAdmin', authRequired, update);

//Eliminar
router.delete('/eliminar/:idAdmin', authRequired, remove);

//Logout
router.post('/logout', logout);

//User data
router.get('/profile', authRequired, profile);
export default router;
