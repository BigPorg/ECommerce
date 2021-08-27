const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: [Product],
    },
  })
    .then((categoryData) => { res.json(categoryData) })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  Category.findOne({
    include: {
      model: [Product],
    },
  })
    .then((categoryData) => { res.json(categoryData) })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((categoryData) => { res.json(categoryData) })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) => { res.json(categoryData) })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) => { res.json(categoryData) })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;