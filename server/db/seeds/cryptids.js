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
      description: `damn, that's a big octopus!`,
    },
    {
      id: 3,
      name: 'Cthulhu',
      size: 5,
      rage: 10,
      points: 100,
      image: 'cthulhu.png',
      description: `needs to calm the hell down`,
    },
    {
      id: 4,
      name: 'Jason Statham',
      size: 2,
      rage: 3,
      points: 30,
      image: 'jason-statham.png',
      description: `caught on camera many times - who knows if he really exists?`,
    },
    {
      id: 5,
      name: 'Bunyip',
      size: 3,
      rage: 4,
      points: 40,
      image: 'bunyip.png',
      description: `scarier than he looks`,
    },
    {
      id: 6,
      name: 'Samsquatch',
      size: 3,
      rage: 4,
      points: 40,
      image: 'samsquatch.png',
      description: `got himself some jack links sponsorship`,
    },
    {
      id: 7,
      name: 'Empty Spam Can',
      size: 1,
      rage: 1,
      points: 0,
      image: 'spam_can_small.png',
      description: `totally not an easter egg to another project`,
    },
    {
      id: 8,
      name: 'Gumboot',
      size: 2,
      rage: 2,
      points: 10,
      image: 'gumboot.png',
      description: `legend says he ate the other gumboot`,
    },
  ])
}
