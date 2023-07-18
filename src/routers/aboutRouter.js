const router = require('express').Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const About = require('../views/About.jsx');

router.get('/', async (req, res) => {
  renderTemplate(About, {}, res);
});

module.exports = router;
