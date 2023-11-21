import Contrato from "../models/contrato.model.js";
import { generatePDFTicket } from "../middlewares/pdfConverter.js";

export const add = async (req, res) => {
    const { nombreCliente, tarjeta, plan } = req.body;

    console.log(req.body);

    const primerDigito = tarjeta.numero.charAt(0);
    const empresa = primerDigito === '4' ? 'Visa' : (primerDigito === '5' ? 'Mastercard' : '');

    const nuevoNumero = '************' + tarjeta.numero.slice(-4);
    const nuevaFecha = tarjeta.fechaVencimiento;
    const nuevoCVV = '***';

    try {
        const newContrato = Contrato({
            nombreCliente,
            tarjeta: {numero: nuevoNumero, 
                    fechaVencimiento: nuevaFecha, 
                    cvv: nuevoCVV, 
                    empresa},
            plan
        });
        const contratoSaved = await newContrato.save();

        const contratoFound = await Contrato.findById(contratoSaved._id).populate('plan');
        if (!contratoFound) return res.status(404).json({ message: 'Contrato not found' });
    
        generatePDFTicket(req, res, contratoFound)
        //res.json({ message: `Item ${contratoSaved._id} registered successfully`})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getContratos = async (req, res) => {
    try {
        const contratos = await Contrato.find().populate('plan');
        res.json(contratos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getContrato = async (req, res) => {
    const contrato = await Contrato.findById(req.params.id);
    if (!contrato) return res.status(404).json({ message: 'Contrato not found' });

    res.json(contrato);
};

export const getContratosVigentes = async (req, res) => {
    try {
        const contratos = await Contrato.find();
        const contarActivos = (estado) => contratos.filter(item => item.vigente === estado).length;

        const nActivos = contarActivos("Si");
        const nInactivos = contarActivos("No");


        res.json({ 
            activos: nActivos,
            inactivos: nInactivos
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getNContratos = async (req, res) => {
    try {
        const contratos = await Contrato.find();
        const contarPorPlan = (planId) => contratos.filter(item => item.plan.toString() === planId).length;

        const nStarter = contarPorPlan("655c04d79b0b08cf34ac72ed");
        const nBasico = contarPorPlan("655c05c59b0b08cf34ac72f0");
        const nNoLimite = contarPorPlan("655c06f09b0b08cf34ac72f2");
        const nAvanzado = contarPorPlan("655c079c9b0b08cf34ac72f4");


        res.json({ 
            starter_contratados: nStarter,
            basico_contratados: nBasico,
            nolimite_contratados: nNoLimite,
            avanzado_contratados: nAvanzado
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const generatePDFComprobante = async (req, res) => {
    try {
        const contrato = await Contrato.findById(req.params.id).populate('plan');
        if (!contrato) return res.status(404).json({ message: 'Contrato not found' });
    
        generatePDFTicket(req, res, contrato)
        //res.send(contrato);
    } catch (error) {
        console.error('Error al obtener el plan:', error);
        res.status(500).json({ error: 'Error al obtener el plan' });
    }
}

export const update = async (req, res) => {
    const contrato = await Contrato.findByIdAndUpdate(req.params.id, req.body);
    if (!contrato) return res.status(404).json({ message: 'Contrato not found' });

    res.json(contrato)
};

export const cancelarContrato = async (req, res) => {
    
    const contrato = await Contrato.findByIdAndUpdate(req.params.id, { vigente: 'No' });
    if (!contrato) return res.status(404).json({ message: 'Contrato not found' });

    res.json({ message: `Contrato ${contratoSaved._id} cancelado`})
}

export const remove = async (req, res) => {
    const contrato = await Contrato.findByIdAndDelete(req.params.id);
    if (!contrato) return res.status(404).json({ message: 'Contrato not found' });

    res.json(contrato)
};