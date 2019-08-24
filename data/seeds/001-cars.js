
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Kia', model: 'Optima', VIN: '12E15D8E5DFE95S6A', mileage: '72000', transmission: 'automatic', title_status: 'clean'},
        {make: 'Honda', model: 'Pilot', VIN: '12A15E266F5EDFE95S6E', mileage: '43000', transmission: 'automatic', title_status: 'salvaged'},
        {make: 'Saturn', model: 'L200', VIN: 'KET4513G5NTR658HT53', mileage: '217000', transmission: 'automatic', title_status: 'salvaged'}
      ]);
    });
};
