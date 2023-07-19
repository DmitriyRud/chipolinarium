const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Items = require('../views/Items');
const Catalog = require('../views/Catalog');
const AllItems = require('../views/AllItems');

const { Category, Item } = require('../../db/models');
const { where, EagerLoadingError } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const { email } = req.session;
    const categories = await Category.findAll({
      raw: true,
    });
    renderTemplate(Catalog, { categories, email }, res);
  } catch (err) {
    console.error(err);
  }
});

router.get('/items', async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    const items = await Item.findAll({ raw: true });
    renderTemplate(AllItems, { categories, items }, res);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const categories = await Category.findAll({ raw: true });
    const items = await Item.findAll({ where: { category_id: id }, raw: true });
    renderTemplate(Items, { categories, items }, res);
  } catch (err) {
    console.error(err);
  }
});
// router.delete('/:id', async (req, res) => {
//   //const { id } = req.params;
//   console.log(req.params.id);
//   try {
//     // console.log('=========>');
//     // const cat = await Category.findOne({where: {id: req.params.id}})
//     // console.log('cat:', cat);
    
//     await Category.destroy({where: {id: req.params.id}, include: Item})
//     res.json({msg: 'success'})
    
//   } catch (error) {
//     console.log('RRREEEEEEEEE!!!!!!', error);
//   }

// }) // CATEGORY
//router.delete('/item/:id') //ITEM

module.exports = router;
