
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.string('VIN').unique().notNullable();
        tbl.string('transmission');
        tbl.string('title_status');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
