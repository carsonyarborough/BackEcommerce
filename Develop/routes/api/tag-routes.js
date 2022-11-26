const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});


router.post('/', (req, res) => {
  // create a new tag
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
