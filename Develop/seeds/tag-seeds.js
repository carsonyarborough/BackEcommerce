const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {

  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
