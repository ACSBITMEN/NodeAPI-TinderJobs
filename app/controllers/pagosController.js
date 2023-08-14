import pagosModel from '../Models/pagosModel.js';

export default {
    async getAllPagos(req, res) {
        const pagos = await pagosModel.getAllPagos();
        res.json(pagos);
    },

    async getPagoById(req, res) {
        const { id } = req.params;
        const pago = await pagosModel.getPagoById(id);
        res.json(pago);
    },

    async createPago(req, res) {
        const pago = req.body;
        const newPago = await pagosModel.createPago(pago);
        res.status(201).json(newPago);
    },

    async updatePago(req, res) {
        const { id } = req.params;
        const updatedPago = req.body;
        await pagosModel.updatePago(id, updatedPago);
        res.status(204).send();
    },

    async deletePago(req, res) {
        const { id } = req.params;
        await pagosModel.deletePago(id);
        res.status(204).send();
    },
};
