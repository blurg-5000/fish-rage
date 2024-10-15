export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cryptids').del()

  // Inserts seed entries
  await knex('cryptids').insert([
    { id: 1, name: 'Lucas', size: 1, rage: 1, points: 10, image: 'lucas.png' },
    {
      id: 2,
      name: 'Kraken',
      size: 4,
      rage: 8,
      points: 80,
      image: 'kraken.png',
    },
    {
      id: 3,
      name: 'Cthulhu',
      size: 5,
      rage: 10,
      points: 100,
      image: 'cthulhu.png',
    },
    {
      id: 4,
      name: 'Jason Statham',
      size: 2,
      rage: 3,
      points: 30,
      image: 'jason-statham.png',
    },
    {
      id: 5,
      name: 'Bunyip',
      size: 3,
      rage: 4,
      points: 40,
      image: 'bunyip.png',
    },
    {
      id: 6,
      name: 'Samsquatch',
      size: 3,
      rage: 4,
      points: 40,
      image: 'samsquatch.png',
    },
    {
      id: 7,
      name: 'Empty Spam Can',
      size: 1,
      rage: 1,
      points: 0,
      image: 'spam-can.png',
    },
    {
      id: 8,
      name: 'Gumboot',
      size: 2,
      rage: 2,
      points: 10,
      image: 'gumboot.png',
    },
  ])
}
