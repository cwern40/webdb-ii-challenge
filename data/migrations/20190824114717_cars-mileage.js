
exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.decimal('mileage');
    })
};

exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('color');
    })
};
