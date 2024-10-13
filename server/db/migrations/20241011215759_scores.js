/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('scores', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('score')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('scores')
}
