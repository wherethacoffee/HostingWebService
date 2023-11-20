import { z } from "zod";

export const addSugerencia = z.object({
    nombre: z.string({
        required_error: "This field must not be empty"
    }),
    correo: z.string({
        required_error: "Email must not be empty"
    }).email({
        message: "Please enter a valid email"
    }),
    mensaje: z.string({
        required_error: "This field must not be empty"
    }).max(100, {
        message: "100 characters maximum"
    })
});