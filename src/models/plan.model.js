import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    precio: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    caracteristicas: {
        almacenamiento: {
            type: String,
            required: true,
        },
        ram: {
            type: String,
        },
        transferencia: {
            type: String,
            required: true,
        },
        plantillas: {
            type: String,
        },
        dominio: {
            type: String,
        },
        bdd: {
            type: String,
        },
        correo: {
            type: String,
        },
        otro: {
            type: String,
        }
    }
}, { strict: false });

export default mongoose.model('Plan', planSchema)