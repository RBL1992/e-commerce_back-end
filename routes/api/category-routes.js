const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Product } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/categories` endpoint
// find all categories
  // be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      if (!category) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }

      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const newData = await Category.create({category_name: req.body.category_name});
    res.status(200).json(newData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      req
    },
    {
      where: {
        id: req.params.id,
      }
    }
  )
    .then ((updateCategory) => {
      res.json(updateCategory);
    })
    .catch((err) => res.json(err));
});

  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!category) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
