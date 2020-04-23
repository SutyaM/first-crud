
exports.up = (knex) => {
  return knex.schema.createTable('groups', (table) => {
    table.string('id');
    table.string('name');
    table.string('description');
    table.string('location');
    table.integer('maximalSize');
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
