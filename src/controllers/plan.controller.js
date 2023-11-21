import Plan from "../models/plan.model.js";
import { generatePDFDetails } from "../middlewares/pdfConverter.js";

export const add = async (req, res) => {
    const { nombre, precio, descripcion, caracteristicas } = req.body;
    try {
        const newPlan = Plan({
            nombre,
            precio,
            descripcion,
            caracteristicas
        });
        const planSaved = await newPlan.save();

        res.json({ message: `Item ${planSaved._id} registered successfully`})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPlanes = async (req, res) => {
    const planes = await Plan.find();
    res.json(planes);
};

export const getPlan = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) return res.status(404).json({ message: 'Plan not found' });
    
        generatePDFDetails(req, res, plan);
    } catch (error) {
        console.error('Error al obtener el plan:', error);
        res.status(500).json({ error: 'Error al obtener el plan' });
    }
};

export const update = async (req, res) => {
    const plan = await Plan.findByIdAndUpdate(req.params.id, req.body);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });

    res.json(plan)
};

export const remove = async (req, res) => {
    const plan = await Plan.findByIdAndDelete(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });

    res.json(plan)
};