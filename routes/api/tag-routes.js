const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
 // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tags) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new Tag
router.post('/', (req, res) => {
  try {
    const newTag = await Tag.create({tag_name: req.body.tag_name});
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a Tag by its id value
router.put('/:id', (req, res) => {
  try{
    const insert = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id,
        }
      }
    )
      if (!insert) {
        res.status(404).json({ message: 'No Tag found with that id!' });
        return;
      }
  
      res.status(200).json(insert);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log('Tag was deleted...')
    if (!deleteTag) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
