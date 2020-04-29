
exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.enu('role', ['admin', 'user']).defaultTo('user');
    table.string('password');
  })
};

exports.down = function(knex) {
  knex.schema.alterTable('users', (table) => {
    table.dropColumn('role');
    table.dropColumn('password');
  });
};
