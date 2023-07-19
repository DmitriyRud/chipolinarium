const feedBackRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Feedback = require('../views/Feedback');

const { Category } = require('../../db/models');

feedBackRouter.get('/', async (req, res) => {
  const categories = await Category.findAll({ raw: true });
  renderTemplate(Feedback, { categories }, res);
});

module.exports = feedBackRouter;