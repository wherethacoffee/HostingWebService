import { z } from "zod";

export const addContrato = z.object({
    nombreCliente: z.string({
        required_error: "This field must not be empty"
    }),
    tarjeta: z.object({
        numero: z.string({
            required_error: "This field must not be empty"
        }).length(16, { message: "Should be 16 digits" }),
        fechaVencimiento: z.string({
            required_error: "This field must not be empty"
        }).length(7, { message: "Should be 7 digits" }),
        cvv: z.string({
            required_error: "This field must not be empty"
        }).length(3, { message: "Should be 3 digits" }),
        empresa: z.string().optional()
    }),
    plan: z.string(), // Puedes ajustar esto dependiendo de cómo estás manejando los IDs de los planes
    fechaContratacion: z.date().optional(),
    vigente: z.string().optional()
});
