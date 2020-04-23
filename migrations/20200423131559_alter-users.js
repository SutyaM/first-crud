
exports.up = (knex) => {
  return knex.schema.table('users', (table) => {
    table.integer('groupID').unsigned();

    table.foreign('groupID').references('id').inTable('groups');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
