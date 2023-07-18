const contactsRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Contacts = require('../views/Contacts');

contactsRouter.get('/', (req, res) => {
  renderTemplate(Contacts, {}, res);
});

module.exports = contactsRouter;