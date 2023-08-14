// Update with your config settings.

/**
 * @type { import("knex").Knex.Config }
 */
export const development = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456789',
    database: 'tinderdb'
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};

export const staging = {
  client: 'mysql',
  connection: {
    database: 'tinderdb',
    user: 'root',
    password: '123456789'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

export const production = {
  client: 'mysql',
  connection: {
    database: 'tinderdb',
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456789'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
