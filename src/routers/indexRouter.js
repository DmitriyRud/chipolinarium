const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

router.get('/', (req, res) => {
  renderTemplate(Home, {}, res);
});

module.exports = router;
