import PDFDocument from "pdfkit";

export const generatePDFDetails = (req, res, planData) => {
    try {
        const doc = new PDFDocument();
        const filename = `${planData.nombre.toLowerCase()}_plan.pdf`;

        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        res.setHeader('Content-Type', 'application/pdf');

        doc.pipe(res);
        doc.fontSize(20).text(`Detalles del plan`, { align: 'center' });
        doc.moveDown();
        doc.fontSize(14).text(`Nombre: ${planData.nombre}`);
        doc.moveDown();
        doc.fontSize(14).text(`Precio normal: $${planData.precio}/año`);
        doc.moveDown();
        doc.fontSize(14).text(`Precio en oferta: $${planData.precio-planData.precio*0.5}/año`);
        doc.moveDown();
        doc.fontSize(14).text(`Descripción: ${planData.descripcion}`);
        doc.moveDown();
        doc.fontSize(14).text('Características:');
        Object.entries(planData.caracteristicas).forEach(([key, value]) => {
            if (value !== undefined) {
                doc.text(`  - ${value}`);
                doc.moveDown();
            }
        });
        doc.end();
    } catch (error) {
        console.error('Error al generar el PDF:', error);
        res.status(500).json({ error: 'Error al generar el PDF' });
    }
};

export const generatePDFTicket = (req, res, contratoData) => {
    const siguienteMes = new Date(contratoData.fechaContratacion);
    siguienteMes.setMonth(contratoData.fechaContratacion.getMonth() + 1);
    try {
        const doc = new PDFDocument();
        const filename = `contrato_${contratoData.nombreCliente.toLowerCase()}.pdf`;

        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        res.setHeader('Content-Type', 'application/pdf');

        doc.pipe(res);
        doc.fontSize(20).text(`¡Gracias por contratar web hosting!`, { align: 'center' });
        doc.moveDown();
        doc.fontSize(14).text(`Nombre del cliente: ${contratoData.nombreCliente}`);
        doc.moveDown();
        doc.fontSize(14).text(`Datos bancarios:`);
        Object.entries(contratoData.tarjeta).forEach(([key, value]) => {
            if (value !== undefined) {
                doc.text(`  - ${key} : ${value}`);
                doc.moveDown();
            }
        });
        doc.moveDown();
        doc.fontSize(14).text(`Plan contratado: ${contratoData.plan.nombre}`);
        doc.moveDown();
        doc.fontSize(14).text(`Fecha de contratación: ${contratoData.fechaContratacion}`);
        doc.moveDown();
        doc.fontSize(14).text(`Siguiente fecha de cobro: ${siguienteMes}`);
        doc.moveDown();
        doc.fontSize(14).text(`Vigente: ${contratoData.vigente}`);
        doc.moveDown();
        doc.fontSize(20).text(`Si desea cancelar un contrato, comuniquese con un administrador`, { align: 'center' });
        doc.end();
    } catch (error) {
        console.error('Error al generar el PDF:', error);
        res.status(500).json({ error: 'Error al generar el PDF' });
    }
};