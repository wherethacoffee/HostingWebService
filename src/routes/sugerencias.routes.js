import { Router } from "express";
import { getSugerencias, getSugerencia, exportarSugerenciasXLSX, add, update, remove } from "../controllers/sugerencia.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { addSugerencia } from "../schemas/sugerencia.schema.js";

const router = Router();

//Consultas
router.get('/listar', getSugerencias);
router.get('/buscar/:id', getSugerencia);
router.get('/exportarSugerencias', exportarSugerenciasXLSX);
//Agregar
router.post('/agregar', validateSchema(addSugerencia), add);

//Actualizar
router.put('/actualizar/:id', update);

//Eliminar
router.delete('/eliminar/:id', remove);

export default router;