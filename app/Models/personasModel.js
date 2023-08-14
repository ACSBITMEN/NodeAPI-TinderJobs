import knex from '../knex'; // Importa tu instancia de Knex

export default {
    async getAllPersonas() {
        return knex('personas');
    },

    async getPersonaById(id) {
        return knex('personas').where('id', id).first();
    },

    async createPersona(persona) {
        return knex('personas').insert(persona).returning('*');
    },

    async updatePersona(id, updatedPersona) {
        return knex('personas').where('id', id).update(updatedPersona);
    },

    async deletePersona(id) {
        return knex('personas').where('id', id).del();
    }
};
