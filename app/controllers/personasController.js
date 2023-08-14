import personasRoutes from '../routes/personasRoutes.js';

export default {
    async getAllPersonas(req, res) {
        const personas = await personasModel.getAllPersonas();
        res.json(personas);
    },

    async getPersonaById(req, res) {
        const { id } = req.params;
        const persona = await personasModel.getPersonaById(id);
        res.json(persona);
    },

    async createPersona(req, res) {
        const persona = req.body;
        const newPersona = await personasModel.createPersona(persona);
        res.status(201).json(newPersona);
    },

    async updatePersona(req, res) {
        const { id } = req.params;
        const updatedPersona = req.body;
        await personasModel.updatePersona(id, updatedPersona);
        res.status(204).send();
    },

    async deletePersona(req, res) {
        const { id } = req.params;
        await personasModel.deletePersona(id);
        res.status(204).send();
    },
};
