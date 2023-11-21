import { Router } from "express";
import { getContratos, 
    getContrato, 
    getContratosVigentes,
    getNContratos, 
    add, 
    update,
    cancelarContrato,
    generatePDFComprobante,
    remove } from "../controllers/contrato.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { addContrato } from "../schemas/contrato.schema.js"

const router = Router();

//Consultas
router.get('/listar', getContratos);
router.get('/buscar/:id', getContrato);
router.get('/listarVigentes', getContratosVigentes);
router.get('/listarNContratos', getNContratos);
router.get('/ticket/:id', generatePDFComprobante);

//Agregar
router.post('/agregar', validateSchema(addContrato),add);

//Actualizar
router.put('/actualizar/:id', update);
router.put('/cancelarContrato/:id', cancelarContrato);

//Eliminar
router.delete('/eliminar/:id', remove);

export default router;