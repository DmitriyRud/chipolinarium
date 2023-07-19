const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
//const Items = require('../views/Items');

const Catalog = require('../views/Catalog');

const { Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { email } = req.session;
    const categories = await Category.findAll({ raw: true });
    renderTemplate(Catalog, { categories, email }, res);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    const items = await Item.findAll({ raw: true });
    renderTemplate(Items, { categories, items }, res);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
