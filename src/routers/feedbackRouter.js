const feedBackRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Feedback = require('../views/Feedback');

feedBackRouter.get('/', (req, res) => {
  renderTemplate(Feedback, {}, res);
});

module.exports = feedBackRouter;