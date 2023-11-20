import ExcelJS from "exceljs";

export const createXLSX = (res, filename, data) => {
    try {
        const wb = new ExcelJS.Workbook();
        const ws = wb.addWorksheet('Registros');

        const headers = Object.keys(data[0]);

        ws.addRow(headers);

        data.forEach(item => {
            const row = headers.map(header => item[header]);
            ws.addRow(row);
        });

        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        wb.xlsx.write(res)
            .then(() => {
                res.end();
            })
            .catch((error) => {
                console.error('Error al enviar el archivo XLSX:', error);
                res.status(500).json({ error: 'Error al enviar el archivo XLSX' });
            });
    } catch (error) {
        console.error('Error al crear el archivo XLSX:', error);
        res.status(500).json({ error: 'Error al crear el archivo XLSX' });
    }
}