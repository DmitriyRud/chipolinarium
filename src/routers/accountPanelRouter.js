const accountPanelRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const AccountPanel = require('../views/AccountPanel');

accountPanelRouter.get('/', (req, res) => {
  renderTemplate(AccountPanel, {}, res);
});

module.exports = accountPanelRouter;