
exports.up = (knex) => {
  return knex.schema.createTable('todos', (table) => {
    table.increments();
    table.string('name');
    table.string('description');
    table.enu('status', ['new', 'in progress', 'done']);
    table.integer('userID').unsigned();
    table.integer('categoryID').unsigned();
    
    table.foreign('userID').references('id').inTable('users');
    table.foreign('categoryID').references('id').inTable('categories');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos');
};
