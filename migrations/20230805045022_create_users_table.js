/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema
    .createTable('personas', function(table) {
        table.increments('id').primary();
        table.string('nombre');
        table.string('habilidades');
        table.float('tarifa');
        // ... more columns
    })
    .createTable('empresas', function(table) {
        table.increments('id').primary();
        table.integer('nit');
        table.string('nombre');
        table.string('contacto');
        table.string('telefono');
        table.string('ubicacion');
        // ... more columns
    })
    .createTable('trabajos', function(table) {
        table.increments('id').primary();
        table.integer('persona_id').unsigned().references('id').inTable('personas');
        table.integer('empresa_id').unsigned().references('id').inTable('empresas');
        table.integer('duracion');
        table.datetime('fecha_inicio');
        table.datetime('fecha_fin');
        table.string('estado');
        // ... more columns
    })    
    .createTable('pagos', function(table) {
        table.increments('id').primary();
        table.integer('trabajo_id').unsigned().references('id').inTable('trabajos');
        table.decimal('monto');
        table.date('fecha_pago');
        table.integer('calificacion')
        // ... more columns
    });
};

export const down = function(knex) {
    return knex.schema
        .dropTable('empresas')
        .dropTable('personas')
        .dropTable('trabajos')
        .dropTable('pagos');
};