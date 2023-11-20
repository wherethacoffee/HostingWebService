import Sugerencia from "../models/sugerencia.model.js";

export const add = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    try {
        const newSugerencia = Sugerencia({
            nombre,
            correo,
            mensaje
        });
        const sugerenciaSaved = await newSugerencia.save();

        res.json({ message: `Item ${sugerenciaSaved._id} registered successfully`})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSugerencias = async (req, res) => {
    const sugerencias = await Sugerencia.find();
    res.json(sugerencias);
};

export const getSugerencia = async (req, res) => {
    const sugerencia = await Sugerencia.findById(req.params.id);
    if (!sugerencia) return res.status(404).json({ message: 'Item not found' });

    res.json(sugerencia);
};

export const update = async (req, res) => {
    const sugerencia = await Sugerencia.findByIdAndUpdate(req.params.id, req.body);
    if (!sugerencia) return res.status(404).json({ message: 'Item not found' });

    res.json(sugerencia)
};

export const remove = async (req, res) => {
    const sugerencia = await Sugerencia.findByIdAndDelete(req.params.id);
    if (!sugerencia) return res.status(404).json({ message: 'Item not found' });

    res.json(sugerencia)
}