import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username must not be empty"
    }),
    pwd: z.string({
        required_error: "Password must not be empty"
    }).min(8, {
        message: "Password must be at least 8 characters"
    })
});

export const loginSchema = z.object({
    username: z.string({
        required_error: "Username must not be empty"
    }),
    pwd: z.string({
        required_error: "Password must not be empty"
    }).min(8, {
        message: "Password must be at least 8 characters"
    })
})