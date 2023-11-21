import { Router } from "express";
import { getPlanes, getPlan, add, update, remove } from "../controllers/plan.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { addPlan } from "../schemas/plan.schema.js";

const router = Router();

//Consultas
router.get('/listar', getPlanes);
router.get('/buscar/:id', getPlan);

//Agregar
router.post('/agregar', validateSchema(addPlan), add);

//Actualizar
router.put('/actualizar/:id', update);

//Eliminar
router.delete('/eliminar/:id', remove);

export default router;