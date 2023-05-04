const { nanoid } = require('nanoid');

const notes = [
  {
    id: nanoid(16),
    title: 'Belajar Javascript',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['javascript', 'programming'],
    body: 'Belajar Javascript itu menyenangkan',
  },
];

module.exports = notes;
