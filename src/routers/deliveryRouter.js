const deliveryRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Delivery = require('../views/Delivery');

deliveryRouter.get('/', (req, res) => {
  renderTemplate(Delivery, {}, res);
});

module.exports = deliveryRouter;
