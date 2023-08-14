import knex from '../knex'; // Importa tu instancia de Knex

export default {
    async getAllTrabajos() {
        return knex('trabajos');
    },

    async getTrabajoById(id) {
        return knex('trabajos').where('id', id).first();
    },

    async createTrabajo(trabajo) {
        return knex('trabajos').insert(trabajo).returning('*');
    },

    async updateTrabajo(id, updatedTrabajo) {
        return knex('trabajos').where('id', id).update(updatedTrabajo);
    },

    async deleteTrabajo(id) {
        return knex('trabajos').where('id', id).del();
    }
};
