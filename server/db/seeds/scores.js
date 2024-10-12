export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('scores').del()

  // Inserts seed entries
  await knex('scores').insert([
    {id: 1, name: 'Hannah', score: 100},
    {id: 2, name: 'Daph', score: 100},
    {id: 3, name: 'Jared', score: 100},
    {id: 4, name: 'Hooper', score: 10},
    {id: 5, name: 'Brody', score: 10},
    {id: 6, name: 'Quint', score: 10},
    {id: 7, name: 'Joel', score: 5},
    {id: 8, name: 'Mikey', score: 5},
    {id: 9, name: 'Nadia', score: 5},
    {id: 10, name: 'Luxo', score: -100}
  ])
}
