
exports.up = (knex) => {
  return knex.schema.table('categories', (table) => {
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories');
};
