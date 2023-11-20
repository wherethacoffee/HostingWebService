import { Router } from "express";
import { register, login } from "../controllers/admin.controller.js";

const router = Router();

//Agregar
router.post('/register', register);

//Login
router.post('/login', login);

export default router;
