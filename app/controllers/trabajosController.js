import trabajosModel from '../Models/trabajosModel.js';

export default {
    async getAllTrabajos(req, res) {
        const trabajos = await trabajosModel.getAllTrabajos();
        res.json(trabajos);
    },

    async getTrabajoById(req, res) {
        const { id } = req.params;
        const trabajo = await trabajosModel.getTrabajoById(id);
        res.json(trabajo);
    },

    async createTrabajo(req, res) {
        const trabajo = req.body;
        // Aquí podrías calcular la cotización basada en la duración y la tarifa de la persona
        trabajo.cotizacion = trabajo.duracion * trabajo.tarifa;
        
        const newTrabajo = await trabajosModel.createTrabajo(trabajo);
        res.status(201).json(newTrabajo);
    },

    async updateTrabajo(req, res) {
        const { id } = req.params;
        const updatedTrabajo = req.body;
        // Aquí podrías actualizar la cotización si se modificó la duración o la tarifa
        if (updatedTrabajo.duracion || updatedTrabajo.tarifa) {
        updatedTrabajo.cotizacion = updatedTrabajo.duracion * updatedTrabajo.tarifa;
        }
        
        await trabajosModel.updateTrabajo(id, updatedTrabajo);
        res.status(204).send();
    },

    async deleteTrabajo(req, res) {
        const { id } = req.params;
        // Aquí podrías manejar la lógica para cancelar un trabajo y manejar los pagos correspondientes
        await trabajosModel.deleteTrabajo(id);
        res.status(204).send();
    },
};
