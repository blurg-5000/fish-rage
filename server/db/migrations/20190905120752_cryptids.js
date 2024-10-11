/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('cryptids', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('size')
    table.integer('rage')
    table.integer('points')
    table.string('image')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('cryptids')
}
