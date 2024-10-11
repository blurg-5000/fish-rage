export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cryptids').del()

  // Inserts seed entries
  await knex('cryptids').insert([
    { id: 1, name: 'Lucas', size: 1, rage: 1, points: 10, image: '' },
    { id: 2, name: 'Kraken', size: 4, rage: 8, points: 80, image: '' },
    { id: 3, name: 'Cthulhu', size: 5, rage: 10, points: 100, image: '' },
    { id: 4, name: 'Salad Fingers', size: 2, rage: 2, points: 20, image: '' },
    { id: 5, name: 'Bunyip', size: 3, rage: 4, points: 40, image: '' }
  ])
}
