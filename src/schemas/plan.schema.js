import { z } from "zod";

export const addPlan = z.object({
    nombre: z.string({
        required_error: "This field must not be empty"
    }),
    precio: z.number({
        required_error: "This field must not be empty"
    }).positive(),
    descripcion: z.string({
        required_error: "This field must not be empty"
    }).max(150, {
        message: "150 characters maximum"
    }),
    caracteristicas: z.object({
        almacenamiento: z.string().min(1),
        ram: z.string().optional(),
        transferencia: z.string().min(1),
        plantillas: z.string().optional(),
        dominio: z.string().optional(),
        bdd: z.string().optional(),
        correo: z.string().optional(),
        otro: z.string(),
    })
});