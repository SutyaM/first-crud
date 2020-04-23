
exports.up = (knex) => {
  return knex.schema.createTable('categories', (table) => {
    table.increments();
    table.string('name');
    table.enu('status', ['important', 'family', 'free-time']);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories');
};
