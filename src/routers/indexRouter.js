const router = require('express').Router();
const bcrypt = require('bcrypt');

//const renderTemplate = require('../lib/renderTemplate');

router.get('/', async (req, res) => {
  res.send('все работает');
});

module.exports = router;
