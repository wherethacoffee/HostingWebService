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
}