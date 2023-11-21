import mongoose from "mongoose";

const contratoSchema = new mongoose.Schema({
    nombreCliente: {
        type: String,
        required: true,
    },
    tarjeta: {
        numero: {
            type: String,
        },
        fechaVencimiento: {
            type: String,
        },
        cvv: {
            type: String,
        },
        empresa: {
            type: String,
            default: ''
        }
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan',
        required: true,
    },
    fechaContratacion: {
        type: Date,
        default: Date.now
    },
    vigente: {
        type: String,
        default: 'Si'
    }
}, { strict: false })

export default mongoose.model('Contrato', contratoSchema)