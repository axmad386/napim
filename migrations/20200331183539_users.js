export const up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('username');
        table.string('email').unique();
        table.string('password');
        table.timestamp('created_at').defaultTo(knex.fn.now()).nullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now()).nullable()
        table.timestamp('deleted_at')
    });
};

export const down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
