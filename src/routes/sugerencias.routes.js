import { Router } from "express";
import { getSugerencias, getSugerencia, add, update, remove } from "../controllers/sugerencia.controller.js";

const router = Router();

//Consultas
router.get('/listar', getSugerencias);
router.get('/buscar/:id', getSugerencia);

//Agregar
router.post('/agregar', add);

//Actualizar
router.put('/actualizar/:id', update);

//Eliminar
router.delete('/eliminar/:id', remove);

export default router;