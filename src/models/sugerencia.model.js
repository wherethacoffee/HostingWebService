import mongoose from "mongoose";

const sugerenciaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Sugerencia", sugerenciaSchema);